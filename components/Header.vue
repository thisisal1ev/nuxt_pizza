<template>
	<header class="py-10 border-b">
		<div class="container flex items-center justify-between">
			<NuxtLink class="inline-block" to="/">
				<div class="flex flex-col">
					<span class="uppercase font-black text-2xl">Nuxt pizza</span>
					<span class="text-base text-grey">вкусней уже некуда</span>
				</div>
			</NuxtLink>
			<label class="relative">
				<Search color="#ADADAD" class="absolute left-2 top-1/4" />
				<input
					class="outline-none py-4 rounded-2xl px-10 bg-[#f9f9f9]"
					type="text"
					placeholder="Поиск пиццы..."
				/>
			</label>
			<div></div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
</script>
