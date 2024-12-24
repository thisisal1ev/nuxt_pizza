import prisma from '~/lib/prisma'
import { updateCartTotalAmount } from '~/lib/update-cart-total-amount'

export default defineEventHandler(async (event) => {
	try {
		const id = Number(event.context.params?.id)
		const body = await readBody(event)
		const data = body as { quantity: number }
		const token = getCookie(event, 'cartToken')

		if (!token) {
			return {
				message: 'Cart token not found',
			}
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id,
			},
		})

		if (!cartItem) {
			return {
				message: 'Cart item not found',
			}
		}

		await prisma.cartItem.update({
			where: {
				id,
			},
			data: {
				quantity: data.quantity,
			},
		})

		const updatedUserCart = await updateCartTotalAmount(token)

		return Response.json(updatedUserCart)
	} catch (error) {
		console.error('[CART_PATCH] Server error', error)
		return {
			message: 'Не удалось обновить корзину',
			status: 500
		}
	}
})
