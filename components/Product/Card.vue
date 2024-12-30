<script lang="ts" setup>
import type { Ingredient } from '@prisma/client'

interface Props {
	id: number
	name: string
	price: number
	imgURL: string
	ingredients: Ingredient[]
}

const { ingredients } = defineProps<Props>()
const productDetails = ingredients.map(ingredient => ingredient.name).join(', ')
</script>

<template>
	<div>
		<NuxtLink :to="'/product/' + id">
			<div class="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
				<img class="w-[215px] h-[215px]" :src="imgURL" :alt="name" />
			</div>
		</NuxtLink>

		<h4 class="mt-3 mb-1 font-bold leading-8">{{ name }}</h4>

		<p v-if="productDetails" class="text-sm text-gray-400">
			{{ productDetails }}
		</p>

		<div class="flex justify-between items-center mt-4">
			<span class="text-xl">
				от <b>{{ price }} &#8381;</b>
			</span>

			<Button variant="secondary" size="default" class="text-base font-bold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mr-1"
				>
					<path d="M5 12h14" />
					<path d="M12 5v14" />
				</svg>
				Добавить
			</Button>
		</div>
	</div>
</template>
