import { User } from '@prisma/client'
import { compare } from 'bcrypt'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const body: User = await readBody(event)

	const findUser = await prisma.user.findFirst({
		where: {
			email: body.email,
		}
	})

	if (!findUser) {
		return createError({
			statusCode: 401,
			message: "Имя пользователя или пароль введены не верно",
		})
	}

	const comparePasswords = await compare(body.password, findUser.password)

	if (!comparePasswords) {
		return createError({
			statusCode: 401,
			message: "Имя пользователя или пароль введены не верно",
		})
	}

	const { password, ...result } = findUser

	const session = await setUserSession(event, {
		user: {
			...result,
		},
		createdAt: Date.now(),
	})

	return session
})