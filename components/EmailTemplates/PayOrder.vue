<script lang="ts" setup>
interface PayOrderTemplateProps {
	orderId: number
	totalAmount: number
	paymentURL: string
}

defineProps<PayOrderTemplateProps>()
</script>

<template>
	<div>
		<h1>Заказ #{{ orderId }}</h1>
		<p>
			Оплатите заказ на сумму {{ totalAmount }} &#8381;. Перейдите
			<a :href="paymentURL">по этой ссылке</a> для оплаты заказа.
		</p>
	</div>
</template>
