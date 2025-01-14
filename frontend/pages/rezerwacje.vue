<template>
	<div class="reservation">
		<PageHero
			img="images/ofert.jpg"
			header="Rezerwacja"></PageHero>
		<div class="wrapper">
			<div class="reservation__container">
				<ReservationIframe />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "page-layout",
});
</script>

<style lang="scss" scoped>
.reservation {
	&__container {
		margin: rem(40) 0 rem(80) 0;
	}
}
</style>
