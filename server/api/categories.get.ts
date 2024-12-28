import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true,
				},
			},
		},
	})

	return categories
})
