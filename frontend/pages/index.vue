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
</script>

<style lang="scss" scoped>
.reservation {
	margin-top: rem(25);
}
</style>
