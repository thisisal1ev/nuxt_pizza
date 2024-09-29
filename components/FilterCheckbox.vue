<script lang="ts" setup>
const props = defineProps<{
	value: number
}>()
</script>

<template>
	<div class="flex items-center space-x-4">
		<label class="gap-2 flex items-center"
			><div class="inline-flex items-center relative rounded-lg bg-slate-200">
				<input
					:value="value"
					type="checkbox"
					class="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-lg checked:bg-primary outline-none"
					id="check"
				/>
				<span
					class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-3.5 w-3.5"
						viewBox="0 0 20 20"
						fill="currentColor"
						stroke="currentColor"
						stroke-width="1"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
				</span>
			</div>
			<span class="cursor-pointer flex-1 leading-none select-none">
				<slot />
			</span>
		</label>
	</div>
</template>
