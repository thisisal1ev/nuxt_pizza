<script lang="ts" setup>
type Providers = 'github' | 'google' | 'gitlab'

const regis = (provider: Providers) => {
	location.href = `/api/auth/${provider}`
}

const type = ref<'login' | 'register'>('register')
const onSwitchType = () => {
	type.value = type.value === 'register' ? 'login' : 'register'
}

defineEmits(['openOrCloseModal'])
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
				<Icon name="lucide:x" size="18" />
			</button>

			<FormRegister v-if="type === 'register'" />

			<FormLogin v-else />
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
					<Icon name="logos:github-icon" />

					GitHub
				</Button>

				<Button
					variant="secondary"
					@click="regis('gitlab')"
					type="button"
					class="gap-2 h-12 p-2 flex-1"
				>
					<Icon name="logos:gitlab" />

					GitLab
				</Button>
			</div>
			<Button
				variant="secondary"
				@click="regis('google')"
				type="button"
				class="gap-2 h-12 px-2 py-4 flex-1"
			>
				<Icon name="logos:google-icon" />

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
