<template>
	<div class="map">
		<span class="map__header">Dojazd</span>
		<div class="map__map">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4855.323045010846!2d20.000135463651088!3d49.60605900697957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160b550484c107%3A0x7b52834168ee18e!2sBocianie%20Gniazdo%20Rabka!5e0!3m2!1spl!2spl!4v1713621907007!5m2!1spl!2spl"
				width="100%"
				height="100%"
				style="border: 0"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.map {
	position: relative;
	right: 50%;
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	width: 100vw;

	&__map {
		height: rem(450);
	}

	&__header {
		display: flex;
		justify-content: center;
		font-size: rem(38);
		font-family: $font-family-cinzel;
		font-weight: 700;
		margin-bottom: rem(62);
		text-transform: uppercase;
	}
}
</style>
