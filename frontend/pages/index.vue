<template>
	<Hero />
	<div class="wrapper">
		<div class="reservation">
			<ReservationIframe />
		</div>
		<AboutUs />
		<Offer />
		<Houses />
		<Cta />
		<Testimonials />
		<Attractions />
		<Map />
	</div>
</template>

<script setup lang="ts">
import AboutUs from "~/components/homepage/AboutUs.vue";
import Attractions from "~/components/homepage/Attractions.vue";
import Houses from "~/components/homepage/Houses.vue";
import Offer from "~/components/homepage/Offer.vue";
import Cta from "~/components/homepage/Cta.vue";
import Testimonials from "~/components/homepage/Testimonials.vue";
import Map from "~/components/homepage/Map.vue";

const { find } = useStrapi();

const { data } = await useAsyncData("home-page", async () => {
	try {
		const response = await find("home-page", { populate: "deep" });
		return response;
	} catch (err) {
		return null;
	}
});

const hero = data.value?.data.attributes.hero;
provide("hero", hero);

const about = data.value?.data.attributes.about;
provide("about", about);

const offers = data.value?.data.attributes.offers;
provide("offers", offers);

const houses = data.value?.data.attributes.houses;
provide("houses", houses);

const cta = data.value?.data.attributes.cta;
provide("cta", cta);

const testimonials = data.value?.data.attributes.testimonials;
provide("testimonials", testimonials);

const attractions = data.value?.data.attributes.attractions;
provide("attractions", attractions);
</script>

<style lang="scss" scoped>
.reservation {
	margin-top: rem(25);
}
</style>
