<template>
	<div class="privacy-policy">
		<PageHero
			img="images/hero_1.jpg"
			header="Polityka Prywatności"></PageHero>
		<div class="wrapper">
			<div class="privacy-policy__container">
				<div class="privacy-policy__content">
					<div v-html="privacyPolicy.content"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "page-layout",
});

const { find } = useStrapi();

const { data } = await useAsyncData("privacy-policy", async () => {
	try {
		const response = await find("privacy-policy", { pLevel: "5" });
		return response;
	} catch (err) {
		return null;
	}
});

const privacyPolicy = data?.value?.data;
</script>

<style lang="scss" scoped>
.privacy-policy {
	&__container {
		margin: rem(40) 0 rem(80) 0;
	}
	&__content {
		padding-bottom: rem(200);
	}
}
</style>
