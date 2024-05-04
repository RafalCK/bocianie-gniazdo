<template>
	<div class="offers">
		<PageHero
			img="images/hero_1.jpg"
			header="Oferta"></PageHero>
		<div class="wrapper">
			<div class="offers__container shadow-2">
				<div class="offers__row">
					<div class="offers__text">
						<span class="offers__text__header">Bocianie Gniazdo</span>
						<p class="offers__text__description">To oaza spokoju i rozrywki, w której każdy znajdzie coś dla siebie. Położone na malowniczej górze, kompleks składa się z urokliwych domków i apartamentów, otoczonych przez niepowtarzalny krajobraz. To idealne miejsce na rodzinny wypoczynek, gdzie można cieszyć się bliskością natury i spędzić czas na wspólnych integracjach. Dla tych, którzy lubią aktywny odpoczynek, otoczenie górskie oferuje liczne możliwości, począwszy od malowniczych spacerów po okolicznych szlakach, aż po wspinaczkę na pobliskie szczyty. Wieczory można spędzić przyjemnie, delektując się smakiem grillowanych potraw przy basenie, relaksując się w jacuzzi lub rozgrzewając w saunie. Bocianie Gniazdo to także doskonałe miejsce na organizację wyjątkowych wydarzeń. Oferujemy możliwość wynajęcia całego kompleksu na imprezy okolicznościowe, takie jak wesela, komunie czy inne uroczystości. Dodatkowo, dla tych, którzy chcą zorganizować niezapomnianą imprezę, dostępny jest również domek imprezowy, idealny na wieczór panieński czy urodziny.</p>
					</div>
					<div class="offers__image">
						<NuxtImg
							class="offers__image__image"
							src="images/bocianie_gniazdo_led.jpg" />
					</div>
				</div>
				<div class="offers__row">
					<div class="offers__image">
						<NuxtImg
							class="offers__image__image"
							src="images/homes.jpg" />
					</div>
					<div class="offers__text">
						<span class="offers__text__header">Domki</span>
						<p class="offers__text__description">W naszej ofercie znajdziesz 6 w pełni wyposażonych, nowoczesnych i komfortowych domków, z których każdy posiada własne miejsce parkingowe. Podczas pobytu będziesz mógł korzystać z ogólnodostępnego jacuzzi, sauny oraz profesjonalnego grilla, aby maksymalnie cieszyć się relaksem i komfortem. Jeden z naszych domków, zwany Domkiem w Lesie, zapewnia wyjątkowe doświadczenie pobytu w otoczeniu natury. Zlokalizowany na uboczu, oferuje niepowtarzalny klimat lasu oraz harmonijną symbiozę z naturą. Dodatkowo, w jego pobliżu znajduje się bania, gdzie możesz zrelaksować się podczas gorącej kąpieli i cieszyć się bliskością natury, a także miejsce na wielkie ognisko, które dodatkowo podkreśli magiczną atmosferę tego miejsca. Dla tych, którzy szukają miejsca na organizację wyjątkowych wydarzeń, proponujemy nasz "Domek Imprezowy". To idealne miejscówka na zorganizowanie imprezy okolicznościowej, takiej jak urodziny czy wieczór panieński. Chociaż ten domek nie oferuje noclegu, to w ramach specjalnego pakietu można wynająć go razem z "Domkiem w Lesie", aby udanie i z radością celebrować obchodzoną uroczystość.</p>
					</div>
				</div>
				<div class="offers__row">
					<div class="offers__text">
						<span class="offers__text__header">Imprezy Okolicznościowe</span>
						<p class="offers__text__description">Planujesz wielką imprezę, która zostanie na długo w pamięci? W Bocianim Gnieździe jesteśmy gotowi zorganizować niezapomnianą zabawę, niezależnie od okazji. Nasza profesjonalna obsługa oraz bogata infrastruktura sprawią, że Twój dzień będzie wyjątkowy. Dysponujemy kompletnym zapleczem, które obejmuje profesjonalną kuchnię, przestronną salę oraz komfortowe pokoje. Dodatkowo, dysponujemy obszerną powierzchnią plenerową, idealną na organizację ceremonii pod gołym niebem lub na świeżym powietrzu. Nie ma dla nas rzeczy niemożliwych - jesteśmy gotowi zrealizować nawet najbardziej wyrafinowane pomysły. Dla grup, które planują imprezę, proponujemy możliwość wynajęcia domku imprezowego wraz z noclegiem w domku w lesie. Goście mogą korzystać z pełnej gamy udogodnień naszego ośrodka, w tym basenu, jacuzzi, balii z gorącą wodą oraz sauny.</p>
					</div>
					<div class="offers__image">
						<NuxtImg
							class="offers__image__image"
							src="images/imprezy.jpg" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "page-layout",
});
</script>

<style lang="scss" scoped>
.offers {
	&__container {
		margin: rem(80) rem(75);
	}

	&__row {
		display: grid;
		grid-template-columns: 1fr 1fr;

		&:nth-child(even) {
			.offers__text {
				background-color: $color-secondary;
			}
		}
	}

	&__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: rem(40) 15%;

		&__header {
			display: flex;
			justify-content: center;
			text-align: center;
			font-size: rem(38);
			font-family: $font-family-bold;
			padding-top: rem(40);
			margin-bottom: rem(50);
			text-transform: uppercase;
			text-decoration: underline;
			text-decoration-color: $color-primary;
			text-underline-offset: rem(6);
			line-height: 46px;
		}
	}

	&__image {
		display: flex;
		position: relative;
		overflow: hidden;
		min-height: 600px;
		img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
	}
}

@media (max-width: 965px) {
	.offers {
		&__container {
			margin: rem(80) rem(5);
		}

		&__row {
			grid-template-columns: 1fr;

			&:nth-child(even) {
				.offers__image {
					order: 2;
				}
			}
		}

		&__image {
			min-height: 450px;
			max-height: 450px;
		}
	}
}
</style>
