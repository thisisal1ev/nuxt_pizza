<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
	layout: 'profile-layout',
})

const { user, clear } = useUserSession()

const onClick = () => {
	clear()

	setTimeout(() => {
		location.href = '/'
	}, 1000)
}
</script>

<template>
	<div class="w-full max-w-base mx-auto space-y-1 mt-10">
		<p>{{ user }}</p>
		<Button @click="onClick">Logout</Button>
	</div>
</template>
