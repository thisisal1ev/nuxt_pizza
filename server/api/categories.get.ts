import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				orderBy: {
					id: 'desc',
				},
				include: {
					ingredients: true,
					items: {
						orderBy: {
							price: 'asc',
						},
					},
				},
			},
		},
	})

	return categories
})
