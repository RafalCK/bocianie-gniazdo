<template>
	<div class="cta">
		<div
			class="cta__image"
			:style="`background-image: url('images/hero_1.jpg')`"></div>
		<div class="cta__content">
			<span class="cta__text">Czas na wyjątkowe chwile. Wynajmij swoje marzenia i zarezerwuj pobyt już teraz.</span>
			<NuxtLink to="rezerwacje">
				<Button class="cta__button"> <span class="cta__button__label">Rezerwuj</span></Button>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cta {
	margin-top: rem(92);
	position: relative;
	right: 50%;
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	width: 100vw;
	height: rem(238);

	&__image {
		filter: brightness(45%);
		z-index: -1;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top 60% center;
	}

	&__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		gap: rem(10);

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 0 5%;
		width: 100%;
		height: 100%;
	}

	&__text {
		color: $color-white;
		font-size: rem(26);
		font-family: $font-family-regular;
	}

	&__button {
		&__label {
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: rem(2);
		}
	}
}

@media (max-width: 965px) {
	.cta {
		margin-top: rem(60);
		&__content {
			flex-direction: column;
			align-items: center;
			padding: 0 5%;
			gap: 0;
		}

		&__text {
			display: flex;
			text-align: center;
			font-size: rem(18);
		}
	}
}
</style>
