<script lang="ts" setup>
defineProps<{ class?: string }>()
</script>

<template>
	<WhiteBlock title="3. Адрес доставки" :class>
		<template #lower>
			<div class="flex flex-col gap-5">
				<Input
					class="text-base border-2 transition-colors duration-300 focus:border-primary"
					name="firstName"
					type="text"
					placeholder="Введите адрес"
				/>
				<Textarea
					class="text-base border-2 transition-colors duration-300 focus:border-primary"
					placeholder="Комментарий к заказу"
					rows="5"
					name="Comment to address"
				></Textarea>
			</div>
		</template>
	</WhiteBlock>
</template>
