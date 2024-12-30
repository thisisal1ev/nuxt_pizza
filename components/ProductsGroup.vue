<script lang="ts" setup>
import type { ProductWithRelations } from './Product/Form.vue'

interface Props {
	title: string
	categoryId: number
	products: ProductWithRelations[]
}

const { products, categoryId } = defineProps<Props>()

const target = ref<HTMLElement | null>(null)
const store = useCategoryStore()

const intersection = useIntersectionObserver(
	target,
	(
		entry: IntersectionObserverEntry[],
		observer: IntersectionObserver
	): void => {
		if (entry[0].isIntersecting) {
			watchEffect(() => {
				if (intersection?.isActive) {
					store.setActiveId(categoryId)
				}
			})
		}
	},
	{
		rootMargin: '0px',
		threshold: 0.4,
	}
)
</script>

<template>
	<section ref="target" :id="title">
		<h2 class="font-extrabold mb-5">{{ title }}</h2>

		<div class="grid grid-cols-3 gap-[50px]">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:id="product.id"
				:name="product.name"
				:imgURL="product.imgURL"
				:price="product.items[0].price"
				:ingredients="product.ingredients"
			/>
		</div>
	</section>
</template>
