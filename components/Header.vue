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

			<div class="mx-10 flex-1">
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

				<Button variant="default" size="default" class="relative group">
					<b>520 &#8381;</b>
					<span class="h-full w-[1px] bg-white/30 mx-3"></span>

					<div
						class="flex items-center gap-1 transition duration-300 group-hover:opacity-0"
					>
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
							class="relative"
						>
							<path d="m15 11-1 9" />
							<path d="m19 11-4-7" />
							<path d="M2 11h20" />
							<path
								d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
							/>
							<path d="M4.5 15.5h15" />
							<path d="m5 11 4-7" />
							<path d="m9 11 1 9" />
						</svg>
						<b>3</b>
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="absolute right-5 transition duration-300 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
					>
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</Button>
			</div>
		</div>
	</header>
</template>
