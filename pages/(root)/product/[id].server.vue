<script lang="ts" setup>
import prisma from '~/lib/prisma'
const {
	params: { id },
} = useRoute()

const product = await prisma.product.findFirst({
	where: {
		id: Number(id),
	},
	include: {
		ingredients: true,
		category: {
			include: {
				products: {
					include: {
						items: true,
					},
				},
			},
		},
		items: true,
	},
})

if (!product) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Product not found',
	})
}
</script>

<template>
	<div class="container flex flex-col my-14">
		<ProductForm :product />
	</div>
</template>
