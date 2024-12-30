<script lang="ts" setup>
import type { ProductWithRelations } from '~/components/Product/Form.vue'

const { data } = await useAsyncData('categories', () =>
	$fetch('/api/categories')
)

const filteredCategories = data.value?.filter(
	(category: ProductWithRelations) => category.products.length > 0
)
</script>

<template>
	<div class="mt-10">
		<div class="container">
			<h3 class="font-extrabold">Все пиццы</h3>
		</div>

		<TopBar :categories="filteredCategories || []" />

		<div class="container mt-10 pb-14">
			<div class="flex gap-[80px]">
				<div class="w-[250px]">
					<Filters />
				</div>

				<div class="flex-1">
					<div class="flex flex-col gap-16">
						<ProductsGroup
							v-if="data !== undefined"
							v-for="category in data"
							:categoryId="category.id"
							:title="category.name"
							:key="category.id"
							:products="category.products"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
