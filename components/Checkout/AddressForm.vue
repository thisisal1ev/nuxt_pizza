<script lang="ts" setup>
defineProps<{ class?: string }>()
</script>

<template>
	<WhiteBlock title="3. Адрес доставки" :class>
		<template #lower>
			<div class="flex flex-col gap-5">
				<FormInput
					name="address"
					type="text"
					placeholder="Введите адрес"
					:required="true"
				/>
				<FormTextarea
					:rows="5"
					name="comment"
					placeholder="Комментарий к заказу"
				></FormTextarea>
			</div>
		</template>
	</WhiteBlock>
</template>
