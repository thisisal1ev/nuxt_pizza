<script lang="ts" setup>
defineProps<{
	title: string
	categoryId: number
	products: any[]
}>()
</script>
<template>
	<div>
		<h2 class="font-extrabold mb-5 text-[32px]">{{ title }}</h2>

		<div class="grid grid-cols-3 gap-[50px]">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:id="product.id"
				:name="product.name"
				:imgURL="product.imgURL"
				:price="product.price"
			/>
		</div>
	</div>
</template>
