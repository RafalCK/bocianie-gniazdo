<template>
	<div class="apartments">
		<div class="apartments__container">
			<div class="apartments__image">
				<NuxtImg
					src="images/about_us.jpg"
					height="505" />
				<NuxtImg
					class="apartments__image-second"
					src="images/about_us.jpg"
					height="260" />
			</div>
			<div class="apartments__description">
				<span class="apartments__description__header">Apartamenty</span>
				<p>Nasze wszystkie apartamenty zlokalizowane są w jednym budynku. Tutaj znajdziesz nie tylko komfortowe zakwaterowanie, ale również wyjątkową atmosferę, która sprawi, że Twój pobyt będzie niezapomniany. Nasz budynek oferuje łącznie 6 apartamentów. Na parterze mieści się jeden luksusowy apartament, który z pewnością zachwyci Cię swoim eleganckim wystrojem i przestronnością. Na wyższych piętrach znajdują się kolejne 5 apartamentów, które zapewniają prywatność oraz spokojną atmosferę. Dodatkowo, na parterze naszego budynku znajdziesz udogodnienia takie jak kantyna oraz duża profesjonalna kuchnia, które są dostępne dla wszystkich naszych gości. To idealne miejsce do spotkań, wspólnych posiłków oraz relaksu po dniu pełnym wrażeń. Nasze apartamenty są idealnym rozwiązaniem zarówno dla większych grup, które chcą wynająć cały budynek, jak i dla osób poszukujących prywatności, które mogą wynająć pojedyncze apartamenty.</p>
				<div class="apartments__description__button">
					<Button
						iconPos="right"
						label="Zobacz więcej"
						icon="pi pi-arrow-right" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.apartments {
	position: relative;
	margin-top: rem(92);
	margin-bottom: rem(92);
	padding: rem(30) 0 rem(50) 0;

	&::before {
		content: "";
		position: absolute;
		width: calc(100vw + 100%);
		margin-left: -100%;
		height: 100%;
		background: #f4f0ed;
		top: 0;
		left: 0;
		z-index: -2;
	}

	&__container {
		display: flex;
	}

	&__image {
		max-height: rem(522);
	}

	&__image-second {
		width: 300px;
		height: 260px;
		margin-top: -6rem;
		transform: translateX(-5rem);
		border: solid 8px #fff;
	}

	&__description {
		padding: rem(50) rem(40);
		line-height: 22px;

		&__header {
			display: flex;
			justify-content: center;
			font-size: rem(38);
			font-family: $font-family-bold;
			margin-bottom: rem(50);
			text-transform: uppercase;
			text-decoration: underline;
			text-decoration-color: $color-secondary;
			text-underline-offset: rem(6);
		}

		&__button {
			display: flex;
			justify-content: flex-end;
			margin-top: rem(55);
		}
	}
}
</style>
