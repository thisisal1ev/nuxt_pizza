<script lang="ts" setup>
import prisma from '~/lib/prisma'
const {
	params: { id },
} = useRoute()

const fetchProduct = async () => {
	return await prisma.product.findFirst({
		where: {
			id: Number(id),
		},
	})
}

let { data } = await useAsyncData('product', fetchProduct)
if (data.value === null) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Product not found',
	})
}
</script>

<template>
	<div class="container flex flex-col my-10">
		<div class="flex flex-1">
			<ProductImage :imgURL="data?.imgURL ?? ''" :size="30" />

			<div class="w-[490px] bg-[#f7f6f5] p-7 space-y-5">
				<h4 class="font-extrabold mb-1">{{ data?.name }}</h4>
				<p class="text-gray-400">
					Lorem ipsum dolor sit amat connecter adipisicing edit.
				</p>

				<GroupVariants
					:selectedValue="'2'"
					:items="[
						{ name: 'Маленькая', value: '1' },
						{ name: 'Средняя', value: '2' },
						{ name: 'Большая', value: '3' },
					]"
				/>
			</div>
		</div>
	</div>
</template>
