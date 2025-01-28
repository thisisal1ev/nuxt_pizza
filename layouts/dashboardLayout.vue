<script lang="ts" setup>
useSeoMeta({
	title: 'Nuxt Pizza | Dashboard',
	description: 'Nuxt Pizza | Панель управления',
})
</script>

<template>
	<main class="flex flex-col w-full min-h-screen bg-[#f4f1ee]">
		<Header
			:hasSearch="true"
			:hasCart="true"
			class="border-b-gray-200 container"
		/>
		<div class="grow h-auto container">
			<slot />
		</div>
	</main>
</template>
