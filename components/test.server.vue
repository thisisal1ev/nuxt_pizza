<script lang="ts" setup>
const prisma = usePrismaClient()

const users = await prisma.user.findMany()
</script>

<template>
	<div v-if="users">
		<div v-for="user in users" :key="user.id">
			<p>{{ user.fullName }}</p>
			<p>{{ user.email }}</p>
			<p>{{ user.password }}</p>
			<p>{{ user.role }}</p>
		</div>
	</div>
</template>
