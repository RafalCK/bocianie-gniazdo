<template>
	<div class="layout">
		<Header />
		<main>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</main>
		<Footer />
		<CookieControl locale="pl">
			<template #bar>
				<p>Ta strona korzysta z ciasteczek. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.</p>
			</template>
		</CookieControl>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
