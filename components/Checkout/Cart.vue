<script lang="ts" setup>
import type { PizzaSize, PizzaType } from '~/constants/pizza'
import type { CartStateItem } from '~/lib/get-cart-details'
import { getCartItemDetails } from '~/lib/get-cart-item-details'

interface Props {
	items: CartStateItem[]
	loading?: boolean
}

defineProps<Props>()
defineEmits(['onClickCountButton', 'removeCartItem'])
</script>

<template>
	<WhiteBlock title="1. Корзина">
		<template #lower>
			<div class="space-y-5">
				<CheckoutItem
					v-for="item in items"
					:key="item.id"
					:id="item.id"
					:imgURL="item.imgURL"
					:name="item.name"
					:quantity="item.quantity"
					:price="item.price"
					:details="
									getCartItemDetails(
										item.ingredients,
										item.pizzaType as PizzaType,
										item.pizzaSize as PizzaSize,
									)
								"
					:disabled="loading"
					@onClickCountButton="
						(id, quantity, type) =>
							$emit('onClickCountButton', id, quantity, type)
					"
					@onClickRemove="id => $emit('removeCartItem', id)"
				/>
			</div>
			<!-- <div class="space-y-5" v-else-if="cartStore.loading">
							<SkeletonCheckoutItem
								v-for="i in cartStore.items.length ? cartStore.items.length : 3"
								:key="i"
							/>
						</div>
						<p v-else class="text-lg font-semibold">Корзина пуста</p> -->
		</template>
	</WhiteBlock>
</template>
