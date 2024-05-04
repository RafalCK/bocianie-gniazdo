<template>
	<footer class="footer">
		<div class="footer__top">
			<div class="footer__column">
				<span class="footer__header">Kontakt</span>
				<div class="footer__contact">
					<a
						href="https://maps.app.goo.gl/WBFB46Thjfnenf8DA"
						traget="_blank"
						><i class="pi pi-map-marker mr-2"></i><span>Olszówka 34-700, Rabka Zdrój</span></a
					>
				</div>
				<div class="footer__contact">
					<a href="tel:+48882806201"><i class="pi pi-phone mr-2"></i><span>+48 789 409 254</span></a>
				</div>
				<div class="footer__contact">
					<a href="mailto:e.bockowska@wp.pl"><i class="pi pi-envelope mr-2"></i><span>bocianiegniazdo@gmail.com</span></a>
				</div>
				<div class="footer__bottom__links mt-3">
					<NuxtLink
						class="footer__bottom__links__link"
						to="polityka-prywatnosci"
						>Polityka prywatnośći</NuxtLink
					>
					<NuxtLink
						class="footer__bottom__links__link"
						to="files/regulamin.pdf"
						target="_blank"
						>Regulamin</NuxtLink
					>
				</div>
			</div>
			<div class="footer__column">
				<div class="footer__logo">
					<NuxtLink to="/"
						><NuxtImg
							src="images/bocianie_gniazdo_logo.png"
							height="80"
					/></NuxtLink>
				</div>
				<div class="footer__social-media">
					<a
						href="https://www.facebook.com/bocianiegniazdorabka"
						target="_blank"
						class="footer__item">
						<div class="footer__item__icon"><span class="pi pi-facebook"></span></div>
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/bocianiegniazdowrabce"
						class="footer__item">
						<div class="footer__item__icon"><span class="pi pi-instagram"></span></div>
					</a>
					<a
						target="_blank"
						href="https://www.tiktok.com/@bocianie.gniazdo.rabka"
						class="footer__item">
						<div class="footer__item__icon"><span class="pi pi-tiktok"></span></div>
					</a>
				</div>
			</div>
			<div class="footer__column">
				<span class="footer__header">Rezerwacje</span>
				<a
					target="_blank"
					class="mt-3 mb-2"
					href="https://www.booking.com/hotel/pl/bocianie-gniazdo-w-rabce.pl.html"
					><NuxtImg
						src="images/slowhop.svg"
						height="23"
				/></a>
				<a
					target="_blank"
					class="mt-3 mb-2"
					href="https://slowhop.com/pl/miejsca/2133-bocianie-gniazdo-w-rabce.html"
					><NuxtImg
						src="images/booking.svg"
						height="20"
				/></a>
			</div>
		</div>
	</footer>
	<div class="footer__bottom">
		<span>Wszelkie prawa zastrzeżone © 2024 Bocianie Gniazdo</span>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
	background: $color-secondary;

	width: 100%;
	max-width: 100%;
	padding: rem(60) 15%;
	margin-right: auto;
	margin-left: auto;

	&__top {
		display: flex;
	}

	&__column {
		flex: 1 1 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__bottom {
		display: flex;
		justify-content: center;
		align-items: center;
		border-top: 1px solid $color-black;
		background: $color-secondary;
		padding: rem(15) rem(30);

		&__links {
			display: flex;
			gap: rem(20);

			&__link {
				color: $color-text;

				&:hover {
					color: $color-primary;
				}
			}
		}
	}

	&__header {
		font-family: $font-family-regular;
		display: block;
		font-size: rem(20);
		margin-bottom: rem(20);
	}

	&__contact {
		line-height: 30px;

		a {
			color: $color-text;

			&:hover {
				color: $color-primary;
			}
		}
	}

	&__item {
		display: inline-flex;
		align-items: center;
		&__icon {
			width: rem(32);
			height: rem(32);
			background-color: $color-primary;
			border-radius: 50%;

			display: flex;
			justify-content: center;
			align-items: center;

			margin: rem(8);
			color: $color-white;
			font-weight: $font-weight-bold;
		}

		&:hover {
			color: $color-primary;

			.footer__item__icon {
				background-color: $color-white;
				color: $color-primary;
			}
		}
	}
}

@media (max-width: 660px) {
	.footer {
		&__top {
			flex-direction: column;
			gap: rem(30);
		}
	}
}
</style>
