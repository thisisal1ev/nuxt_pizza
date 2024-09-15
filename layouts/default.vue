<template>
	<div class="flex flex-col w-full min-h-screen">
		<NuxtLoadingIndicator />
		<Header />
		<main class="grow h-auto container">
			<slot />
		</main>
	</div>
</template>
