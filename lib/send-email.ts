import { Resend } from 'resend'

export const sendEmail = async (to: string, subject: string, template: VNode) => {
	const resend = new Resend(process.env.RESEND_API_KEY)

	const { data, error } = await resend.emails.send({
		from: 'polonchihonkok@gmail.com',
		to,
		subject,
		text: '',
		react: { vue: template },
	})

	if (error) {
		throw error
	}

	return data
}