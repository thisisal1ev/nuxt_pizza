<script lang="ts" setup>
import type { PizzaSize, PizzaType } from '~/constants/pizza'
import { getCartItemDetails } from '~/lib/get-cart-item-details'
import { useCartStore } from '~/stores/cart'

defineProps<{
	isVisible: boolean
}>()

const store = useCartStore()

onMounted(async () => {
	await store.fetchCartItems()
})

const emit = defineEmits(['close'])

function close() {
	emit('close')
}

const onClickCountButton = (
	id: number,
	quantity: number,
	type: 'plus' | 'minus'
) => {
	const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
	store.updateItemQuantity(id, newQuantity)
}
</script>

<template>
	<div
		v-if="isVisible"
		@click="close"
		class="opacity-50 z-40 fixed bg-black top-0 left-0 w-full h-full"
	></div>
	<div
		v-motion
		:initial="{
			x: 250,
			transition: {
				duration: 250,
				delay: 0,
			},
		}"
		:enter="{
			x: 1,
			transition: {
				duration: 100,
				delay: 0,
			},
		}"
		:leave="{
			x: 250,
			transition: {
				duration: 250,
				delay: 0,
			},
		}"
		v-if="isVisible"
		class="fixed top-0 right-0 outline-none w-1/4 z-50 bg-[#f1f4ee] overscroll-none transform duration-500 h-screen"
	>
		<div class="flex flex-col h-full justify-between">
			<div class="flex flex-col items-start p-10">
				<div class="flex items-center justify-between w-full">
					<h4>
						<span
							>В корзине
							<b
								>{{ !store.loading ? store.items.length : '...' }} товара</b
							></span
						>
					</h4>
					<button type="button" @click="close">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</button>
				</div>
			</div>

			<div class="overflow-auto flex-1 grow space-y-5">
				<CartDrawerItem
					v-if="!store.loading"
					v-for="item in store.items"
					:onClickCountButton="
						type => onClickCountButton(item.id, item.quantity, type)
					"
					:onClickRemove="() => store.removeCartItem(item.id)"
					:class="'py-3 px-5'"
					:key="item.id"
					:id="item.id"
					:imgURL="item.imgURL"
					:name="item.name"
					:details="
						item.pizzaType && item.pizzaSize
							? getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)
							: ''
					"
					:quantity="item.quantity"
					:price="item.price"
				/>
				<p class="px-10 font-medium text-base" v-else>Loading...</p>
			</div>

			<div class="py-8 px-10 bg-white">
				<div class="w-full space-y-5">
					<div class="flex mb-4">
						<div class="flex flex-1 text-lg text-neutral-500">
							Итого
							<span
								class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"
							></span>
						</div>
						<b class="text-lg"
							>{{
								!store.loading ? store.totalAmount + '&nbsp;&#8381;' : '...'
							}}
						</b>
					</div>

					<NuxtLink to="/cart" class="inline-block w-full">
						<Button type="submit" class="w-full h-12 text-base">
							Оформить заказ
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-5 ml-4"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</Button>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
