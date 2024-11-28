<template>
	<div class="offers">
		<PageHero
			img="images/hero_1.jpg"
			header="Oferta"></PageHero>
		<div class="wrapper">
			<div class="offers__container shadow-2">
				<template
					v-for="(item, index) in offer"
					:key="item.header">
					<div
						class="offers__row"
						v-if="index % 2 === 0">
						<div class="offers__text">
							<span class="offers__text__header">{{ item.header }}</span>
							<p class="offers__text__description">{{ item.content }}</p>
						</div>
						<div class="offers__image">
							<NuxtImg
								class="offers__image__image"
								:src="`images/${item.image.data.attributes.name}`" />
						</div>
					</div>
					<div
						v-else
						class="offers__row">
						<div class="offers__image">
							<NuxtImg
								class="offers__image__image"
								:src="`images/${item.image.data.attributes.name}`" />
						</div>
						<div class="offers__text">
							<span class="offers__text__header">{{ item.header }}</span>
							<p class="offers__text__description">{{ item.content }}</p>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "page-layout",
});

const { find } = useStrapi();

const { data } = await useAsyncData("offer", async () => {
	try {
		const response = await find("offer", { populate: "deep" });
		return response;
	} catch (err) {
		return null;
	}
});

const offer = data.value?.data.attributes.offer;
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

			&.cinzel {
				font-family: "Cinzel", serif;
			}

			&.prompt {
				font-family: "Prompt", sans-serif;
			}

			&.urbanist {
				font-family: "Urbanist", sans-serif;
			}

			&.playfair {
				font-family: "Playfair Display SC", serif;
			}
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
