<script lang="ts" setup>
defineProps<{ class?: string }>()
</script>

<template>
	<WhiteBlock title="2. Персональные данные" :class>
		<template #lower>
			<div class="grid grid-cols-2 gap-5 pb-4">
				<FormInput
					name="firstName"
					:label="'Имя'"
					:placeholder="'Имя'"
					:required="true"
				/>
				<FormInput
					name="lastName"
					:label="'Фамилия'"
					:placeholder="'Фамилия'"
					:required="true"
				/>
				<FormInput
					name="email"
					:label="'E-Mail'"
					:placeholder="'E-Mail'"
					:required="true"
				/>
				<FormInput
					name="phone"
					:label="'Телефон'"
					:placeholder="'Телефон'"
					:required="true"
				/>
			</div>
		</template>
	</WhiteBlock>
</template>
