<script lang="ts" setup>
import type { ProductWithRelations } from '~/components/Product/Form.vue'

const { data: categories } = await useAsyncData('categories', () =>
	$fetch('/api/categories')
)
</script>

<template>
	<div class="mt-10">
		<div class="container">
			<h3 class="font-extrabold">Все пиццы</h3>
		</div>

		<TopBar
			v-if="categories"
			:categories="categories.filter(category => category.products.length > 0) as unknown as ProductWithRelations[]"
		/>

		<div class="container mt-10 pb-14">
			<div class="flex gap-[80px]">
				<div class="w-[250px]">
					<Filters />
				</div>

				<div class="flex-1">
					<div class="flex flex-col gap-16">
						<ProductsGroup
							v-if="categories"
							v-for="category in categories"
							:categoryId="category.id"
							:title="category.name"
							:key="category.id"
							:products="category.products as unknown as ProductWithRelations[]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
