<script lang="ts" setup>
defineProps<{
	src: string
	class?: string
}>()
</script>

<template>
	<img :src class="w-[60px] h-[60px] object-cover object-center" :class />
</template>
