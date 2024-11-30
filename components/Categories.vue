<script lang="ts" setup>
import { computed } from 'vue'
import { useCategoryStore } from '~/stores/category'
import type { Category } from '@prisma/client'

defineProps<{
	items: Category[]
}>()

const store = useCategoryStore()
const activeIndex = computed(() => store.activeId)
</script>

<template>
	<div class="inline-flex gap-1 bg-gray-50 p-1 rounded-2xl">
		<NuxtLink
			v-if="items !== undefined"
			v-for="(cat, index) in items"
			:to="'#' + cat.name"
			:key="index"
			:class="[
				'inline-flex items-center font-bold h-11 rounded-2xl px-5 transition-colors duration-500',
				activeIndex === cat.id
					? 'bg-white shadow-md shadow-gray-200 text-primary'
					: '',
			]"
		>
			{{ cat.name }}
		</NuxtLink>
	</div>
</template>
