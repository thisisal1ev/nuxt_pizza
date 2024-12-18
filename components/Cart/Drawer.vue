<script lang="ts" setup>
defineProps<{
	isVisible: boolean
}>()

const emit = defineEmits(['close'])

function close() {
	emit('close')
}
</script>

<template>
	<div
		v-if="isVisible"
		@click="close"
		class="opacity-50 z-40 fixed bg-black top-0 left-0 w-full h-full"
	></div>
	<div
		v-if="isVisible"
		:class="isVisible ? '-translate-x-0' : '-translate-x-full '"
		class="fixed top-0 right-0 outline-none w-1/4 z-50 bg-white p-10 overscroll-none transform duration-500 h-screen"
	>
		<div class="flex flex-col justify-between">
			<div>
				<h4>
					В корзине <b>{{ 3 }} товара</b>
				</h4>
			</div>

			<div class="py-8 flex flex-col w-full min-h-screen">
				<div class="w-full grow h-auto">
					<div class="flex mb-4">
						<div class="flex flex-1 text-lg text-neutral-500">
							Итого
							<span
								class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"
							></span>
						</div>
					</div>

					<b class="text-lg">{{ 500 }} &#8381;</b>
				</div>

				<NuxtLink to="/cart" class="inline-block w-full">
					<Button type="submit" class="w-full h-12 text-base mb-12">
						Оформить заказ
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
							class="w-5 ml-2"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</Button>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
