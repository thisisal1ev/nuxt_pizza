<script lang="ts" setup>
import type { PizzaSize, PizzaType } from '~/constants/pizza'
import { getCartItemDetails } from '~/lib/get-cart-item-details'

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
</script>

<template>
	<div class="mt-5">
		<h1 class="font-extrabold mb-8 text-[36px] leading-9">Оформление заказа</h1>

		<div class="flex gap-10">
			<div class="flex flex-col gap-10 flex-1 mb-20">
				<WhiteBlock title="1. Корзина">
					<template #lower>
						<div
							class="space-y-5"
							v-if="!cartStore.loading && cartStore.items.length"
						>
							<CheckoutItem
								v-for="item in cartStore.items"
								:key="item.id"
								:id="item.id"
								:imgURL="item.imgURL"
								:name="item.name"
								:quantity="item.quantity"
								:price="item.price"
								:details="
									getCartItemDetails(
										item.ingredients,
										item.pizzaType as PizzaType,
										item.pizzaSize as PizzaSize,
									)
								"
								:disabled="cartStore.loading"
								@onClickCountButton="
									(id, quantity, type) => onClickCountButton(id, quantity, type)
								"
								@onClickRemove="id => removeCartItem(id)"
							/>
						</div>
						<div class="space-y-5" v-else-if="cartStore.loading">
							<SkeletonCheckoutItem
								v-for="i in cartStore.items.length ? cartStore.items.length : 3"
								:key="i"
							/>
						</div>
						<p v-else class="text-lg font-semibold">Корзина пуста</p>
					</template>
				</WhiteBlock>

				<WhiteBlock title="2. Персональные данные">
					<template #lower>
						<div class="grid grid-cols-2 gap-5">
							<Input
								class="text-base border-2 transition-colors duration-300 focus:border-primary"
								name="firstName"
								type="text"
								placeholder="Имя"
							/>
							<Input
								class="text-base border-2 transition-colors duration-300 focus:border-primary"
								name="lastName"
								type="text"
								placeholder="Фамилия"
							/>
							<Input
								class="text-base border-2 transition-colors duration-300 focus:border-primary"
								name="email"
								type="email"
								placeholder="E-Mail"
							/>
							<Input
								class="text-base border-2 transition-colors duration-300 focus:border-primary"
								name="phone"
								type="tel"
								placeholder="Телефон"
							/>
						</div>
					</template>
				</WhiteBlock>

				<WhiteBlock title="3. Адрес доставки">
					<template #lower>
						<div class="flex flex-col gap-5">
							<Input
								class="text-base border-2 transition-colors duration-300 focus:border-primary"
								name="firstName"
								type="text"
								placeholder="Имя"
							/>
							<Textarea
								class="text-base border-2 transition-colors duration-300 focus:border-primary"
								placeholder="Комментарий к заказу"
								rows="5"
								name="Comment to address"
							></Textarea>
						</div>
					</template>
				</WhiteBlock>
			</div>

			<div class="w-[450px]">
				<CheckoutSidebar
					:loading="cartStore.loading"
					:totalAmount="cartStore.totalAmount"
				/>
			</div>
		</div>
	</div>
</template>
