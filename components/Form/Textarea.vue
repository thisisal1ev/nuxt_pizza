<script lang="ts" setup>
import Textarea from '../Textarea.vue'

interface Props {
	name: string
	label?: string
	required?: boolean
}

defineProps<Props>()

const value = ref('')
const errorText = ref('')
</script>

<template>
	<div className="{className}">
		<p className="font-medium mb-2">
			{{ label }} <RequiredSymbol v-if="required" />
		</p>

		<div className="relative">
			<Textarea className="h-12 text-md" />

			<ClearButton v-if="value" @onClick="" />
		</div>

		<ErrorText v-if="errorText" :text="errorText" class="mt-2" />
	</div>
</template>
