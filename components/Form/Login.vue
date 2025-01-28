<script lang="ts" setup>
import { loginFormSchema } from './schema'

const { handleSubmit } = useForm({
	validationSchema: loginFormSchema,
	initialValues: {
		email: '',
		password: '',
	},
})

const onSubmit = handleSubmit(async data => {
	console.log(data)
})
</script>

<template>
	<form class="flex flex-col gap-5" @submit="onSubmit">
		<div class="flex justify-between items-center">
			<div class="mr-2 space-y-1">
				<h3 class="font-bold">Вход в аккаунт</h3>

				<p class="text-gray-400">
					Введите свою почту, чтобы войти в свой аккаунт
				</p>
			</div>

			<img
				src="/assets/images/phone-icon.png"
				alt="phone-icon"
				width="60"
				height="60"
			/>
		</div>

		<FormInput name="email" label="E-Mail" required />
		<FormInput name="password" label="Пароль" type="password" required />

		<Button class="h-12 text-base" type="submit"> Войти </Button>
	</form>
</template>
