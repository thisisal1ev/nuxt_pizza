import { calcTotalPizzaPrice } from './calc-total-pizza-price'
import type { Ingredient, ProductItem } from '@prisma/client'
import { mapPizzaType, type PizzaSize, type PizzaType } from '../constants/pizza'

export const getPizzaDetails = (
	type: Ref<PizzaType>,
	size: Ref<PizzaSize>,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>,
) => {
	const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)
	const textDetails = `${size.value} см, ${mapPizzaType[type.value]} пицца`

	return { totalPrice, textDetails }
}