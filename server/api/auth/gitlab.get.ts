export default defineOAuthGitLabEventHandler({
	async onSuccess(event, { user }) {
		// user is the user object returned by GitHub

		await setUserSession(event, { user })
		return sendRedirect(event, '/')
	}
})