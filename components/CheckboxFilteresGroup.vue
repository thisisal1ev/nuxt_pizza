<script lang="ts" setup>
interface IRecept {
	text: string
	value: number
}

defineProps<{
	title: string
	limit?: number
	defaultValue?: IRecept[]
	items?: IRecept[]
}>()
</script>

<template>
	<div class="py-8">
		<p class="font-bold mb-3">{{ title }}</p>

		<div class="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
			<FilterCheckbox
				v-for="item in items"
				:key="item.value"
				:value="item.value"
			>
				{{ item.text }}
			</FilterCheckbox>
		</div>
	</div>
</template>
