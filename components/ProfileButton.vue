<script lang="ts" setup>
defineEmits(['onClickSignIn'])
const { session } = useUserSession()
</script>

<template>
	<Button
		v-if="!session.user"
		@click="$emit('onClickSignIn')"
		variant="outline"
		class="flex items-center gap-1"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>

		<span>Войти</span>
	</Button>

	<NuxtLink v-else to="/profile">
		<Button class="flex items-center gap-1" variant="secondary">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-circle-user-round"
			>
				<path d="M18 20a6 6 0 0 0-12 0" />
				<circle cx="12" cy="10" r="4" />
				<circle cx="12" cy="12" r="10" />
			</svg>

			<span>Профиль</span>
		</Button>
	</NuxtLink>
</template>
