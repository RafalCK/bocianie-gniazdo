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
							:image="slotProps.data.image"
							class="mr-2"
							size="xlarge"
							shape="circle" />
					</div>
					<div class="testimonials__item__opinion">
						<p>{{ slotProps.data.opinion }}</p>
						<span class="testimonials__item__name">- {{ slotProps.data.name }}</span>
					</div>
				</div>
			</template>
		</Carousel>
	</div>
</template>

<script setup lang="ts">
const testimonials = [
	{
		name: "Grzegorz",
		opinion: "Piękne miejsce, idealne dla dużej grupy znajomych chcących spędzić trochę czasu na łonie natury. Domki oraz ich otoczenie bardzo czyste i zadbane. Gospodarze bardzo gościnni i pomocni.",
		image: "images/grzegorz.jpeg",
	},
	{
		name: "Agnieszka",
		opinion: "Piękny domek i cudowna cisza. Wlascicielka bardzo mila i pomocna. Świetny kontakt, zawsze szybka odpowiedz. Gorąco polecam pobyt.",
		image: "images/agnieszka.jpeg",
	},
	{
		name: "Kamil",
		opinion: "Bardzo polecamy! świetne miejsce - bardzo dobrze przygotowane, kontaktowi gospodarze, piękna okolica i piękne widoki.",
		image: "images/kamil.jpeg",
	},
	{
		name: "Piotr",
		opinion: "Piękne miejsce, piękne domki, cudowny widok. Super basen dla dzieciaków i dużo przestrzeni. Właściciele bardzo pomocni i elastyczni. Gorąco polecam i na pewno wrócimy!",
		image: "images/piotr.jpeg",
	},
];

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
