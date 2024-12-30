import { Product } from '@prisma/client'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event): Promise<Product[]> => {
	const query = getQuery(event).query || ''

	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query as string,
				mode: 'insensitive',
			},
		},
		take: 5,
	})

	return products
})