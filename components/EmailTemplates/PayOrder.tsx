import { defineComponent, h } from 'vue'

export default defineComponent({
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
	setup(props) {
		return () => (
			<div>
				<h1>Заказ #{props.orderId}</h1>
				<p>
					Оплатите заказ на сумму {props.totalAmount} &#8381;. Перейдите
					<a href={props.paymentURL}> по этой ссылке</a> для оплаты заказа.
				</p>
			</div>
		)
	},
})
