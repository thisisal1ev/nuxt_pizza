<script lang="ts" setup>
import type { PizzaSize, PizzaType } from '~/constants/pizza'
import { getCartItemDetails } from '~/lib/get-cart-item-details'
import { useCartStore } from '~/stores/cart'

defineProps<{
	isVisible: boolean
}>()

const { fetchCartItems, totalAmount, items, loading } = useCartStore()

onMounted(async () => {
	await fetchCartItems()
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
	console.log(id, quantity, type)
}
</script>

<template>
	<div
		v-if="isVisible"
		@click="close"
		class="opacity-50 z-40 fixed bg-black top-0 left-0 w-full h-full"
	></div>
	<div
		v-if="isVisible"
		:class="isVisible ? 'translate-x-0' : 'translate-x-full'"
		class="fixed top-0 right-0 outline-none w-1/4 z-50 bg-[#f1f4ee] overscroll-none transform duration-500 h-screen"
	>
		<div class="flex flex-col h-full justify-between">
			<div class="flex flex-col items-start p-10">
				<div class="flex items-center justify-between w-full">
					<h4>
						<span
							>В корзине <b>{{ items.length }} товара</b></span
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
					v-if="!loading"
					v-for="item in items"
					:onClickCountButton="
						type => onClickCountButton(item.id, item.quantity, type)
					"
					:class="'py-3 px-5'"
					:key="item.id"
					:id="item.id"
					:imageURL="item.imageUrl"
					:name="item.name"
					:details="
						item.pizzaType && item.pizzaSize
							? getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)
							: ''
					"
					:quantity="item.quantity"
					:price="item.price"
				/>
				<p v-else>Loading...</p>
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
						<b class="text-lg">{{ totalAmount }} &#8381;</b>
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
