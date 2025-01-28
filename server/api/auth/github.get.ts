export default defineOAuthGitHubEventHandler({
	async onSuccess(event, { user }) {
		// user is the user object returned by GitHub
		// You can save the user object to the database
		// and return the user object to the client

		await setUserSession(event, { user })
		return sendRedirect(event, '/')
	}
})