<script lang="ts" setup>
import { regisFormSchema, type TFormRegisterValues } from '../Form/schema'

const { user } = defineProps<{ user: any }>()
const { clear } = useUserSession()
const { handleSubmit, isSubmitting } = useForm({
	validationSchema: regisFormSchema,
	initialValues: {
		fullName: user.fullName,
		email: user.email,
		password: '',
		confirmPassword: '',
	},
})

const onSubmit = handleSubmit(async (data: TFormRegisterValues) => {
	try {
		const toast = (await import('vue3-toastify')).toast

		toast.success('Данные обновлены 📝', {
			icon: '✅',
			position: 'top-center',
			pauseOnHover: false,
			bodyClassName: 'font-nunito',
		})
	} catch (e) {
		console.log(e)

		const toast = (await import('vue3-toastify')).toast

		toast.error('Не удалось обновить данные', {
			icon: '❌',
			position: 'top-center',
			pauseOnHover: false,
			bodyClassName: 'font-nunito',
		})
	}
})

const signOut = () => {
	clear()

	setTimeout(() => {
		location.href = '/'
	}, 500)
}
</script>

<template>
	<h3 class="font-bold">{{ `Личные данные | #${user.id}` }}</h3>

	<form class="flex flex-col gap-5 w-96 mt-10" @submit="onSubmit">
		<FormInput name="email" label="E-Mail" required />
		<FormInput name="fullName" label="Полное имя" required />

		<FormInput type="password" name="password" label="Новый пароль" required />
		<FormInput
			type="password"
			name="confirmPassword"
			label="Повторите пароль"
			required
		/>

		<Button :disabled="isSubmitting" class="text-base mt-10" type="submit">
			Сохранить
		</Button>

		<Button
			@click="signOut"
			variant="secondary"
			:disabled="isSubmitting"
			class="text-base"
			type="button"
		>
			Выйти
		</Button>
	</form>
</template>
