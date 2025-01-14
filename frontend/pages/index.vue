<template>
	<Hero />
	<div class="wrapper">
		<div class="reservation">
			<ReservationIframe />
		</div>
		<AboutUs />
		<Offer />
		<Cta />
		<Testimonials />
		<Attractions />
		<Map />
	</div>
</template>

<script setup lang="ts">
import Hero from "~/components/Hero.vue";
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
		const response = await find("home-page", { pLevel: "5" });
		return response;
	} catch (err) {
		return null;
	}
});

const hero = data.value?.data.hero;
provide("hero", hero);

const about = data.value?.data.about;
provide("about", about);

const offers = data.value?.data.offers;
provide("offers", offers);

const houses = data.value?.data.houses;
provide("houses", houses);

const cta = data.value?.data.cta;
provide("cta", cta);

const testimonials = data.value?.data.testimonials;
provide("testimonials", testimonials);

const attractions = data.value?.data.attractions;
provide("attractions", attractions);
</script>

<style lang="scss" scoped>
.reservation {
	margin-top: rem(25);
}
</style>
