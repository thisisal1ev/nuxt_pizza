import { User } from '@prisma/client'
import { hashSync } from 'bcrypt'

import prisma from '~/lib/prisma'
import { sendEmail } from '~/lib/send-email'


export default defineEventHandler(async (event) => {
	try {
		const body: User = await readBody(event)

		const user = await prisma.user.findFirst({
			where: {
				email: body.email,
			},
		})

		if (user) {
			if (!user.verified) {
				return createError({
					statusCode: 401,
					message: "Почта не подтверждена",
				})
			}

			return createError({
				statusCode: 401,
				message: "Пользователь существует",
			})
		}

		const createdUser = await prisma.user.create({
			data: {
				fullName: body.fullName,
				email: body.email,
				password: hashSync(body.password, 10),
			},
		})

		const code = Math.floor(100000 + Math.random() * 900000).toString()

		await prisma.verificationCode.create({
			data: {
				code,
				userId: createdUser.id,
			},
		})

		setUserSession(event, { user: createdUser })

		return await sendEmail(
			createdUser.email,
			`Nuxt Pizza / Подтверждения регистрации`,
			{ code },
			true
		)
	} catch (e) {
		console.error('Error [CREATE_USER]', e)
		throw e
	}
})