<template>
	<div class="flex flex-col w-full min-h-screen">
		<Header />
		<NuxtLoadingIndicator />
		<main class="grow h-auto">
			<slot />
		</main>
	</div>
</template>
