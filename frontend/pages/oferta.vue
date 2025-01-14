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
						:id="item.anchor"
						v-if="index % 2 === 0">
						<div class="offers__text">
							<span
								class="offers__text__header"
								href="#apartamenty"
								>{{ item.header }}</span
							>
							<p class="offers__text__description">{{ item.description }}</p>
							<div class="offers__button mt-2">
								<NuxtLink
									v-if="item.button"
									:to="item.button.url">
									<Button>
										<span>{{ item.button.label }}</span></Button
									>
								</NuxtLink>
							</div>
						</div>
						<div class="offers__image">
							<NuxtImg
								class="offers__image__image"
								provider="strapi"
								:src="`${item.image.url}`" />
						</div>
					</div>
					<div
						v-else
						class="offers__row"
						:id="item.anchor">
						<div class="offers__image">
							<NuxtImg
								class="offers__image__image"
								provider="strapi"
								:src="`${item.image.url}`" />
						</div>
						<div class="offers__text">
							<span class="offers__text__header">{{ item.header }}</span>
							<p class="offers__text__description">{{ item.description }}</p>
							<div class="offers__button mt-2">
								<NuxtLink
									v-if="item.button"
									:to="item.button.url">
									<Button>
										<span>{{ item.button.label }}</span></Button
									>
								</NuxtLink>
							</div>
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
		const response = await find("offer", { pLevel: "5" });
		return response;
	} catch (err) {
		return null;
	}
});

const offer = data?.value?.data?.offer;
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
			font-family: $font-family-cinzel;
			font-weight: 700;
			padding-top: rem(40);
			margin-bottom: rem(50);
			text-transform: uppercase;
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
		img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
	}
}

@media (max-width: 520px) {
	.offers__text__header {
		font-size: rem(28);
	}
}

@media (max-width: 1300px) {
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
