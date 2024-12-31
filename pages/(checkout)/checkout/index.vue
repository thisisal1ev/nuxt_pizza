<script lang="ts" setup>
definePageMeta({
	layout: 'checkout-layout',
})

const store = useCartStore()
if (store.items.length === 0) {
	onMounted(async () => await store.fetchCartItems())
}

const onClickCountButton = (
	id: number,
	quantity: number,
	type: 'plus' | 'minus'
) => {
	const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
	store.updateItemQuantity(id, newQuantity)
}

function removeCartItem(id: number) {
	try {
		store.removeCartItem(id)
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
						<div class="space-y-5" v-if="!store.loading">
							<CheckoutItem
								v-for="item in store.items"
								:key="item.id"
								:id="item.id"
								:imgURL="item.imgURL"
								:name="item.name"
								:quantity="item.quantity"
								:price="item.price"
								:details="
									item.ingredients.map(ingredient => ingredient.name).join(', ')
								"
								@onClickCountButton="
									(id, quantity, type) => onClickCountButton(id, quantity, type)
								"
								@onClickRemove="id => removeCartItem(id)"
							/>
						</div>
						<div class="space-y-5" v-else>
							<SkeletonCheckoutItem
								v-for="i in store.items.length ? store.items.length : 3"
								:key="i"
							/>
						</div>
					</template>
				</WhiteBlock>

				<WhiteBlock title="2. Персональные данные">
					<template #lower>
						<div class="grid grid-cols-2 gap-5">
							<Input
								class="text-base"
								name="firstName"
								type="text"
								placeholder="Имя"
							/>
							<Input
								class="text-base"
								name="lastName"
								type="text"
								placeholder="Фамилия"
							/>
							<Input
								class="text-base"
								name="email"
								type="text"
								placeholder="E-Mail"
							/>
							<Input
								class="text-base"
								name="phone"
								type="text"
								placeholder="Телефон"
							/>
						</div>
					</template>
				</WhiteBlock>

				<WhiteBlock title="3. Адрес доставки">
					<template #lower>
						<div class="flex flex-col gap-5">
							<Input
								name="firstName"
								class="text-base"
								type="text"
								placeholder="Имя"
							/>
							<Textarea
								class="text-base"
								placeholder="Комментарий к заказу"
								rows="5"
								name="Comment to address"
							></Textarea>
						</div>
					</template>
				</WhiteBlock>
			</div>

			<div class="w-[450px]">
				<WhiteBlock class="p-6 sticky top-4">
					<template #upper>
						<div class="flex flex-col gap-1">
							<span class="text-xl">Итого:</span>
							<span class="text-4xl font-extrabold"
								>{{ store.totalAmount }} &#8381;</span
							>
						</div>
					</template>

					<template #lower>
						<CheckoutItemDetails
							title="Стоимость товаров:"
							:value="`${store.totalAmount} &#8381;`"
						>
							<template #icon
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="mr-2 text-gray-300"
								>
									<path
										d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
									/>
									<path d="M12 22V12" />
									<path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
									<path d="m7.5 4.27 9 5.15" /></svg
							></template>
						</CheckoutItemDetails>

						<CheckoutItemDetails title="Налоги:" value="3000 &#8381;">
							<template #icon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="mr-2 text-gray-300"
								>
									<line x1="19" x2="5" y1="5" y2="19" />
									<circle cx="6.5" cy="6.5" r="2.5" />
									<circle cx="17.5" cy="17.5" r="2.5" />
								</svg>
							</template>
						</CheckoutItemDetails>

						<CheckoutItemDetails title="Доставка:" value="3000 &#8381;">
							<template #icon>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="mr-2 text-gray-300"
								>
									<path
										d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
									/>
									<path d="M15 18H9" />
									<path
										d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
									/>
									<circle cx="17" cy="18" r="2" />
									<circle cx="7" cy="18" r="2" />
								</svg>
							</template>
						</CheckoutItemDetails>

						<Button
							type="submit"
							class="w-full h-14 rounded-2xl mt-6 text-base font-bold"
						>
							Перейти к оплате

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="ml-2"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</Button>
					</template>
				</WhiteBlock>
			</div>
		</div>
	</div>
</template>
