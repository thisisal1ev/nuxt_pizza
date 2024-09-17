<template>
	<div class="flex flex-col w-full min-h-screen">
		<NuxtLoadingIndicator color="#ff5e00" class="text-primary" />
		<Header />
		<main class="grow h-auto">
			<slot />
		</main>
	</div>
</template>
