<script setup lang="ts">
import prisma from '~/lib/prisma'

const fetchCategories = async () => {
	return prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					items: true,
				},
			},
		},
	})
}

const { data } = await useAsyncData('categories', fetchCategories)
const filteredCategories = data.value?.filter(
	category => category.products.length > 0
)
</script>

<template>
	<section class="mt-10">
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
							v-for="category in data"
							v-if="data !== undefined"
							:categoryId="category.id"
							:title="category.name"
							:key="category.id"
							:products="category.products"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
