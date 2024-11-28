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

<script setup lang="ts">
const { find } = useStrapi();

const { data } = await useAsyncData("contact", async () => {
	try {
		return await find("contact", { populate: "deep" });
	} catch (err) {
		return null;
	}
});

const contacts = data.value?.data.attributes.contact;
provide("contacts", contacts);

const socials = data.value?.data.attributes.socials;
provide("socials", socials);

const links = data.value?.data.attributes.links;
provide("links", links);

const partners = data.value?.data.attributes.partners;
provide("partners", partners);
</script>

<style lang="scss" scoped></style>
