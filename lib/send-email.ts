import { Resend } from 'resend'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import PayOrderTemplate from '~/components/EmailTemplates/PayOrder'

interface Props {
	orderId: number
	totalAmount: number
	paymentURL: string
}

export const sendEmail = async (to: string, subject: string, props: Props) => {
	const resend = new Resend(process.env.RESEND_API_KEY)

	const app = createSSRApp({
		render: () => h(PayOrderTemplate, props),
	})

	const html = await renderToString(app)

	const { data, error } = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to,
		subject,
		text: '',
		html,
	})

	if (error) {
		throw error
	}

	return data
}