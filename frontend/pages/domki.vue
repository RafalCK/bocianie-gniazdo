<template>
	<div class="houses">
		<PageHero
			img="images/domki.jpg"
			header="Domki"></PageHero>
		<div class="wrapper">
			<div class="houses__container">
				<span class="houses__header">Gdzie będę spać?</span>
				<div class="houses__item">
					<div
						class="houses__item__image animation-duration-1000 animation-ease-in-out"
						v-animateonscroll="{ enterClass: 'fadeinleft' }">
						<NuxtImg
							src="images/about_us.jpg"
							width="375"
							height="505" />
					</div>
					<div class="houses__item__description">
						<div
							class="houses__item__description__box animation-duration-1000 animation-ease-in-out"
							v-animateonscroll="{ enterClass: 'fadeinright' }">
							<p>W pięknych i komfortowych domkach, w których światło rządzi się prawami natury. Budzi Was ciepło promieni słonecznych, długie cienie kładą się na ścianach i podłodze dodając przytulności, a wieczorami relaksujemy się przy ciepłych zachodach słońca za górami. Warto dostosować się do tego naturalnego rytmu i brać z dni spędzony na szczycie góry co najlepsze.</p>
							<p>W każdym domku znajduje się miejsce dla 6 osób. Na piętrze, na otwartej antresoli znajduje się łóżko dwuosobowe oraz dwa pojedyncze – nie stawialiśmy tam ściany, aby nie ograniczać wspaniałej, otwartej przestrzeni. Na górze znajduje się także siatka, na której można się relaksować i podziwiać wschody i zachody słońca. Na dole domków znajduje się salon z rozkładaną kanapą (dwuosobową), łazienka i aneks kuchenny.</p>
							<p>W domu mamy zasięg i internet, a pod domem zdarza się błoto, więc zapakujcie solidne buty lub kalosze. Wiosną sąsiad zaczyna wypas krów i owiec, więc może dobiec Was cała orkiestra dzwonków. I zapachów. Do domu prowadzi wymagająca droga dojazdowa – auta z bardzo niskim zawieszeniem mogą mieć problem.</p>
						</div>
					</div>
				</div>
				<div class="houses__info">
					<span class="houses__info__header">Podstawowe informacje:</span>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/ludzie.svg"
							height="20" />
						<span class="houses__info__item__name">do 6 osób</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/rozmiar.svg"
							height="15" />
						<span class="houses__info__item__name">35 m²</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/lazienka.svg"
							height="20" />
						<span class="houses__info__item__name">łazienka: 1</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/pojedyncze_lozko.svg"
							height="20" />
						<span class="houses__info__item__name">pojedyncze łóżko: 2</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/kanapa.svg"
							height="20" />
						<span class="houses__info__item__name">kanapa rozkładana: 1</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/podwojne_lozko.svg"
							height="20" />
						<span class="houses__info__item__name">duże łóżko podwójne: 1</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/zwierzeta.svg"
							height="20" />
						<span class="houses__info__item__name"> akceptujemy małe psy, koty, średnie psy</span>
					</div>
					<span class="houses__info__header">Wyposażenie:</span>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/tv.svg"
							height="20" />
						<span class="houses__info__item__name">tv w pokojach</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/klimatyzacja.svg"
							height="20" />
						<span class="houses__info__item__name">klimatyzacja</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/reczniki.svg"
							height="20" />
						<span class="houses__info__item__name">ręczniki</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/posciel.svg"
							height="20" />
						<span class="houses__info__item__name">pościel</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/suszarka.svg"
							height="20" />
						<span class="houses__info__item__name">suszarka</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/mikrofala.svg"
							height="20" />
						<span class="houses__info__item__name">mikrofala</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/kuchenka.svg"
							height="20" />
						<span class="houses__info__item__name">płyta kuchenna</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/zmywarka.svg"
							height="20" />
						<span class="houses__info__item__name">zmywarka</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/sztucce.svg"
							height="20" />
						<span class="houses__info__item__name">naczynia i sztućce</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/kieliszki.svg"
							height="20" />
						<span class="houses__info__item__name">kieliszki</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/patelnia.svg"
							height="20" />
						<span class="houses__info__item__name">patelnie i garczki</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/lodowka.svg"
							height="20" />
						<span class="houses__info__item__name">lodowka</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/srodki.svg"
							height="20" />
						<span class="houses__info__item__name">środki do mycia</span>
					</div>
					<span class="houses__info__header">Udogodnienia:</span>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/wifi.svg"
							height="20" />
						<span class="houses__info__item__name">wifi</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/basen.svg"
							height="20" />
						<span class="houses__info__item__name">basen</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/lezak.svg"
							height="20" />
						<span class="houses__info__item__name">leżaki</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/balia.svg"
							height="16" />
						<span class="houses__info__item__name">balia</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/sauna.svg"
							height="20" />
						<span class="houses__info__item__name">sauna</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/ogrod.svg"
							height="24" />
						<span class="houses__info__item__name">ogród</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/grill.svg"
							height="20" />
						<span class="houses__info__item__name">grill</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/ognisko.svg"
							height="20" />
						<span class="houses__info__item__name">miejsce na ognisko</span>
					</div>
					<div class="houses__info__item">
						<NuxtImg
							src="icons/czyszczenie.svg"
							height="20" />
						<span class="houses__info__item__name">sprzątanie przed przyjazdem</span>
					</div>
				</div>
				<span class="houses__header">Galeria</span>
				<div class="houses__galleria">
					<Galleria
						v-model:activeIndex="activeIndex"
						v-model:visible="displayCustom"
						:value="images"
						:responsiveOptions="responsiveOptions"
						:numVisible="3"
						:circular="true"
						:fullScreen="true"
						:showItemNavigators="true"
						:showThumbnails="false">
						<template #item="slotProps">
							<img
								:src="slotProps.item.itemImageSrc"
								:alt="slotProps.item.alt"
								style="width: 100%; display: block" />
						</template>
						<template #thumbnail="slotProps">
							<img
								:src="slotProps.item.thumbnailImageSrc"
								:alt="slotProps.item.alt"
								style="display: block" />
						</template>
					</Galleria>

					<div
						v-if="images"
						class="houses__galleria__item"
						v-for="(image, index) of images"
						:key="index">
						<img
							:src="image.thumbnailImageSrc"
							:alt="image.alt"
							style="cursor: pointer"
							@click="imageClick(index)" />
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

