<script lang="ts" setup>
const cats = ref([
	'Пиццы',
	'Завтрак',
	'Острые',
	'Сладкие',
	'Вегетарианские',
	'С курицей',
	'Мясные',
])

const activeIndex = useCategoryStore().activeId
</script>

<template>
		<div class="inline-flex gap-1 bg-gray-50 p-1 rounded-2xl">
			<NuxtLink
				v-for="(cat, index) in cats"
				:key="index"
				to="#"
				:class="
					activeIndex === index &&
					'bg-white shadow-md shadow-gray-200 text-primary'
				"
				class="inline-flex items-center font-bold h-11 rounded-2xl px-5"
			>
				<button>{{ cat }}</button>
			</NuxtLink>
		</div>
</template>
