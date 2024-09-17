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

			<label class="relative grow">
				<LucideSearch
					size="20"
					color="#ADADAD"
					class="absolute left-3 top-1/4"
				/>
				<input
					class="outline-none w-full py-3 rounded-2xl px-10 bg-[#f9f9f9]"
					type="text"
					placeholder="Поиск пиццы..."
				/>
			</label>

			<div class="flex items-center justify-center space-x-4">
				<Button variant="outline" class="gap-1" size="default">
					<LucideUser size="16" class="w-4 h-5" />
					<span>Войти</span>
				</Button>

				<Button variant="default" size="default" class="relative group">
					<b>520 &#8381;</b>
					<span class="h-full w-[1px] bg-white/30 mx-3"></span>

					<div
						class="flex items-center gap-1 transition duration-300 group-hover:opacity-0"
					>
						<LucideShoppingBasket size="16" class="relative" />
						<b>3</b>
					</div>

					<LucideArrowRight
						size="20"
						class="absolute right-5 transition duration-300 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
					/>
				</Button>
			</div>
		</div>
	</header>
</template>
