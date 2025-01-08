<script lang="ts" setup>
import 'vue3-toastify/dist/index.css'
import {
	checkoutFormSchema,
	type CheckoutFormValues,
} from '~/constants/checkout-form-schema'

definePageMeta({
	layout: 'checkout-layout',
})

const cartStore = useCart()
const submitting = ref<boolean>(false)
const toast = (await import('vue3-toastify')).toast

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
	} catch (e: any) {
		console.error(e.message)
	}
}

const { handleSubmit } = useForm<CheckoutFormValues>({
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

const onSubmit = handleSubmit(async (values: CheckoutFormValues) => {
	console.log('Form submitted with values:', values)
	submitting.value = true

	try {
		const url = await $fetch('/api/order', {
			method: 'POST',
			body: values,
		})
		console.log('Order submitted successfully:', url)

		toast.success('Заказ успешно оформлен! 📝 Переход на оплату...', {
			icon: '✅',
			position: 'top-center',
			pauseOnHover: false,
			bodyClassName: 'font-nunito',
		})

		if (url) {
			location.href = url
		}
	} catch (e: any) {
		console.error('Order submission failed:', e)

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
</script>

<template>
	<div class="mt-5">
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
	</div>
</template>
