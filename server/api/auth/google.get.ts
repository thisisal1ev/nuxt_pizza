export default defineOAuthGoogleEventHandler({
	onSuccess: async (event, { user }) => {
		// user is the user object returned by Google

		await setUserSession(event, { user })
		return sendRedirect(event, '/')
	},
})