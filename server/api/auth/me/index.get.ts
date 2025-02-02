import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	try {
		const { user } = await getUserSession(event)

		if (!user) {
			return createError({
				statusCode: 401,
				message: 'Вы не авторизованы'
			})
		}

		const data = await prisma.user.findUnique({
			where: {
				id: Number(user.id),
			},
			select: {
				fullName: true,
				email: true,
				password: false,
			},
		})

		return data
	} catch (e) {
		console.error(e)
		return createError({
			statusCode: 500,
			message: '[USER_GET] Server error'
		})
	}
})