import { Ingredient } from '@prisma/client'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (): Promise<Ingredient[]> => {
	const ingredients = await prisma.ingredient.findMany()

	return ingredients
})