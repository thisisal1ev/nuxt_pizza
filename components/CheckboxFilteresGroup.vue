<script lang="ts" setup>
interface IRecept {
	text: string
	value: number
}

const { items, defaultValue } = defineProps<{
	title: string
	limit?: number
	defaultValue?: IRecept[]
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	items?: IRecept[]
}>()

const showAllIngredients = ref<boolean>(false)
const list = ref<IRecept[]>([])

watchEffect(() => {
	list.value = showAllIngredients.value ? items ?? [] : defaultValue ?? []
})
</script>

<template>
	<div class="py-8 mt-5">
		<p class="font-bold mb-3">{{ title }}</p>

		<div v-if="showAllIngredients" class="mb-3">
			<input
				type="text"
				:placeholder="searchInputPlaceholder ?? 'Поиск...'"
				class="bg-gray-50 border-none px-5 py-3 w-full outline-none rounded-md"
			/>
		</div>

		<div class="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
			<FilterCheckbox
				v-for="item in list"
				:key="item.text"
				:value="Number(item.value)"
				:checked="false"
				:onCheckedChange="ids => console.log(ids)"
			>
				{{ item.text }}
			</FilterCheckbox>
		</div>

		<div
			:class="[showAllIngredients ? 'border-t border-t-neutral-100 mt-4' : '']"
		>
			<button
				@click="showAllIngredients = !showAllIngredients"
				class="text-primary mt-3"
			>
				{{ showAllIngredients ? 'Скрыть' : '+ Показать все' }}
			</button>
		</div>
	</div>
</template>
