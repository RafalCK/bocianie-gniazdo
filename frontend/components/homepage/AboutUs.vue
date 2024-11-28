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
					<img :src="`images/${item.image.data.attributes.name}`" />
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
					<img :src="`images/${item.image.data.attributes.name}`" />
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
			min-width: 375px;
			height: 505px;
			&::before {
				content: "";
				position: absolute;
				width: 100%;
				height: 41%;
				left: -31%;
				bottom: 0%;
				background: url("/images/decoration.png");
				background-size: cover;
				transform: rotate(60deg);
			}
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
			min-width: 375px;
			height: 505px;
			&::before {
				content: "";
				position: absolute;
				width: 100%;
				height: 40%;
				right: -39%;
				top: -10%;
				z-index: -2;
				background: url("/images/decoration_2.png");
				background-size: cover;
				transform: rotate(240deg);

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
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
