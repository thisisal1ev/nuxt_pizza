<script lang="ts" setup>
const ingredients = useFilterIngredients()

interface IRecept {
	text: string
	value: number
}

const items = ref<IRecept[]>([])

watchEffect(() => {
	items.value = ingredients.value.map(item => ({
		value: item.id,
		text: item.name,
	}))
})
</script>

<template>
	<div>
		<h3 class="mb-5 font-extrabold">Фильтрация</h3>

		<div class="flex flex-col gap-4">
			<FilterCheckbox :value="1"> Можно собирать </FilterCheckbox>
			<FilterCheckbox :value="2"> Новинки </FilterCheckbox>
		</div>

		<div class="mt-5 border-y border-y-neutral-100 py-6 pb-7">
			<p class="font-bold mb-3">Цена от и до:</p>
			<div class="flex gap-3 mb-5">
				<input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					type="number"
					placeholder="0"
					min="0"
					max="1000"
				/>
				<input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					type="number"
					placeholder="1000"
					min="100"
					max="1000"
				/>
			</div>
		</div>

		<ClientOnly>
			<CheckboxFilteresGroup
				title="Ингредиенты:"
				:limit="6"
				:defaultValue="items.slice(0, 6)"
				:items
			/>
		</ClientOnly>
	</div>
</template>
