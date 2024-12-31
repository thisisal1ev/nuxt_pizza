<script lang="ts" setup>
interface Props {
	id: number
	details: string
	imgURL: string
	name: string
	price: number
	quantity: number
	class?: string
}

defineProps<Props>()
defineEmits(['onClickCountButton', 'onClickRemove'])
</script>

<template>
	<div class="flex items-center justify-between space-x-10" :class>
		<div class="flex items-center gap-3 flex-1">
			<CartItemDetailsImage :src="imgURL" />

			<CartItemDetailsInfo :details :name />
		</div>

		<CartItemDetailsPrice :price />

		<div class="flex items-center gap-5">
			<CountButton
				@onClick="type => $emit('onClickCountButton', id, quantity, type)"
				:quantity
				size="sm"
			/>

			<button class="group" @click="$emit('onClickRemove', id)">
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
					class="text-gray-400 cursor-pointer group-hover:text-gray-600"
				>
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				</svg>
			</button>
		</div>
	</div>
</template>
