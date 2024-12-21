import type { CartItemDTD } from '~/services/dto/cart.dto'

export const calcCartItemTotalPrice = (item: CartItemDTD): number => {
	const ingredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)

	return (ingredientsPrice + item.productItem.price) * item.quantity
}