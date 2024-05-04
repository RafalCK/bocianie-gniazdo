<template>
	<div class="hero">
		<Carousel
			:value="slides"
			:numVisible="1"
			:numScroll="1"
			:showIndicators="false"
			:showNavigators="false"
			:autoplayInterval="5000">
			<template #item="slotProps">
				<div class="hero__item">
					<div
						class="hero__image"
						:style="`background-image: url(${slotProps.data.image})`"></div>
					<div class="hero__text">
						<span class="hero__header">
							{{ slotProps.data.header }}
						</span>
						<span class="hero__description">
							{{ slotProps.data.description }}
						</span>
						<NuxtLink
							v-if="slotProps.data.buttonLink"
							:to="slotProps.data.buttonLink">
							<Button
								class="hero__button"
								v-if="slotProps.data.buttonText">
								<span class="hero__button__label">{{ slotProps.data.buttonText }}</span></Button
							>
						</NuxtLink>
					</div>
				</div>
			</template>
		</Carousel>
	</div>
</template>

<script setup lang="ts">
const slides = [
	{
		header: "Bocianie Gniazdo",
		description: "Zarezerwuj odpoczynek już teraz",
		image: "images/hero_1.jpg",
		buttonText: "Wolne terminy",
		buttonLink: "rezerwacje",
	},
	{
		header: "Zrelaksuj się u nas",
		description: "blisko natury w magicznej atmosferze",
		image: "images/hero_4.jpg",
	},
	{
		header: "Piękne widoki",
		description: "są u nas gwarantowne",
		image: "images/hero_3.jpg",
	},
];
</script>

<style lang="scss" scoped>
:deep(.p-carousel) {
	height: calc(100vh - rem(150));

	.p-carousel-content {
		height: 100%;
	}

	.p-carousel-container {
		height: 100%;
	}

	.p-carousel-items-container {
		height: 100%;
	}
}

.hero {
	margin-top: rem(-161);
	position: relative;
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
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: rem(10);

		text-align: center;
	}
	&__header {
		font-size: rem(60);
		color: $color-white;
	}
	&__description {
		font-size: rem(25);
		color: $color-white;
	}
	&__button {
		margin-top: rem(15);
		&__label {
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: rem(2);
		}
	}
}

@media (max-width: 660px) {
	.hero {
		&__header {
			font-size: rem(50);
		}
	}
}
</style>
