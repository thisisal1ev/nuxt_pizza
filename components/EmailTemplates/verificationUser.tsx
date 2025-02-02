import { defineComponent, h } from 'vue'

export default defineComponent({
	name: 'verificationUser',
	props: {
		code: {
			type: String,
		},
	},
	setup(props) {
		return () => (
			<div>
				<h1>
					Код подтверждения:&nbsp;
					<b>{props.code}</b>
				</h1>

				<p>
					<a href={`http://localhost:3000/api/auth/verify?code=${props.code}`}>
						Подтвердить регистрацию
					</a>
				</p>
			</div>
		)
	},
})
