<script lang="ts" setup>
import Input from '../Input.vue'

interface Props {
	name: string
	label?: string
	placeholder?: string
	required?: boolean
}

const props = defineProps<Props>()

const { value, errorMessage, setValue, handleChange, handleBlur } =
	useField<string>(props.name, {
		validate: true,
	})

const onClickClear = () => {
	setValue('', true)
}
</script>

<template>
	<div>
		<p v-if="label" class="font-medium mb-2">
			{{ label }}
			<RequiredSymbol v-if="required" />
		</p>

		<div class="relative">
			<Input
				:name
				:value="value ?? ''"
				:placeholder
				v-model="value"
				@input="handleChange"
				@blur="handleBlur"
				class="text-base border-2 transition-colors duration-300 focus:border-primary h-12 text-md"
			/>

			<ClearButton v-if="value" @onClick="onClickClear" />
		</div>

		<ErrorText v-if="errorMessage" :text="errorMessage" class="mt-2" />
	</div>
</template>
