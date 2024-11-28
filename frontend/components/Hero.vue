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
						:style="`background-image: url(images/${slotProps.data.image.data.attributes.name})`"></div>
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
		font-size: rem(60);
		font-family: $font-family-raleway;
		color: $color-white;
	}
	&__description {
		font-size: rem(25);
		font-family: $font-family-raleway;
		line-height: 26px;
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
	:deep(.p-carousel) {
		height: calc(100vh - rem(300));
	}

	.hero {
		&__header {
			margin-top: rem(100);
			font-size: rem(38);
		}
		&__description {
			font-size: rem(21);
		}
	}
}
</style>
