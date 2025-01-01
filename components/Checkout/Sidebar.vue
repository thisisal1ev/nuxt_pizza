<script lang="ts" setup>
interface Props {
	totalAmount: number
	loading?: boolean
}
const props = defineProps<Props>()

const VAT = ref<number>(15)
const DELIVERY_PRICE = ref<number>(250)

const vatPrice = ref<number>(0)
const totalPrice = ref<number>(0)

watchEffect(() => {
	vatPrice.value = (props.totalAmount * VAT.value) / 100
	totalPrice.value = props.totalAmount + DELIVERY_PRICE.value + vatPrice.value
})
</script>

<template>
	<WhiteBlock class="p-6 sticky top-4">
		<template #upper>
			<div class="flex flex-col gap-1">
				<span class="text-xl">Итого:</span>
				<Skeleton v-if="loading" class="h-11 w-48" />
				<span v-else class="text-4xl font-extrabold"
					>{{ totalPrice }} &#8381;</span
				>
			</div>
		</template>

		<template #lower>
			<CheckoutItemDetails
				title="Стоимость корзины:"
				:value="`${props.totalAmount} &#8381;`"
				:loading
			>
				<template #icon
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 text-gray-300"
					>
						<path
							d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
						/>
						<path d="M12 22V12" />
						<path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
						<path d="m7.5 4.27 9 5.15" /></svg
				></template>
			</CheckoutItemDetails>

			<CheckoutItemDetails
				title="Налоги:"
				:value="`${vatPrice} &#8381;`"
				:loading
			>
				<template #icon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 text-gray-300"
					>
						<line x1="19" x2="5" y1="5" y2="19" />
						<circle cx="6.5" cy="6.5" r="2.5" />
						<circle cx="17.5" cy="17.5" r="2.5" />
					</svg>
				</template>
			</CheckoutItemDetails>

			<CheckoutItemDetails
				title="Доставка:"
				:value="`${DELIVERY_PRICE} &#8381;`"
				:loading
			>
				<template #icon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="mr-2 text-gray-300"
					>
						<path
							d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
						/>
						<path d="M15 18H9" />
						<path
							d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
						/>
						<circle cx="17" cy="18" r="2" />
						<circle cx="7" cy="18" r="2" />
					</svg>
				</template>
			</CheckoutItemDetails>

			<Button
				type="submit"
				class="w-full h-14 rounded-2xl mt-6 text-base font-bold"
			>
				Перейти к оплате

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="ml-2"
				>
					<path d="M5 12h14" />
					<path d="m12 5 7 7-7 7" />
				</svg>
			</Button>
		</template>
	</WhiteBlock>
</template>
