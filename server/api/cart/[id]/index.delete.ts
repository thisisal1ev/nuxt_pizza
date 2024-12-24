import prisma from '~/lib/prisma'
import { updateCartTotalAmount } from '~/lib/update-cart-total-amount'

export default defineEventHandler(async (event) => {
	try {
		const id = Number(event.context.params?.id)
		const token = getCookie(event, 'cartToken')
		const body = await readBody(event)
		const data = body as { quantity: number }

		if (!token) {
			return Response.json({ error: 'Cart token not found' })
		}

		const cartItem = await prisma.cartItem.delete({
			where: {
				id,
			}
		})

		if (!cartItem) {
			return Response.json({ error: 'Cart item not found' })
		}

		await prisma.cartItem.update({
			where: {
				id,
			},
			data: {
				quantity: data.quantity
			}
		})

		const updateUserCart = await updateCartTotalAmount(token)

		return Response.json(updateUserCart)
	} catch (error: any) {
		console.log('[CART_DELETE] Server error', error)
		return Response.json({ message: 'Не удалось удалить корзину' }, { status: 500 })
	}
})