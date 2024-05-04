<template>
	<div class="about-us">
		<span class="about-us__header">Bocianie Gniazdo</span>
		<div class="about-us__top">
			<div
				class="about-us__top__image animation-duration-1000 animation-ease-in-out"
				v-animateonscroll="{ enterClass: 'fadeinleft' }">
				<NuxtImg
					src="images/hero_4.jpg"
					width="375"
					height="505" />
			</div>
			<div class="about-us__top__description">
				<div
					class="about-us__top__description__box animation-duration-1000 animation-ease-in-out"
					v-animateonscroll="{ enterClass: 'fadeinright' }">
					<p>Dzień dobry z Kotliny Rabczańskiej! Ulokowaliśmy się na szczycie góry pomiędzy Gorcami i Beskidem Wyspowym, z której mamy genialny widok na wchodzące i zachodzące za pasmem szczytów słońce. Zazwyczaj poranną kawę pijemy z termosu na szlaku na Maciejową, przegryzamy ją racuchami ze schroniska i potem zbiegamy na obiad w Rabce. Wieczorami rozpalamy palenisko pod balią z gorącą wodą i ognisko, przy którym pieczemy kiełbasy, gotujemy grzybową i zakopujemy w żarze ziemniaki.</p>
				</div>
			</div>
		</div>
		<div class="about-us__bottom">
			<div class="about-us__bottom__description">
				<div
					class="about-us__bottom__description__box animation-duration-1000 animation-ease-in-out"
					v-animateonscroll="{ enterClass: 'fadeinleft' }">
					<p>Jeżeli tęsknicie za wiatrem pachnącym sosnowym lasem, śniegiem po pas, spacerami wśród łąk, hal i pól – nie czekajcie na nic i przyjedźcie do uzdrowiskowej Rabki-Zdroju. Teraz nie trzeba cierpieć na jakiekolwiek schorzenie, aby raczyć się leczniczymi wodami mineralnymi i dostojnie spacerować Parkiem Zdrojowym. Równie dobrze można wziąć udział w mistrzostwach w dmuchaniu największego balona z gumy do żucia oraz w jeździe na muszlach klozetowych. Dni możecie spędzać aktywnie, odliczać je wschodami słońca, biegać po górskich szlakach, jeździć na nartach lub (co zalecamy) odpoczywać totalnie: wysypiać się za wszystkie czasy i nadrabiać zaległości w rodzinnym śniadaniowaniu do południa. To jak, skusicie się na nocleg w cieniu Maciejowej, Lubonia Wielkiego i Turbacza?</p>
				</div>
			</div>
			<div
				class="about-us__bottom__image animation-duration-1000 animation-ease-in-out"
				v-animateonscroll="{ enterClass: 'fadeinright' }">
				<NuxtImg
					src="images/about_us_2.jpg"
					width="375"
					height="505" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about-us {
	margin-top: rem(90);
	&__header {
		display: flex;
		text-align: center;
		justify-content: center;
		font-size: rem(38);
		font-family: $font-family-bold;
		margin-bottom: rem(60);
		text-transform: uppercase;
		text-decoration: underline;
		text-decoration-color: $color-primary;
		text-underline-offset: rem(6);
	}

	&__top {
		display: flex;
		align-items: center;
		&__image {
			display: flex;
			position: relative;
			max-width: 100%;
			&::before {
				content: "";
				position: absolute;
				width: 100%;
				height: 41%;
				left: -31%;
				bottom: 0%;
				background: url("~/public/images/decoration.png");
				background-size: cover;
				transform: rotate(60deg);
			}
		}

		&__description {
			line-height: 22px;
			&__box {
				position: relative;
				padding: rem(50) rem(40);
				background: $color-primary;
				margin-left: rem(-20);
				color: white;
			}
		}
	}
	&__bottom {
		display: flex;
		align-items: center;
		margin-top: rem(80);
		&__image {
			display: flex;
			position: relative;
			margin-left: rem(-20);
			max-width: 100%;
			&::before {
				content: "";
				position: absolute;
				width: 100%;
				height: 40%;
				right: -39%;
				top: -10%;
				z-index: -2;
				background: url("~/public/images/decoration_2.png");
				background-size: cover;
				transform: rotate(240deg);
			}
		}

		&__description {
			position: relative;
			line-height: 22px;
			z-index: -3;
			&__box {
				z-index: 1;
				padding: rem(50) rem(40);
				background: #f4f0ed;
			}
		}
	}
}

@media (max-width: 965px) {
	.about-us {
		&__top {
			flex-direction: column;

			&__image {
				&::before {
					content: none;
				}

				img {
					width: 100%;
				}
			}

			&__description {
				&__box {
					margin-left: 0;
				}
			}
		}

		&__bottom {
			flex-direction: column-reverse;

			&__image {
				margin-left: 0;
				&::before {
					content: none;
				}

				img {
					width: 100%;
				}
			}
		}
	}
}
</style>
