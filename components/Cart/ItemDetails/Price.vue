<script lang="ts" setup>
defineProps<{
	price: number
	class?: string
}>()
</script>

<template>
	<b class="inline-block" :class>{{ price }} &#8381;</b>
</template>
