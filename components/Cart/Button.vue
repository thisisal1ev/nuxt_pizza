<script lang="ts" setup>
const isVisible = ref<boolean>(false)

function toggle() {
	isVisible.value = !isVisible.value
}
</script>

<template>
	<Teleport to="body">
		<CartDrawer :isVisible @close="toggle" />
	</Teleport>
	<Button
		@click="isVisible = !isVisible"
		variant="default"
		size="default"
		class="relative group"
	>
		<b>520 &#8381;</b>
		<span class="h-full w-[1px] bg-white/30 mx-3"></span>

		<div
			class="flex items-center gap-1 transition duration-300 group-hover:opacity-0"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="relative"
			>
				<path d="m15 11-1 9" />
				<path d="m19 11-4-7" />
				<path d="M2 11h20" />
				<path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
				<path d="M4.5 15.5h15" />
				<path d="m5 11 4-7" />
				<path d="m9 11 1 9" />
			</svg>
			<b>3</b>
		</div>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="absolute right-5 transition duration-300 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
		>
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	</Button>
</template>
