import { hashSync } from 'bcrypt'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event)
		const { user } = await getUserSession(event)

		if (!user) {
			throw new Error('Пользователь не найден')
		}

		const findUser = await prisma.user.findFirst({
			where: {
				id: Number(user.id),
			},
		})

		await prisma.user.update({
			where: {
				id: Number(user.id),
			},
			data: {
				fullName: body.fullName,
				email: body.email,
				password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
			},
		})
	} catch (e) {
		console.log('Error [UPDATE_USER]', e)
		throw e
	}
})