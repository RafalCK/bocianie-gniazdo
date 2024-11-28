<template>
	<div class="houses">
		<PageHero
			img="images/domki.jpg"
			header="Domki"></PageHero>
		<div class="wrapper">
			<div class="houses__container">
				<span class="houses__header">{{ house.sleep.header }}</span>
				<div class="houses__item">
					<div
						class="houses__item__image animation-duration-1000 animation-ease-in-out"
						v-animateonscroll="{ enterClass: 'fadeinleft' }">
						<NuxtImg
							:src="`images/${house.sleep.image.data.attributes.name}`"
							width="375"
							height="505" />
					</div>
					<div class="houses__item__description">
						<div
							class="houses__item__description__box animation-duration-1000 animation-ease-in-out"
							v-animateonscroll="{ enterClass: 'fadeinright' }">
							<div v-html="house.sleep.description"></div>
						</div>
					</div>
				</div>
				<div class="houses__info">
					<template
						v-for="info in house.info"
						:key="info.header">
						<span class="houses__info__header">{{ info.header }}</span>
						<div
							class="houses__info__item"
							v-for="item in info.items">
							<NuxtImg
								:src="`icons/${item.icon.data.attributes.name}`"
								:height="item.height" />
							<span class="houses__info__item__name">{{ item.value }}</span>
						</div>
					</template>
				</div>
				<span class="houses__header">{{ house.gallery.header }}</span>
				<div class="houses__galleria">
					<Galleria
						v-model:activeIndex="activeIndex"
						v-model:visible="displayCustom"
						:value="house.gallery.images.data"
						:responsiveOptions="responsiveOptions"
						:numVisible="3"
						:circular="true"
						:fullScreen="true"
						:showItemNavigators="true"
						:showThumbnails="false">
						<template #item="slotProps">
							<img
								:src="`images/houses/${slotProps.item.attributes.name}`"
								style="width: 100%; display: block" />
						</template>
						<template #thumbnail="slotProps">
							<img
								:src="`images/houses/${slotProps.item.attributes.name}`"
								style="display: block" />
						</template>
					</Galleria>
					<div
						v-if="house.gallery.images.data"
						class="houses__galleria__item"
						v-for="(image, index) of house.gallery.images.data"
						:key="index">
						<img
							:src="`images/houses/${image.attributes.name}`"
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

const { find } = useStrapi();

const { data } = await useAsyncData("house", async () => {
	try {
		const response = await find("house", { populate: "deep" });
		return response;
	} catch (err) {
		return null;
	}
});

const house = data.value?.data.attributes;

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
