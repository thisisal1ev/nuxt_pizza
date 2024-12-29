import type { Cart } from '@prisma/client'
import prisma from './prisma'

export const findOrCreateCart = async (token: string): Promise<Cart> => {
	let userCart = await prisma.cart.findFirst({
		where: {
			token,
		},
	})

	if (!userCart) {
		userCart = await prisma.cart.create({
			data: {
				token,
			},
		})
	}

	return userCart
}