import prisma from '~/lib/prisma'

import { User } from '@prisma/client'
import { genSalt, hash } from 'bcrypt'

export default defineEventHandler(async (event) => {
	const body: User = await readBody(event)
	const salt = await genSalt(10)
	const genPasswordHash = await hash(body.password, salt)

	const candidate: User = {
		...body,
		fullName: body.fullName,
		email: body.email,
		password: genPasswordHash,
	}

	const findUser = await prisma.user.findFirst({
		where: {
			fullName: body.fullName,
			email: body.email,
		}
	})

	if (findUser) {
		return createError({
			statusCode: 401,
			message: "Пользователь существует",
		})
	}

	const user = await prisma.user.create({
		data: candidate,
	})

	const { password, ...result } = user

	return result
})