import type { Ingredient } from '@prisma/client'
import { getAll } from '~/services/ingredients'

type IngredientItem = Pick<Ingredient, 'id' | 'name'>

export const useFilterIngredients = () => {
	const ingredients = ref<IngredientItem[]>([])

	const fetchIngredients = async () => {
		try {
			const fetchedIngredients = await getAll()
			ingredients.value = fetchedIngredients
		} catch (e: any) {
			console.error('Error fetching ingredients:', e.message)
		}
	}

	onMounted(fetchIngredients)

	return ingredients
}
