<template>
	<div class="about-us">
		<span class="about-us__header">Bocianie Gniazdo</span>
		<div
			v-for="(item, index) in about"
			:key="item.content"
			class="about-us__section">
			<div
				v-if="index % 2 === 0"
				class="about-us__top">
				<div
					class="about-us__top__image animation-duration-1000 animation-ease-in-out"
					v-animateonscroll="{ enterClass: 'fadeinleft' }">
					<NuxtImg
						provider="strapi"
						:src="`${item.image.url}`" />
				</div>
				<div class="about-us__top__description">
					<div
						class="about-us__top__description__box animation-duration-1000 animation-ease-in-out"
						v-animateonscroll="{ enterClass: 'fadeinright' }">
						<p>{{ item.content }}</p>
					</div>
				</div>
			</div>
			<div
				v-else
				class="about-us__bottom">
				<div class="about-us__bottom__description">
					<div
						class="about-us__bottom__description__box animation-duration-1000 animation-ease-in-out"
						v-animateonscroll="{ enterClass: 'fadeinleft' }">
						<p>{{ item.content }}</p>
					</div>
				</div>
				<div
					class="about-us__bottom__image animation-duration-1000 animation-ease-in-out"
					v-animateonscroll="{ enterClass: 'fadeinright' }">
					<NuxtImg
						provider="strapi"
						:src="`${item.image.url}`" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const about = inject("about");
</script>

<style lang="scss" scoped>
.about-us {
	margin-top: rem(90);
	&__header {
		display: flex;
		text-align: center;
		justify-content: center;
		font-size: rem(38);
		font-family: $font-family-cinzel;
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: rem(60);
		text-transform: uppercase;
	}

	&__top {
		display: flex;
		align-items: center;
		&__image {
			display: flex;
			position: relative;
			min-width: 375px;
			height: 505px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
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
	&__bottom {
		display: flex;
		align-items: center;
		margin-top: rem(80);
		&__image {
			display: flex;
			position: relative;
			margin-left: rem(-20);
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

@media (max-width: 410px) {
	.about-us {
		&__top {
			&__image {
				min-width: 50%;
				height: rem(400);
			}
		}
		&__bottom {
			&__image {
				min-width: 50%;
				height: rem(400);
			}
		}
	}
}

@media (max-width: 1200px) {
	.about-us {
		&__top {
			flex-direction: column;

			&__image {
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

				img {
					width: 100%;
				}
			}
		}
	}
}

@media (min-width: 1201px) {
	.about-us {
		&__bottom {
			&__image {
				width: 100%;
				height: 380px;
			}
		}
	}
}
</style>
