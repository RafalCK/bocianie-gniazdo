<template>
	<div class="offer">
		<span class="offer__header">Oferta</span>
		<div class="offer__container">
			<NuxtLink
				to="oferta"
				class="offer__image">
				<NuxtImg
					class="offer__image__image"
					src="images/bocianie_gniazdo_led.jpg" />
				<span class="offer__image__name">Bocianie gniazdo</span>
			</NuxtLink>
			<!-- <div class="offer__image">
				<NuxtImg
					class="offer__image__image"
					src="images/apartments.jpg" />
				<span class="offer__image__name">Apartamenty</span>
			</div> -->
			<NuxtLink
				to="oferta"
				class="offer__image">
				<NuxtImg
					class="offer__image__image"
					src="images/homes.jpg" />
				<span class="offer__image__name">Domki</span>
			</NuxtLink>
			<NuxtLink
				to="oferta"
				class="offer__image">
				<NuxtImg
					class="offer__image__image"
					src="images/imprezy.jpg" />
				<span class="offer__image__name">Imprezy okolicznościowe</span>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.offer {
	margin-top: rem(92);
	margin-bottom: rem(120);

	&__header {
		display: flex;
		justify-content: center;
		font-size: rem(38);
		font-family: $font-family-bold;
		margin-bottom: rem(50);
		text-transform: uppercase;
		text-decoration: underline;
		text-decoration-color: $color-primary;
		text-underline-offset: rem(6);
	}

	&__container {
		display: flex;
		align-items: center;
		align-content: space-around;
		gap: rem(20);
	}

	&__image {
		position: relative;
		width: 33%;
		height: rem(505);
		padding: rem(20);
		cursor: pointer;
		transition: width 0.5s ease;

		&__image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: all 0.5s ease;
		}

		&__name {
			position: absolute;
			bottom: rem(-60);
			display: block;
			color: $color-text;
			width: 100%;
			padding-top: rem(26);
			text-transform: uppercase;
			font-size: rem(22);

			&::after {
				width: 0;
				background: $color-primary;
				height: 2px;
				content: "";
				position: absolute;
				margin-top: rem(5);
				display: block;
				transition: all 0.2s ease-in-out;
			}
		}

		&:hover {
			width: 66%;
			.offer {
				&__image {
					&__image {
					}
					&__name {
						&::after {
							width: 10%;
						}
					}
				}
			}
			.offer__image__image {
				filter: brightness(0.7);
			}
		}
	}
}

@media (max-width: 965px) {
	.offer {
		margin-bottom: 0;

		&__container {
			flex-direction: column;
		}

		&__image {
			width: 100%;
			height: rem(200);
			margin-bottom: rem(60);

			&:hover {
				width: 85%;
			}
		}
	}
}
</style>
