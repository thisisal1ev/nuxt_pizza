<script lang="ts" setup>
interface Props {
	id: number
	details: string
	imgURL: string
	name: string
	price: number
	quantity: number
	disabled?: boolean
	class?: string
}

defineProps<Props>()
defineEmits(['onClickCountButton', 'onClickRemove'])
</script>

<template>
	<div
		class="flex w-full bg-white gap-6 py-3 px-5"
		:class="disabled ? 'opacity-50 pointer-events-none select-none' : ''"
	>
		<CartItemDetailsImage :src="imgURL" />

		<div class="flex-1">
			<CartItemDetailsInfo :details :name />

			<hr class="my-3" />

			<div class="flex items-center justify-between">
				<CountButton
					@onClick="(type:string) => $emit('onClickCountButton', id, quantity, type)"
					:quantity
					size="sm"
				/>

				<div class="flex items-center gap-3">
					<CartItemDetailsPrice :price />

					<button type="button" @click="$emit('onClickRemove', id, name)">
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
							class="text-gray-400 cursor-pointer hover:text-gray-600"
						>
							<path d="M3 6h18" />
							<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
							<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
							<line x1="10" x2="10" y1="11" y2="17" />
							<line x1="14" x2="14" y1="11" y2="17" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
