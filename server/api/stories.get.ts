import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
	const stories = prisma.story.findMany({
		include: {
			items: true
		}
	})

	return stories
})