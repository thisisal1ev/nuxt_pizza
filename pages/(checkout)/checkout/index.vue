<script lang="ts" setup>
import {
	checkoutFormSchema,
	type CheckoutFormValues,
} from '~/constants/checkout-form-schema'
import { Api } from '~/services/apiClient'

definePageMeta({
	layout: 'checkout-layout',
})

const cartStore = useCart()
const submitting = ref<boolean>(false)

const onClickCountButton = (
	id: number,
	quantity: number,
	type: 'plus' | 'minus'
) => {
	const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
	cartStore.updateItemQuantity(id, newQuantity)
}

function removeCartItem(id: number) {
	try {
		cartStore.removeCartItem(id)
	} catch (e) {
		console.error(e)
	}
}

const { handleSubmit, setFieldValue } = useForm<CheckoutFormValues>({
	validationSchema: checkoutFormSchema,
	initialValues: {
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		address: '',
		comment: '',
	},
})

const { user } = useUserSession()

const onSubmit = handleSubmit(async (values: CheckoutFormValues) => {
	submitting.value = true

	try {
		const toast = (await import('vue3-toastify')).toast
		const url = await $fetch('/api/order', {
			method: 'POST',
			body: values,
		})

		toast.success('Заказ успешно оформлен! 📝 Переход на оплату...', {
			icon: '✅',
			position: 'top-center',
			pauseOnHover: false,
			bodyClassName: 'font-nunito',
		})

		if (url) {
			location.href = url
		}
	} catch (e) {
		console.error('Order submission failed:', e)
		const toast = (await import('vue3-toastify')).toast

		toast.error('Не удалось оформить заказ', {
			icon: '❌',
			position: 'top-center',
			pauseOnHover: false,
			bodyClassName: 'font-nunito',
		})
	} finally {
		submitting.value = false
	}
})

onMounted(async () => {
	async function fetchUserInfo() {
		const data = await Api.auth.getMe()
		const [firstName, lastName] = data.fullName.split(' ')

		setFieldValue('firstName', firstName)
		setFieldValue('lastName', lastName)
		setFieldValue('email', data.email)
	}

	if (user) {
		await fetchUserInfo()
	}
})
</script>

<template>
	<h1 class="font-extrabold mb-8 text-[36px] leading-9">Оформление заказа</h1>

	<form @submit="onSubmit">
		<div class="flex gap-10">
			<div class="flex flex-col gap-10 flex-1 mb-20">
				<CheckoutCart
					:items="cartStore.items"
					:loading="cartStore.loading"
					@onClickCountButton="onClickCountButton"
					@removeCartItem="removeCartItem"
				/>

				<CheckoutPersonalForm
					:class="
						cartStore.loading
							? 'opacity-40 pointer-events-none select-none'
							: ''
					"
				/>

				<CheckoutAddressForm
					:class="
						cartStore.loading
							? 'opacity-40 pointer-events-none select-none'
							: ''
					"
				/>
			</div>

			<div class="w-[450px]">
				<CheckoutSidebar
					:loading="cartStore.loading || submitting"
					:totalAmount="cartStore.totalAmount"
				/>
			</div>
		</div>
	</form>
</template>
