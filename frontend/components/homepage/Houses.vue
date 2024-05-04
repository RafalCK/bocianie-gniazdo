<template>
	<div class="houses">
		<div class="houses__container">
			<div
				class="houses__description animation-duration-1000 animation-ease-in-out"
				v-animateonscroll="{ enterClass: 'fadeinleft' }">
				<span class="houses__description__header">Domki</span>
				<p>W naszej ofercie znajdziesz 6 w pełni wyposażonych, nowoczesnych i komfortowych domków, z których każdy posiada własne miejsce parkingowe. Podczas pobytu będziesz mógł korzystać z ogólnodostępnego jacuzzi, sauny oraz profesjonalnego grilla, aby maksymalnie cieszyć się relaksem i komfortem. Jeden z naszych domków, zwany Domkiem w Lesie, zapewnia wyjątkowe doświadczenie pobytu w otoczeniu natury. Zlokalizowany na uboczu, oferuje niepowtarzalny klimat lasu oraz harmonijną symbiozę z naturą. Dodatkowo, w jego pobliżu znajduje się bania, gdzie możesz zrelaksować się podczas gorącej kąpieli i cieszyć się bliskością natury, a także miejsce na wielkie ognisko, które dodatkowo podkreśli magiczną atmosferę tego miejsca. Dla tych, którzy szukają miejsca na organizację wyjątkowych wydarzeń, proponujemy nasz "Domek Imprezowy". To idealne miejscówka na zorganizowanie imprezy okolicznościowej, takiej jak urodziny czy wieczór panieński. Chociaż ten domek nie oferuje noclegu, to w ramach specjalnego pakietu można wynająć go razem z "Domkiem w Lesie", aby udanie i z radością celebrować obchodzoną uroczystość.</p>
				<div class="houses__description__button">
					<NuxtLink to="domki">
						<Button
							iconPos="right"
							label="Zobacz więcej"
							icon="pi pi-arrow-right" />
					</NuxtLink>
				</div>
			</div>
			<div
				class="houses__image animation-duration-1000 animation-ease-in-out"
				v-animateonscroll="{ enterClass: 'fadeinright' }">
				<NuxtImg
					class="houses__image-one"
					src="images/about_us.jpg"
					height="505" />
				<NuxtImg
					class="houses__image-second"
					src="images/houses_4.jpg"
					height="260" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.houses {
	position: relative;
	margin-top: rem(92);
	margin-bottom: rem(180);
	padding: rem(30) 0 rem(100) 0;

	&__container {
		display: flex;
		margin-top: rem(50);
	}

	&__image {
		max-height: rem(522);
	}

	&__image-second {
		width: 300px;
		height: 260px;
		margin-top: -6rem;
		transform: translateX(10rem);
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
			text-decoration-color: $color-primary;
			text-underline-offset: rem(6);
		}

		&__button {
			display: flex;
			justify-content: flex-end;
			margin-top: rem(55);
		}
	}
}

@media (max-width: 1260px) {
	.houses {
		margin-top: 0;
		margin-bottom: rem(20);
		padding: rem(30) 0 0 0;
		&__container {
			flex-direction: column-reverse;
		}
		&__image {
			display: flex;
			justify-content: center;
			&-one {
				width: 100%;
				max-width: rem(400);
				height: auto;
			}

			&-second {
				display: none;
			}
		}
	}
}

@media (min-width: 1261px) and (max-width: 1680px) {
	.houses {
		margin-bottom: rem(20);
		padding: rem(30) 0 rem(0) 0;
	}
}
</style>
