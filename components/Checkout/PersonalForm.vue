<script lang="ts" setup>
defineProps<{ class?: string }>()
</script>

<template>
	<WhiteBlock title="2. Персональные данные" :class>
		<template #lower>
			<div class="grid grid-cols-2 gap-5">
				<FormInput
					:name="'Имя'"
					:label="'Имя'"
					:placeholder="'Имя'"
					:required="true"
				/>
				<FormInput
					:name="'Фамилия'"
					:label="'Фамилия'"
					:placeholder="'Фамилия'"
					:required="true"
				/>
				<FormInput
					:name="'E-Mail'"
					:label="'E-Mail'"
					:placeholder="'E-Mail'"
					:required="true"
				/>
				<FormInput
					:name="'Телефон'"
					:label="'Телефон'"
					:placeholder="'Телефон'"
					:required="true"
				/>
			</div>
		</template>
	</WhiteBlock>
</template>
