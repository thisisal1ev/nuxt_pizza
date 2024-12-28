import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const id = event.context.params?.id

	if (!id) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Product ID is required',
		})
	}

	const product = await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							items: true,
						},
					},
				},
			},
			items: true,
		},
	})

	if (!product) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Product not found',
		})
	}

	return product
})