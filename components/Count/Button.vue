<script lang="ts" setup>
export interface CountButtonProps {
	quantity?: number
	size?: 'sm' | 'lg'
	class?: string
	onClick?: (type: 'plus' | 'minus') => void
}

defineProps<CountButtonProps>()
</script>

<template>
	<div :class class="inline-flex items-center justify-between gap-3">
		<CountIconButton
			type="minus"
			:disabled="quantity && quantity > 1 ? false : true"
			:size
		/>

		<b :class="[size && size === 'sm' ? 'text-sm' : 'text-base']">{{
			quantity
		}}</b>

		<CountIconButton type="plus" :disabled="false" :size />
	</div>
</template>
