<script lang="ts" setup>
import {
	checkoutFormSchema,
	type CheckoutFormValues,
} from '~/constants/checkout-form-schema'

definePageMeta({
	layout: 'checkout-layout',
})

const cartStore = useCart()

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
const form = useForm<CheckoutFormValues>({
	validationSchema: checkoutFormSchema,
	validateOnMount: true,
	initialValues: {
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		address: '',
		comment: '',
	},
})

const onSubmit = (values: CheckoutFormValues) => {
	console.log('Form submitted with values:', values)
}
</script>

<template>
	<div class="mt-5">
		<h1 class="font-extrabold mb-8 text-[36px] leading-9">Оформление заказа</h1>

		<VeeForm :form="form">
			<form @submit="form.handleSubmit(onSubmit)">
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
							:loading="cartStore.loading"
							:totalAmount="cartStore.totalAmount"
						/>
					</div>
				</div>
			</form>
		</VeeForm>
	</div>
</template>
