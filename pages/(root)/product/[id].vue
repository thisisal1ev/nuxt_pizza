<script lang="ts" setup>
const {
	params: { id },
} = useRoute()

const { data: product, error } = await useAsyncData(`product-${id}`, () =>
	$fetch(`/api/product/${id}`)
)

if (!product && !error) {
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
