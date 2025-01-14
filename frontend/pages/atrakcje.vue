<template>
	<div class="attractions">
		<PageHero
			img="images/atrakcje.webp"
			header="Atrakcje"></PageHero>
		<div class="wrapper">
			<div class="attractions__container shadow-2">
				<template
					v-for="(item, index) in attraction"
					:key="item.header">
					<div
						class="attractions__row"
						v-if="index % 2 === 0">
						<div class="attractions__text">
							<span class="attractions__text__header">{{ item.header }}</span>
							<p
								v-if="item.description"
								class="attractions__text__description">
								{{ item.description }}
							</p>
						</div>
						<div class="attractions__image">
							<NuxtImg
								class="attractions__image__image"
								provider="strapi"
								:src="`${item.image.url}`" />
						</div>
					</div>
					<div
						v-else
						class="attractions__row">
						<div class="attractions__image">
							<NuxtImg
								class="attractions__image__image"
								provider="strapi"
								:src="`${item.image.url}`" />
						</div>
						<div class="attractions__text">
							<span class="attractions__text__header">{{ item.header }}</span>
							<p
								v-if="item.description"
								class="attractions__text__description">
								{{ item.description }}
							</p>
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

const { data } = await useAsyncData("attraction", async () => {
	try {
		const response = await find("attraction", { pLevel: "5" });
		return response;
	} catch (err) {
		return null;
	}
});

const attraction = data?.value?.data?.attraction;
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
			font-family: $font-family-cinzel;
			font-weight: 700;
			padding-top: rem(40);
			margin-bottom: rem(50);
			text-transform: uppercase;
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
