<template>
	<div class="testimonials">
		<span class="testimonials__header">Opinie</span>
		<Carousel
			:value="testimonials"
			:numVisible="2"
			:numScroll="1"
			:autoplayInterval="6000"
			:responsiveOptions="responsiveOptions"
			circular>
			<template #item="slotProps">
				<div class="testimonials__item mx-5 p-3">
					<div class="testimonials__item__avatar">
						<Avatar
							:image="`images/${slotProps.data.image.data.attributes.name}`"
							class="mr-2"
							size="xlarge"
							shape="circle" />
					</div>
					<div class="testimonials__item__opinion">
						<p>{{ slotProps.data.content }}</p>
						<span class="testimonials__item__name">- {{ slotProps.data.name }}</span>
					</div>
				</div>
			</template>
		</Carousel>
	</div>
</template>

<script setup lang="ts">
const testimonials = inject("testimonials");

const responsiveOptions = ref([
	{
		breakpoint: "1075px",
		numVisible: 1,
		numScroll: 1,
	},
]);
</script>

<style lang="scss" scoped>
.testimonials {
	margin-top: rem(100);

	&__header {
		display: flex;
		justify-content: center;
		font-size: rem(38);
		font-family: $font-family-bold;
		margin-bottom: rem(50);
		text-transform: uppercase;
		text-decoration: underline;
		text-decoration-color: $color-primary;
		text-underline-offset: rem(6);
	}

	:deep(.p-avatar) {
		border: 2px solid $color-white;
		width: rem(70);
		height: rem(70);
	}

	:deep(.p-carousel-indicators) {
		padding-top: rem(36);
	}

	&__item {
		display: flex;
		align-items: center;

		min-height: rem(180);
		height: 100%;
		background: $color-secondary;

		&__avatar {
			margin-right: rem(8);
		}

		&__opinion {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		&__name {
			font-family: $font-family-regular;
		}
	}
}

@media (max-width: 440px) {
	.testimonials {
		:deep(.p-avatar) {
			display: none;
		}

		&__item {
			flex-direction: column;
			font-size: rem(11);
		}
	}
}

@media (min-width: 441px) and (max-width: 1075px) {
	.testimonials {
		:deep(.p-avatar) {
			width: rem(50);
			height: rem(50);
		}

		&__item {
			font-size: rem(14);
		}
	}
}
</style>
