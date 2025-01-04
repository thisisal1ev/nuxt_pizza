<script lang="ts" setup>
interface Props {
	min?: number
	max?: number
	step?: number
	value?: number[]
	onValueChange?: (value: number[]) => void
}

const { max } = defineProps<Props>()
const value = ref<number>(max ?? 1000)
</script>

<template>
	<Input
		type="range"
		:min
		:max
		:step
		:value="String(value)"
		@change="onValueChange?.([9, 999])"
	/>
</template>
