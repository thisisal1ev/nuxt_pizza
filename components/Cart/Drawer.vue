<script lang="ts" setup>
import { getCartItemDetails } from '~/lib/get-cart-item-details'

defineProps<{
	isVisible: boolean
}>()

const emit = defineEmits(['close'])

function close() {
	emit('close')
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
			<div class="overflow-auto flex-1">
				<div class="flex flex-col items-start grow pt-8 pb-2 px-10">
					<div class="flex items-center justify-between w-full">
						<h4>
							<span
								>В корзине <b>{{ 3 }} товара</b></span
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

				<CartDrawerItem
					:class="'my-5 py-3 px-5'"
					:id="1"
					:imageURL="'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'"
					:name="'Пепперони фреш'"
					:details="
						getCartItemDetails(2, 30, [
							{
								id: 1,
								name: 'Шампиньоны',
								price: 30,
								imgURL:
									'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						])
					"
					:quantity="1"
					:price="500"
				/>

				<CartDrawerItem
					:class="'my-5 py-3 px-5'"
					:id="1"
					:imageURL="'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'"
					:name="'Пепперони фреш'"
					:details="
						getCartItemDetails(2, 30, [
							{
								id: 1,
								name: 'Шампиньоны',
								price: 30,
								imgURL:
									'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						])
					"
					:quantity="1"
					:price="500"
				/>

				<CartDrawerItem
					:class="'my-5 py-3 px-5'"
					:id="1"
					:imageURL="'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'"
					:name="'Пепперони фреш'"
					:details="
						getCartItemDetails(2, 30, [
							{
								id: 1,
								name: 'Шампиньоны',
								price: 30,
								imgURL:
									'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						])
					"
					:quantity="1"
					:price="500"
				/>

				<CartDrawerItem
					:class="'my-5 py-3 px-5'"
					:id="1"
					:imageURL="'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'"
					:name="'Пепперони фреш'"
					:details="
						getCartItemDetails(2, 30, [
							{
								id: 1,
								name: 'Шампиньоны',
								price: 30,
								imgURL:
									'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						])
					"
					:quantity="1"
					:price="500"
				/>

				<CartDrawerItem
					:class="'my-5 py-3 px-5'"
					:id="1"
					:imageURL="'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'"
					:name="'Пепперони фреш'"
					:details="
						getCartItemDetails(2, 30, [
							{
								id: 1,
								name: 'Шампиньоны',
								price: 30,
								imgURL:
									'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
								createdAt: new Date(),
								updatedAt: new Date(),
							},
						])
					"
					:quantity="1"
					:price="500"
				/>
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
						<b class="text-lg">{{ 500 }} &#8381;</b>
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
