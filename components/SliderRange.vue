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
	<input
		type="range"
		:min
		:max
		:step
		:value
		@change="onValueChange && onValueChange([9, 999])"
	/>
</template>

<style scoped>
input {
	width: 100%;
}
</style>
