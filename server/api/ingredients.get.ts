import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
	const ingredients = await prisma.ingredient.findMany()

	return Response.json(ingredients)
})