import { Product } from '@prisma/client'
import prisma from '~/lib/prisma'

interface ProductQuery {
	query: string
}

export default defineEventHandler(async (event): Promise<Product[]> => {
	const gettingQuery = getQuery(event) as ProductQuery
	const query = gettingQuery.query || ''

	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query as string,
				mode: 'insensitive',
			}
		},
		take: 5
	})

	return products
})