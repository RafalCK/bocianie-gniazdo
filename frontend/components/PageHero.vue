<template>
	<div class="page-hero">
		<div class="page-hero__item">
			<div
				class="page-hero__image"
				:style="`background-image: url(${props.img})`"></div>
			<div class="page-hero__text">
				<span class="page-hero__header">
					{{ props.header }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	img: {
		type: String,
		required: true,
	},
	header: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.page-hero {
	margin-top: rem(-174);
	position: relative;
	height: rem(400);

	&__item {
		position: relative;
		height: 100%;
	}
	&__image {
		background-position: center;
		filter: brightness(75%);
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom center;
	}
	&__text {
		position: absolute;
		bottom: 20%;
		left: 50%;
		transform: translate(-50%, 20%);

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: rem(10);

		text-align: center;
	}
	&__header {
		display: flex;
		justify-content: center;
		color: $color-white;
		font-size: rem(40);
		font-family: $font-family-cinzel;
		font-weight: 700;
		text-transform: uppercase;
	}
}
</style>
