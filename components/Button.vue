<script lang="ts" setup>
type Variant =
	| 'outline'
	| 'default'
	| 'ghost'
	| 'destructive'
	| 'secondary'
	| 'link'
type Size = 'default' | 'sm' | 'lg' | 'icon'

interface Props {
	variant: Variant
	size: Size
}

const { size, variant } = defineProps<Props>()

const buttonClass = computed<string>(() => {
	switch (variant) {
		case 'outline':
			return 'border border-primary text-primary bg-transparent hover:bg-primary hover:text-white'
		case 'ghost':
			return 'hover:bg-secondary hover:text-secondary-foreground'
		case 'destructive':
			return 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
		case 'link':
			return 'text-primary underline-offset-4 hover:underline'
		case 'secondary':
			return 'bg-secondary text-primary hover:bg-secondary/50'
		default:
			return 'bg-primary text-primary-foreground hover:bg-primary/90'
	}
})

const sizeClass = computed<string>(() => {
	switch (size) {
		case 'sm':
			return 'h-9 rounded-md px-3'
		case 'lg':
			return 'h-11 rounded-md px-8'
		case 'icon':
			return 'h-10 w-10'
		default:
			return 'h-10 px-4 py-2'
	}
})
</script>

<template>
	<button
		:class="[buttonClass, sizeClass]"
		type="button"
		class="inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500 active:opacity-50"
	>
		<slot />
	</button>
</template>
