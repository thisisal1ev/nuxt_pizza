import type { Ingredient } from '@prisma/client'
import { mapPizzaType, type PizzaSize, type PizzaType } from '~/constants/pizza'

export const getCartItemDetails = (
	pizzaType: PizzaType,
	pizzaSize: PizzaSize,
	ingredients: Ingredient[]
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