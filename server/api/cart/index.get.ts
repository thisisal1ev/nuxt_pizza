import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	try {
		const token = getCookie(event, 'cartToken')

		if (!token) {
			return Response.json({ totalAmount: 0, item: [] })
		}

		const userCart = await prisma.cart.findMany({
			where: {
				OR: [
					{ token }
				]
			},
			include: {
				items: {
					orderBy: {
						createdAt: 'desc'
					},
					include: {
						productItem: {
							include: {
								product: true
							},
						},
						ingredients: true
					}
				}
			}
		})

		return Response.json(userCart)
	} catch (e: any) {
		console.log('[CART_GET] Server error', e)
		return {
			message: 'Не удалось получить корзину',
			status: 500
		}
	}
})