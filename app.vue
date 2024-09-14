<script lang="ts" setup>
const { data, status } = useFetch('/api/users', {
	method: 'GET',
})
</script>

<template>
	<NuxtLayout>
		<div class="container">
			<NuxtPage />
			<!-- <test /> -->
			<div>Status: {{ status }}</div>

			<div v-for="user in data" :key="user.id">
				User: {{ user?.fullName }}, {{ user?.email }}, {{ user?.password }}
			</div>
		</div>
	</NuxtLayout>
</template>
