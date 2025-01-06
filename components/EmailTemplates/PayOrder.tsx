import { ref, computed } from 'vue'

interface PayOrderTemplateProps {
	orderId: number
	totalAmount: number
	paymentURL: string
}

export default {
	props: {
		orderId: {
			type: Number,
			required: true,
		},
		totalAmount: {
			type: Number,
			required: true,
		},
		paymentURL: {
			type: String,
			required: true,
		},
	},
	setup(props: PayOrderTemplateProps) {
		const orderId = ref(props.orderId)
		const totalAmount = ref(props.totalAmount)
		const paymentURL = ref(props.paymentURL)

		const template = computed(() => {
			return `
        <div>
          <h1>Заказ #${orderId.value}</h1>
          <p>
            Оплатите заказ на сумму ${totalAmount.value} &#8381;. Перейдите
            <a href="${paymentURL.value}">по этой ссылке</a> для оплаты заказа.
          </p>
        </div>
      `
		})

		return {
			template,
		}
	},
}
