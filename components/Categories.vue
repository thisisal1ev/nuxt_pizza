<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useCategoryStore } from '~/stores/category'

const cats = ref([
	'Пиццы',
	'Завтрак',
	'Острые',
	'Сладкие',
	'Вегетарианские',
	'С курицей',
	'Мясные',
])

const store = useCategoryStore()
const activeIndex = computed(() => store.activeId)
</script>

<template>
	<div class="inline-flex gap-1 bg-gray-50 p-1 rounded-2xl">
		<NuxtLink
			v-for="(cat, index) in cats"
			:to="activeIndex.value"
			:key="index"
			:class="[
				'inline-flex items-center font-bold h-11 rounded-2xl px-5',
				activeIndex === index
					? 'bg-white shadow-md shadow-gray-200 text-primary'
					: '',
			]"
		>
			{{ cat }}
		</NuxtLink>
	</div>
</template>
