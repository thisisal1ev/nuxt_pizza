import { findPizzas } from '~/lib/find-pizzas'

export default defineEventHandler(async (event) => {
	try {
		const query = getQuery(event)
		const pizzas = await findPizzas(query)
		return pizzas
	} catch (e) {
		console.error(e)
	}
})