const images = [
	{
		itemImageSrc: "images/houses/1.jpg",
		thumbnailImageSrc: "images/houses/1.jpg",
		alt: "Zdjęcie w środku domku",
	},
	{
		itemImageSrc: "images/houses/2.jpg",
		thumbnailImageSrc: "images/houses/2.jpg",
		alt: "Zdjęcie w środku domku",
	},
	{
		itemImageSrc: "images/houses/3.jpg",
		thumbnailImageSrc: "images/houses/3.jpg",
		alt: "Zdjęcie w środku domku",
	},
	{
		itemImageSrc: "images/houses/4.jpg",
		thumbnailImageSrc: "images/houses/4.jpg",
		alt: "Zdjęcie w środku domku",
	},
	{
		itemImageSrc: "images/houses/5.jpg",
		thumbnailImageSrc: "images/houses/5.jpg",
		alt: "Zdjęcie w środku domku",
	},
	{
		itemImageSrc: "images/houses/6.jpg",
		thumbnailImageSrc: "images/houses/6.jpg",
		alt: "Zdjęcie w środku domku",
	},
	{
		itemImageSrc: "images/houses/7.jpg",
		thumbnailImageSrc: "images/houses/7.jpg",
		alt: "Zdjęcie w środku domku",
	},
];
const activeIndex = ref(0);
const responsiveOptions = ref([
	{
		breakpoint: "1024px",
		numVisible: 5,
	},
	{
		breakpoint: "768px",
		numVisible: 3,
	},
	{
		breakpoint: "560px",
		numVisible: 1,
	},
]);
const displayCustom = ref(false);

const imageClick = (index) => {
	activeIndex.value = index;
	displayCustom.value = true;
};
</script>

<style lang="scss" scoped>
.houses {
	&__container {
		margin: rem(40) 0 rem(80) 0;
	}
	&__item {
		display: flex;
		align-items: center;
		&__image {
			display: flex;
			position: relative;
			max-width: 100%;
		}

		&__description {
			line-height: 22px;
			&__box {
				position: relative;
				padding: rem(50) rem(40);
				background: $color-secondary;
				margin-left: rem(-20);
			}
		}
	}

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
		text-underline-offset: rem(10);
		line-height: 46px;
	}

	&__info {
		display: flex;
		flex-wrap: wrap;
		gap: rem(20);
		margin-top: rem(60);

		&__header {
			display: block;
			width: 100%;
			margin-top: rem(20);
		}
		&__item {
			display: inline-flex;
			align-items: center;
			gap: rem(6);
		}
	}

	&__galleria {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 1rem;

		&__item {
			max-height: rem(1100);
			&:nth-child(1) {
				grid-column: span 4;
				grid-row: span 2;
			}
			&:nth-child(2),
			&:nth-child(3) {
				grid-column: span 2;
			}
			&:nth-child(4) {
				grid-column: span 4;
			}
			&:nth-child(5) {
				grid-column: span 2;
			}
			&:nth-child(6),
			&:nth-child(7) {
				grid-column: span 3;
			}
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}

@media (max-width: 965px) {
	.houses {
		&__item {
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
	}
}

@media screen and (max-width: 650px) {
	.houses {
		&__galleria {
			display: block;

			&__item {
				margin-bottom: 1rem;
			}
		}
	}
}
</style>
