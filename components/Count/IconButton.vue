<script lang="ts" setup>
import type { CountButtonProps } from './Button.vue'

interface IconButtonProps {
	size?: CountButtonProps['size']
	disabled?: boolean
	type?: 'plus' | 'minus'
	onClick?: (type: 'plus' | 'minus') => void
}

defineProps<IconButtonProps>()
</script>

<template>
	<Button
		variant="outline"
		type="button"
		size="icon"
		@click="onClick?.(type === 'minus' ? 'minus' : 'plus')"
		:disabled
		:class="[
			size === 'sm'
				? 'w-[30px] h-[30px] rounded-[10px]'
				: 'w-[38px] h-[38px] rounded-md',
		]"
		class="p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400"
	>
		<svg
			v-if="type === 'minus'"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			:class="['sm' === 'sm' ? 'h-4' : 'h-5']"
		>
			<path d="M5 12h14" />
		</svg>
		<svg
			v-else
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			:class="['sm' === 'sm' ? 'h-4' : 'h-5']"
		>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
		</svg>
	</Button>
</template>
