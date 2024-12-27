<script setup lang="ts">
interface Props {
	imgURL: string
	name: string
	price: number
	active?: boolean
	onClick?: () => void
}

defineProps<Props>()
</script>

<template>
	<div
		@click="onClick"
		:class="[
			'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
			{ 'border border-primary': active },
		]"
	>
		<template v-if="active">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="absolute top-2 right-2 text-primary"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="m9 12 2 2 4-4" />
			</svg>
		</template>
		<img :width="110" :height="110" :src="imgURL" />
		<span class="text-xs mb-1">{{ name }}</span>
		<span class="font-bold">{{ price }} &#8381;</span>
	</div>
</template>
