<template>
	<div class="attractions">
		<PageHero
			img="images/atrakcje.webp"
			header="Atrakcje"></PageHero>
		<div class="wrapper">
			<div class="attractions__container shadow-2">
				<div class="attractions__row">
					<div class="attractions__text">
						<span class="attractions__text__header">Maciejowa</span>
						<p class="attractions__text__description">Zachwycający szczyt Maciejowa to prawdziwa perełka w sercu Gorców. Jego malownicze widoki na górskie krajobrazy i okoliczne doliny sprawiają, że jest to idealne miejsce dla miłośników przyrody i aktywnego wypoczynku. Niezapomniana panorama, która rozciąga się z Maciejowej, wraz z licznymi trasami, przyciąga turystów przez cały rok. Nie przegap okazji, by odwiedzić ten wyjątkowy szczyt podczas pobytu w Rabce-Zdroju. Znajdujące się niedaleko Bocianie Gniazdo stanowi doskonałą bazę wypadową na wycieczkę, pozwalając Ci cieszyć się urokami Maciejowej bez względu na porę roku.</p>
					</div>
					<div class="attractions__image">
						<NuxtImg
							class="attractions__image__image"
							src="images/maciejowa.webp" />
					</div>
				</div>
				<div class="attractions__row">
					<div class="attractions__image">
						<NuxtImg
							class="attractions__image__image"
							src="images/park_zdrojowy.jpg" />
					</div>
					<div class="attractions__text">
						<span class="attractions__text__header">Park Zdrojowy</span>
					</div>
				</div>
				<div class="attractions__row">
					<div class="attractions__text">
						<span class="attractions__text__header">Stare Wierchy</span>
						<p class="attractions__text__description">Stare Wierchy, wznoszące się na wysokość 971 metrów nad poziomem morza, to majestatyczny szczyt w sercu Gorców. Jego imponujące panorama oferuje zachwycające widoki na okoliczne góry, doliny i malownicze tereny. To idealne miejsce dla pasjonatów wędrówek górskich, którzy pragną odkryć piękno i spokój tej niezwykłej krainy. Bez względu na porę roku, Stare Wierchy zachęcają do odkrywania swoich tajemnic i doświadczania niezapomnianych przygód wśród natury.</p>
					</div>
					<div class="attractions__image">
						<NuxtImg
							class="attractions__image__image"
							src="images/stare_wierchy.jpg" />
					</div>
				</div>
				<div class="attractions__row">
					<div class="attractions__image">
						<NuxtImg
							class="attractions__image__image"
							src="images/rabkoland.jpg" />
					</div>
					<div class="attractions__text">
						<span class="attractions__text__header">Rabkoland</span>
					</div>
				</div>
				<div class="attractions__row">
					<div class="attractions__text">
						<span class="attractions__text__header">Turbacz</span>
						<p class="attractions__text__description">Turbacz, najwyższy punkt w Gorcach, wznosi się w samym sercu tego pasma górskiego. Jako centralny punkt Gorców, Turbacz stanowi niezwykłą dominantę krajobrazu, oferując widoki, które zapierają dech w piersiach. Turbacz jest popularnym celem wędrówek górskich, przyciągając miłośników przyrody i poszukiwaczy przygód. Zbudowany z fliszu karpackiego szczyt kryje w sobie bogactwo przyrody oraz tajemnice dawnych czasów. Z jego wierzchołka roztacza się zapierająca widoki panorama, obejmująca rozległe tereny Gorców.</p>
					</div>
					<div class="attractions__image">
						<NuxtImg
							class="attractions__image__image"
							src="images/turbacz.jpg" />
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
.attractions {
	&__container {
		margin: rem(80) rem(75);
	}

	&__row {
		display: grid;
		grid-template-columns: 1fr 1fr;

		&:nth-child(even) {
			.attractions__text {
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
	.attractions {
		&__container {
			margin: rem(80) rem(5);
		}

		&__row {
			grid-template-columns: 1fr;

			&:nth-child(even) {
				.attractions__image {
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
