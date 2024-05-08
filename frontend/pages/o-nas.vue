<template>
	<div class="about-us">
		<PageHero
			img="images/bocianie_gniazdo_led.jpg"
			header="O nas"></PageHero>
		<div class="wrapper">
			<div class="about-us__hosts">
				<div class="about-us__hosts__item">
					<div class="about-us__hosts__item__avatar">
						<Avatar
							image="images/ela_adrian.png"
							size="xlarge"
							shape="circle" />
						<span class="about-us__hosts__item__name">Ela i Adrian</span>
					</div>
					<div class="about-us__hosts__item__opinion">
						<p>Cześć! Tu Ela i Adrian Bocianowscy. Jak się już domyślacie nazwa miejsca powstała od nazwiska – wymyślił ją mój mąż w przypływie imprezowego natchnienia - i tak już zostało. A jak znaleźliśmy się na szczycie góry? Przyjeżdżaliśmy tu na grzyby, a na polance, na której teraz stoją domy popijaliśmy kawę z termosu i marzyliśmy o takim widoku na co dzień. I wymarzyliśmy! Wybudowaliśmy duży dom i towarzyszące mu domki, do których Was zapraszamy. Potem wykopaliśmy basen i postawiliśmy balię z gorącą wodą. I ciągle nam mało, coś chcemy udoskonalać, dobudowywać i dopieszczać. Po całodziennej walce w przychodniach stomatologicznych zaszywamy się przy ognisku, zbieramy grzyby, gapimy w gwiazdy lub wspinamy na pobliskie szczyty. W ten sposób wietrzymy głowę, pozbywamy się złych myśli i uśmiechamy z większym spokoje. Wam także polecamy górski wypoczynek i wierzymy, że każdy znajdzie tu coś dla siebie.</p>
					</div>
				</div>
			</div>
			<!-- <div class="about-us__container shadow-2">
				<div class="about-us__row">
					<div class="about-us__text">
						<p class="about-us__text__description">Dzień dobry z Kotliny Rabczańskiej! Ulokowaliśmy się na szczycie góry pomiędzy Gorcami i Beskidem Wyspowym, z której mamy genialny widok na wchodzące i zachodzące za pasmem szczytów słońce. Zazwyczaj poranną kawę pijemy z termosu na szlaku na Maciejową, przegryzamy ją racuchami ze schroniska i potem zbiegamy na obiad w Rabce. Wieczorami rozpalamy palenisko pod balią z gorącą wodą i ognisko, przy którym pieczemy kiełbasy, gotujemy grzybową i zakopujemy w żarze ziemniaki.</p>
					</div>
					<div class="about-us__image">
						<NuxtImg
							class="about-us__image__image"
							src="images/hero_4.jpg" />
					</div>
				</div>
				<div class="about-us__row">
					<div class="about-us__image">
						<NuxtImg
							class="about-us__image__image"
							src="images/about_us_2.jpg" />
					</div>
					<div class="about-us__text">
						<p class="about-us__text__description">Jeżeli tęsknicie za wiatrem pachnącym sosnowym lasem, śniegiem po pas, spacerami wśród łąk, hal i pól – nie czekajcie na nic i przyjedźcie do uzdrowiskowej Rabki-Zdroju. Teraz nie trzeba cierpieć na jakiekolwiek schorzenie, aby raczyć się leczniczymi wodami mineralnymi i dostojnie spacerować Parkiem Zdrojowym. Równie dobrze można wziąć udział w mistrzostwach w dmuchaniu największego balona z gumy do żucia oraz w jeździe na muszlach klozetowych. Dni możecie spędzać aktywnie, odliczać je wschodami słońca, biegać po górskich szlakach, jeździć na nartach lub (co zalecamy) odpoczywać totalnie: wysypiać się za wszystkie czasy i nadrabiać zaległości w rodzinnym śniadaniowaniu do południa. To jak, skusicie się na nocleg w cieniu Maciejowej, Lubonia Wielkiego i Turbacza?</p>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "page-layout",
});
</script>

<style lang="scss" scoped>
.about-us {
	&__container {
		margin: rem(80) rem(75);
	}

	&__row {
		display: grid;
		grid-template-columns: 1fr 1fr;

		&:nth-child(even) {
			.about-us__text {
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

	&__hosts {
		margin: rem(80) rem(75);
		&__item {
			display: flex;
			align-items: center;
			height: 100%;
			padding: rem(50);

			&__avatar {
				margin-right: rem(40);

				:deep(.p-avatar) {
					width: rem(160);
					height: rem(160);

					img {
						object-fit: cover;
					}
				}
			}

			&__opinion {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			&__name {
				display: block;
				text-align: center;
				margin-top: rem(10);
				margin-left: rem(-8);
				font-family: $font-family-medium;
			}
		}
	}
}

@media (max-width: 965px) {
	.about-us {
		&__container {
			margin: rem(80) rem(5);
		}

		&__row {
			grid-template-columns: 1fr;

			&:nth-child(even) {
				.about-us__image {
					order: 2;
				}
			}
		}

		&__image {
			min-height: 450px;
			max-height: 450px;
		}

		&__hosts {
			margin: rem(80) rem(5);
			&__item {
				flex-direction: column;

				&__avatar {
					margin-right: 0;
				}

				&__name {
					margin-bottom: rem(20);
				}
			}
		}
	}
}
</style>
