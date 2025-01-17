import prisma from '~/lib/prisma'
import { updateCartTotalAmount } from '~/lib/update-cart-total-amount'

export default defineEventHandler(async (event) => {
	try {
		const id = Number(event.context.params?.id)
		const body = await readBody(event)
		const token = getCookie(event, 'cartToken')

		if (!token) {
			return {
				message: 'Cart token not found',
				status: 401,
			}
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: { id },
		})

		if (!cartItem) {
			return {
				message: 'Cart item not found',
				status: 404,
			}
		}

		await prisma.cartItem.update({
			where: { id },
			data: { quantity: body.quantity },
		})

		const updatedUserCart = await updateCartTotalAmount(token)

		return {
			items: updatedUserCart?.items,
			totalAmount: updatedUserCart?.totalAmount,
		}
	} catch (e) {
		console.error('[CART_PATCH] Server error', e)
		return {
			message: 'Не удалось обновить корзину',
			status: 500,
		}
	}
})