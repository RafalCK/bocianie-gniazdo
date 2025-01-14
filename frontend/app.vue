<template>
	<div class="layout">
		<Header />
		<main>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</main>
		<Footer />
	</div>
</template>

<script setup lang="ts">
const { find } = useStrapi();

const { data } = await useAsyncData("contact", async () => {
	try {
		return await find("contact", { pLevel: "5" });
	} catch (err) {
		return null;
	}
});

const contacts = data.value?.data?.contact;
provide("contacts", contacts);

const socials = data.value?.data?.socials;
provide("socials", socials);

const links = data.value?.data?.links;
provide("links", links);

const partners = data.value?.data?.partners;
provide("partners", partners);
</script>

<style lang="scss" scoped></style>
