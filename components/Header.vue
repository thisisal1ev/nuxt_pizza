<script lang="ts" setup>
interface Props {
	hasSearch?: boolean
	hasCart?: boolean
}

defineProps<Props>()
</script>

<template>
	<header class="py-10 border-b-2">
		<div class="container flex items-center justify-between space-x-10">
			<NuxtLink class="inline-flex items-center justify-center gap-4" to="/">
				<img
					class="w-9 h-9"
					width="35"
					height="35"
					src="/logo.png"
					alt="logo"
				/>
				<div class="flex flex-col">
					<span class="uppercase font-black text-2xl">Nuxt pizza</span>
					<span class="text-sm leading-3 text-gray-400"
						>вкусней уже некуда</span
					>
				</div>
			</NuxtLink>

			<div v-if="!hasSearch" class="mx-10 flex-1">
				<SearchInput />
			</div>

			<div class="flex items-center justify-center space-x-4">
				<Button variant="outline" class="gap-1" size="default">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
					<span>Войти</span>
				</Button>

				<CartButton v-if="!hasCart" />
			</div>
		</div>
	</header>
</template>
