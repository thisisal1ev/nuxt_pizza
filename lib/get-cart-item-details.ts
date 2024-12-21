import { mapPizzaType, type PizzaSize, type PizzaType } from '~/constants/pizza'
import type { CartItemState } from './get-cart-details'

export const getCartItemDetails = (
	ingredients: CartItemState['ingredients'],
	pizzaType: PizzaType,
	pizzaSize: PizzaSize,
): string => {

	const details = ref<string[]>([])

	if (pizzaSize && pizzaType) {
		const typeName = ref(mapPizzaType[pizzaType])
		details.value.push(`${typeName.value} ${pizzaSize} см`)
	}

	if (ingredients) {
		details.value.push(...ingredients.map(ingredient => ingredient.name))
	}

	return details.value.join(', ')
}