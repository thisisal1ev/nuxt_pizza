<script lang="ts" setup>
import { Category } from '@prisma/client'

defineProps<{
	categories: Category[]
}>()
</script>

<template>
	<div class="sticky top-0 bg-white py-5 mt-5 shadow-lg shadow-black/5 z-10">
		<div class="container flex items-center justify-between">
			<Categories :items="categories" />
			<SortPopup />
		</div>
	</div>
</template>
