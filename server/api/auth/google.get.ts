export default defineOAuthGoogleEventHandler({
	async onSuccess(event, { user }) {
		// user is the user object returned by Google

		await setUserSession(event, {
			user: {
				id: new Date().getSeconds() + new Date().getMilliseconds().toString(),
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