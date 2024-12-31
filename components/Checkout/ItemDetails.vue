<script lang="ts" setup>
interface Props {
	title?: string
	value?: string
	class?: string
}

defineProps<Props>()
</script>

<template>
	<div :class class="flex my-4">
		<span class="flex flex-1 text-lg text-neutral-500">
			<div class='flex items-center'>
				<slot name="icon" />
				{{ title }}
			</div>

			<div
				class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"
			></div>
		</span>

		<span class="font-bold text-lg">{{ value }}</span>
	</div>
</template>
