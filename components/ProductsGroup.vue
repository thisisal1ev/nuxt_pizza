<script lang="ts" setup>
interface IPrices {
	price: string
}

interface IProduct {
	id: number
	name: string
	items: IPrices[]
	imgURL: string
}

const props = defineProps<{
	title: string
	categoryId: number
	products: IProduct[]
}>()

const target = ref<HTMLElement | null>(null)
const store = useCategoryStore().setActiveId

const intersection = useIntersectionObserver(
	target,
	(entry: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		store(props.categoryId)
	},
	{
		threshold: 0.4,
	}
)

watchEffect(() => {
	if (intersection?.isActive) {
		store(props.categoryId)
		console.log(props.title, props.categoryId)
	}
})
</script>

<template>
	<div ref="target" :id="title">
		<h2 class="font-extrabold mb-5 text-[32px]">{{ title }}</h2>

		<div class="grid grid-cols-3 gap-[50px]">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:id="product.id"
				:name="product.name"
				:imgURL="product.imgURL"
				:price="product.items[0].price"
			/>
		</div>
	</div>
</template>
