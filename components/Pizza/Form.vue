<script setup lang="ts">
import type { Ingredient, ProductItem } from '@prisma/client'
import { pizzaTypes, type PizzaSize, type PizzaType } from '~/constants/pizza'
import { getPizzaDetails } from '~/lib/get-pizza-details'

interface Props {
	imgURL: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	onSubmit: (itemId: number, ingredients: number[]) => void
	loading?: boolean
}

const { items, ingredients, onSubmit } = defineProps<Props>()

const {
	size,
	type,
	selectedIngredients,
	availableSizes,
	currentItemId,
	setSize,
	setType,
	addIngredient,
} = usePizzaOptions(items)

const { totalPrice, textDetails } = getPizzaDetails(
	type,
	size,
	items,
	ingredients,
	selectedIngredients
)

const handleClickAdd = () => {
	if (currentItemId.value) {
		onSubmit(currentItemId.value, Array.from(selectedIngredients))
	}
}
</script>

<template>
	<div class="flex flex-1">
		<PizzaImage :imgURL :size :name />

		<div class="w-[490px] bg-[#f7f6f5] p-7">
			<h4 class="font-extrabold mb-5">{{ name }}</h4>

			<p class="text-gray-400">{{ textDetails }}</p>

			<div class="flex flex-col gap-4 mt-5">
				<GroupVariants
					:items="availableSizes"
					:value="String(size)"
					@on-click="(value) => setSize(Number(value) as PizzaSize)"
				/>

				<GroupVariants
					:items="pizzaTypes"
					:value="String(type)"
					@on-click="(value) => setType(Number(value) as PizzaType)"
				/>
			</div>

			<div
				class="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5"
			>
				<div class="grid grid-cols-3 gap-3">
					<IngredientItem
						v-for="ingredient in ingredients"
						:key="ingredient.id"
						:active="selectedIngredients.has(ingredient.id)"
						@click="() => addIngredient(ingredient.id)"
						:imgURL="ingredient.imgURL"
						:name="ingredient.name"
						:price="ingredient.price"
					/>
				</div>
			</div>

			<Button
				:disabled="loading"
				@click="handleClickAdd"
				class="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
			>
				Добавить в корзину за {{ totalPrice }} &#8381;
			</Button>
		</div>
	</div>
</template>
