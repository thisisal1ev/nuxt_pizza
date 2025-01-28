<script lang="ts" setup>
defineEmits(['openOrCloseModal'])
type Providers = 'github' | 'google' | 'gitlab'

const regis = (provider: Providers) => {
	location.href = `/api/auth/${provider}`
}

const type = ref<'login' | 'register'>('register')

const onSwitchType = () => {
	type.value = type.value === 'register' ? 'login' : 'register'
}
</script>

<template>
	<div
		@click="$emit('openOrCloseModal')"
		class="opacity-50 z-40 fixed bg-black top-0 left-0 w-full h-full"
	></div>

	<dialog
		v-motion
		:initial="{ scale: 0 }"
		:enter="{
			transition: {
				duration: 250,
			},
			scale: 1,
		}"
		:leave="{
			transition: {
				duration: 250,
			},
			scale: 0,
		}"
		class="z-50 mt-20 w-full max-w-xl bg-white rounded-lg shadow-lg p-6 space-y-5"
		open
	>
		<div class="relative">
			<button
				@click="$emit('openOrCloseModal')"
				class="absolute -right-2 -top-2"
			>
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
				>
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				</svg>
			</button>

			<FormRegister
				v-if="type === 'register'"
				@openOrCloseModal="$emit('openOrCloseModal')"
			/>

			<FormLogin v-else @openOrCloseModal="$emit('openOrCloseModal')" />
		</div>

		<hr />

		<div class="flex flex-col gap-5">
			<div class="flex gap-5">
				<Button
					variant="secondary"
					@click="regis('github')"
					type="button"
					class="gap-2 h-12 p-2 flex-1"
				>
					<img
						class="w-6 h-6"
						src="https://github.githubassets.com/favicons/favicon.svg"
					/>

					GitHub
				</Button>

				<Button
					variant="secondary"
					@click="regis('gitlab')"
					type="button"
					class="gap-2 h-12 p-2 flex-1"
				>
					<img
						class="w-6 h-6"
						src="https://pnglogo.sgp1.digitaloceanspaces.com/d/gitlab-original.svg"
					/>

					GitLab
				</Button>
			</div>
			<Button
				variant="secondary"
				@click="regis('google')"
				type="button"
				class="gap-2 h-12 p-2 flex-1"
			>
				<img
					class="w-6 h-6"
					src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
				/>

				Google
			</Button>
		</div>

		<Button
			variant="outline"
			@click="onSwitchType"
			type="button"
			class="h-12 w-full"
		>
			{{ type !== 'login' ? 'Войти' : 'Регистрация' }}
		</Button>
	</dialog>
</template>
