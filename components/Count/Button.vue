<script lang="ts" setup>
export interface CountButtonProps {
	quantity?: number
	size?: 'sm' | 'lg'
	class?: string
}

defineProps<CountButtonProps>()
defineEmits(['onClick'])
</script>

<template>
	<div :class class="inline-flex items-center justify-between gap-3">
		<CountIconButton
			@click="$emit('onClick', 'minus')"
			type="minus"
			:disabled="quantity && quantity > 1 ? false : true"
			:size
		/>

		<b :class="[size && size === 'sm' ? 'text-sm' : 'text-base']">{{
			quantity
		}}</b>

		<CountIconButton
			@click="$emit('onClick', 'plus')"
			type="plus"
			:disabled="false"
			:size
		/>
	</div>
</template>
