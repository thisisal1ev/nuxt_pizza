<script lang="ts" setup>
import { regisFormSchema } from './schema'

const { handleSubmit } = useForm({
	validationSchema: regisFormSchema,
	initialValues: {
		email: '',
		fullName: '',
		password: '',
		confirmPassword: '',
	},
})

const onSubmit = handleSubmit(async data => {
	console.log(data)
})
</script>

<template>
	<form class="flex flex-col gap-5" @submit="onSubmit">
		<FormInput name="email" label="E-Mail" type="email" required />
		<FormInput name="fullName" label="Полное имя" type="text" required />
		<FormInput name="password" label="Пароль" type="password" required />
		<FormInput
			name="confirmPassword"
			label="Подтвердите пароль"
			type="password"
			required
		/>

		<Button variant="default" class="h-12 text-base" type="submit">
			Зарегистрироваться
		</Button>
	</form>
</template>
