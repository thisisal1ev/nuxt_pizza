export default defineOAuthGitLabEventHandler({
	async onSuccess(event, { user }) {
		// user is the user object returned by GitHub

		await setUserSession(event, {
			user: {
				id: user.id,
				fullName: user.name,
				email: user.email,
				role: 'USER',
			}
		})

		return sendRedirect(event, '/')
	},

	async onError(event, error) {
		// error is the error returned by Google

		console.error(error)

		return sendRedirect(event, '/')
	},
})