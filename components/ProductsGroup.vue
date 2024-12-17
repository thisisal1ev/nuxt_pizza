<script lang="ts" setup>
interface IPrices {
	price: number
}

interface IProduct {
	id: number
	name: string
	items: IPrices[]
	imgURL: string
}

interface Props {
	title: string
	categoryId: number
	products: IProduct[]
}

const props = defineProps<Props>()

const target = ref<HTMLElement | null>(null)
const store = useCategoryStore().setActiveId

const intersection = useIntersectionObserver(
	target,
	(entry: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		if (entry[0].isIntersecting) {
			watchEffect(() => {
				if (intersection?.isActive) {
					store(props.categoryId)
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
			/>
		</div>
	</section>
</template>
