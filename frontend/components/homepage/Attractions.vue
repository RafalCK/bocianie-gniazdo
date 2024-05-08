<template>
	<div class="attractions">
		<span class="attractions__header">Atrakcje</span>
		<div class="attractions__container">
			<div class="attractions__item">
				<a
					class="attractions__item__link"
					href="https://namaciejowej.pl"
					target="_blank" />
				<div class="attractions__item__image">
					<div class="attractions__item__image__image">
						<NuxtImg
							src="images/maciejowa.webp"
							height="455" />
					</div>
					<div class="attractions__item__button">
						<span class="attractions__item__button__label">Zobacz</span>
					</div>
				</div>
				<div class="attractions__item__content">
					<span class="attractions__item__name">Maciejowa</span>
				</div>
			</div>
			<div class="attractions__item">
				<a
					class="attractions__item__link"
					href="https://www.facebook.com/parkzdrojowy"
					target="_blank" />
				<div class="attractions__item__image">
					<div class="attractions__item__image__image">
						<NuxtImg
							src="images/park_zdrojowy.jpg"
							height="455" />
					</div>
					<div class="attractions__item__button">
						<span class="attractions__item__button__label">Zobacz</span>
					</div>
				</div>
				<div class="attractions__item__content">
					<span class="attractions__item__name">Park Zdrojowy</span>
				</div>
			</div>
			<div class="attractions__item">
				<a
					class="attractions__item__link"
					href="https://stare-wierchy.pttk.pl"
					target="_blank" />
				<div class="attractions__item__image">
					<div class="attractions__item__image__image">
						<NuxtImg
							src="images/stare_wierchy.jpg"
							height="455" />
					</div>
					<div class="attractions__item__button">
						<span class="attractions__item__button__label">Zobacz</span>
					</div>
				</div>
				<div class="attractions__item__content">
					<span class="attractions__item__name">Stare Wierchy</span>
				</div>
			</div>
			<div class="attractions__item">
				<a
					class="attractions__item__link"
					href="https://rabkoland.pl"
					target="_blank" />
				<div class="attractions__item__image">
					<div class="attractions__item__image__image">
						<NuxtImg
							src="images/rabkoland.jpg"
							height="455" />
					</div>
					<div class="attractions__item__button">
						<span class="attractions__item__button__label">Zobacz</span>
					</div>
				</div>
				<div class="attractions__item__content">
					<span class="attractions__item__name">Rabkoland</span>
				</div>
			</div>
			<div class="attractions__item">
				<a
					class="attractions__item__link"
					href="https://turbacz.net"
					target="_blank" />
				<div class="attractions__item__image">
					<div class="attractions__item__image__image">
						<NuxtImg
							src="images/turbacz.jpg"
							height="455" />
					</div>
					<div class="attractions__item__button">
						<span class="attractions__item__button__label">Zobacz</span>
					</div>
				</div>
				<div class="attractions__item__content">
					<span class="attractions__item__name">Turbacz</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.attractions {
	margin-top: rem(140);
	margin-bottom: rem(92);
	position: relative;
	padding: rem(30) 0 rem(50) 0;

	&::before {
		content: "";
		position: absolute;
		right: 50%;
		left: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		max-width: 100vw;
		width: 100vw;
		height: 100%;
		background: #f4f0ed;
		z-index: -2;
	}

	&__header {
		display: flex;
		justify-content: center;
		font-size: rem(38);
		font-family: $font-family-bold;
		padding-top: rem(40);
		margin-bottom: rem(50);
		text-transform: uppercase;
		text-decoration: underline;
		text-decoration-color: $color-primary;
		text-underline-offset: rem(6);
	}

	&__container {
		display: flex;
		justify-content: space-between;
		gap: rem(20);
	}

	&__item {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 20%;
		&__image {
			display: flex;
			position: relative;
			max-width: rem(400);
			&__image {
				overflow: hidden;
				img {
					transition: transform 2.4s cubic-bezier(0.075, 0.82, 0.165, 1);
				}
			}
		}

		&__link {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 1;
		}

		&__name {
			margin-top: rem(15);
			font-size: rem(22);
			text-transform: uppercase;
		}

		&__button {
			position: absolute;
			bottom: rem(-18);
			display: inline-block;
			position: absolute;
			right: rem(18);
			background: $color-white;
			font-size: rem(16);
			font-weight: $font-weight-bold;
			padding: rem(12) rem(18);

			&__label {
				position: relative;
			}

			&::before {
				content: "";
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				transform: scaleX(0);
				transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
				transform-origin: center right;
				background-color: $color-primary;
			}
		}

		&__content {
			margin-top: rem(30);

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
			.attractions {
				&__item {
					&__image {
						&__image {
							img {
								transform: scale(1.05);
							}
						}
					}
					&__button {
						&__label {
							color: $color-white;
						}
						&::before {
							background: $color-primary;
							transform: scaleX(1);
							transform-origin: center left;
						}
					}

					&__content {
						&::after {
							width: 10%;
						}
					}
				}
			}
		}
	}
}

@media (max-width: 965px) {
	.attractions {
		&__container {
			flex-direction: column;
		}
		&__item {
			width: 100%;
			flex-direction: column-reverse;
			&__image {
				max-width: 100%;
				margin-top: rem(20);
			}
		}
	}
}
</style>
