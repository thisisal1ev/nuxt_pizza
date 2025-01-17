<script lang="ts" setup>
import type { Product } from '@prisma/client'
import type { VNodeRef } from 'vue'
import { Api } from '~/services/apiClient'

const searchQuery = ref<string>('')
const focused = ref<boolean>(false)
const products = ref<Product[]>([])
const elementRef = ref<null | VNodeRef>(null)

onClickOutside(elementRef, (): void => {
	focused.value = false
})

const debouncedSearch = useDebounceFn(async (query: string): Promise<void> => {
	try {
		const response = await Api.products.search(query)
		products.value = response
	} catch (e) {
		console.error('Error:', e)
	}
}, 100)

watchEffect(() => {
	debouncedSearch(searchQuery.value)
})

const onClickItem = (): void => {
	focused.value = false
	searchQuery.value = ''
	products.value = []
}
</script>

<template>
	<div
		v-if="focused"
		class="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"
	></div>

	<label
		ref="elementRef"
		:class="focused ? '' : ''"
		class="flex rounded-2xl flex-1 justify-between relative h-11 z-30"
	>
		<svg
			class="absolute top-1/2 -translate-y-[50%] left-3 h-5 text-gray-400"
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
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
		</svg>

		<input
			class="outline-none w-full !rounded-2xl border-none bg-gray-100 pl-11"
			type="search"
			v-model.trim="searchQuery"
			placeholder="Поиск пиццы..."
			@focus="() => (focused = true)"
		/>

		<div
			v-if="products.length > 0"
			:class="focused ? 'visible opacity-100 top-12' : 'invisible top-14'"
			class="absolute w-full bg-white rounded-xl py-2 opacity-0 shadow-md transition-all duration-200 z-30"
		>
			<NuxtLink
				v-for="product in products"
				:key="product.id"
				:to="`/product/${product.id}`"
				class="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
				@click="onClickItem"
			>
				<img
					class="rounded-sm h-8 w-8"
					:src="product.imgURL"
					:alt="product.name"
				/>
				<span>{{ product.name }}</span>
			</NuxtLink>
		</div>
		<div
			v-else
			:class="focused ? 'visible opacity-100 top-12' : 'invisible top-14'"
			class="absolute w-full bg-white rounded-xl py-2 opacity-0 shadow-md transition-all duration-200 z-30"
		>
			<p class="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10">
				Ничего не найдено
			</p>
		</div>
	</label>
</template>
