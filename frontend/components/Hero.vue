<template>
	<div class="hero">
		<Carousel
			:value="hero"
			:numVisible="1"
			:numScroll="1"
			:showIndicators="false"
			:showNavigators="false"
			:autoplayInterval="5000">
			<template #item="slotProps">
				<div class="hero__item">
					<div
						class="hero__image"
						:style="`background-image: url(http://localhost:1337${slotProps.data.image.url})`"></div>
					<div class="hero__text">
						<span class="hero__header">
							{{ slotProps.data.header }}
						</span>
						<span class="hero__description">
							{{ slotProps.data.subheader }}
						</span>
						<NuxtLink
							v-if="slotProps.data.button && slotProps.data.button.url"
							:to="slotProps.data.button.url">
							<Button
								class="hero__button"
								v-if="slotProps.data.button.label">
								<span class="hero__button__label">{{ slotProps.data.button.label }}</span></Button
							>
						</NuxtLink>
					</div>
				</div>
			</template>
		</Carousel>
	</div>
</template>

<script setup lang="ts">
const hero = inject("hero");
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
	margin-top: rem(-174);
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
		background-position: center;
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
		font-size: rem(52);
		font-family: $font-family-cinzel;
		font-weight: 600;
		line-height: 46px;
		color: $color-white;
		text-transform: uppercase;
	}
	&__description {
		font-size: rem(24);
		font-family: $font-family-cinzel;
		line-height: 26px;
		color: $color-white;
		text-transform: uppercase;
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
	:deep(.p-carousel) {
		height: calc(100vh - rem(300));
	}

	.hero {
		&__header {
			margin-top: rem(160);
			font-size: rem(30);
			line-height: 26px;
		}
		&__description {
			font-size: rem(16);
			line-height: 18px;
		}
	}
}
</style>
