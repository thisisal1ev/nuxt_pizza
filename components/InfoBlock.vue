<script lang="ts" setup>
interface Props {
	title: string
	text: string
	class?: string
	imageUrl?: string
}

defineProps<Props>()
</script>

<template>
	<div class="flex items-center justify-between w-[840px] gap-12" :class>
		<div class="flex flex-col">
			<div class="w-[445px] space-y-5">
				<h2 class="font-extrabold">{{ title }}</h2>

				<p class="text-gray-400 text-lg">{{ text }}</p>
			</div>

			<div class="flex gap-5 mt-11">
				<NuxtLink href="/">
					<Button variant="outline" class="gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="m12 19-7-7 7-7" />
							<path d="M19 12H5" />
						</svg>

						На главную
					</Button>
				</NuxtLink>

				<a href="">
					<Button
						variant="outline"
						class="!text-gray-500 border-gray-400 hover:bg-gray-50"
					>
						Обновить
					</Button>
				</a>
			</div>
		</div>

		<img :src="imageUrl" :alt="title" width="300" height="500" />
	</div>
</template>
