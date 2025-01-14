<template>
	<header class="header">
		<div class="header__top">
			<div class="header__info">
				<NuxtLink
					v-for="contact in contacts"
					:key="contact.short"
					:to="contact.url"
					:target="contact.blank ? '_blank' : null"
					class="header__info__item">
					<div class="header__info__item__icon"><span :class="contact.iconame"></span></div>
					<span>{{ contact.short }}</span>
				</NuxtLink>
			</div>
			<div class="header__social-media">
				<a
					v-for="social in socials"
					:key="social.name"
					:href="social.link"
					:target="social.blank ? '_blank' : null"
					class="header__info__item">
					<div class="header__info__item__icon"><span :class="social.icon"></span></div>
				</a>
			</div>
		</div>
		<div class="header__bottom">
			<Menu class="header__menu" />
			<div class="header__logo">
				<NuxtLink to="/">
					<NuxtImg
						src="images/bocianie_gniazdo_logo_white.png"
						class="header__logo__logo" />
				</NuxtLink>
			</div>
			<MenuMobile class="header__menu-mobile" />
			<div class="header__reservation">
				<NuxtLink
					class="header__reservation__link"
					to="rezerwacje"
					><span class="pi pi-calendar-plus header__reservation__link__icon"></span>Zarezerwuj</NuxtLink
				>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
const contacts = inject("contacts");
const socials = inject("socials");
</script>

<style lang="scss" scoped>
.header {
	z-index: 1;
	color: $color-white;

	&__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid $color-grey;

		width: 100%;
		height: rem(58);

		padding: 0 rem(10);
	}

	&__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		padding: rem(10) 0;
	}

	&__info {
		display: flex;
		gap: rem(10);

		&__item {
			display: inline-flex;
			align-items: center;
			color: $color-white;

			&__icon {
				width: rem(32);
				height: rem(32);
				background-color: $color-secondary;
				border-radius: 50%;

				display: flex;
				justify-content: center;
				align-items: center;

				margin: rem(8);
				color: $color-black;
				font-weight: $font-weight-bold;
			}

			&:hover {
				color: $color-secondary;

				.header__info__item__icon {
					background-color: $color-white;
					color: $color-text;
				}
			}
		}
	}

	&__menu {
		flex: auto;

		width: 35%;

		&-mobile {
			display: none;
		}
	}

	&__logo {
		display: flex;
		justify-content: center;

		&__logo {
			height: rem(80);
		}
	}

	&__reservation {
		flex: auto;
		width: 35%;
		padding-right: rem(20);

		display: flex;
		justify-content: flex-end;

		&__link {
			font-size: rem(20);
			line-height: 21px;
			padding: rem(10) rem(20);
			font-family: $font-family-bold;
			text-transform: uppercase;

			color: $color-white;
			border: 2px solid $color-secondary;

			transition: 0.3s all ease-in-out;

			&:hover {
				color: $color-text;
				background: $color-secondary;
			}

			&__icon {
				font-weight: $font-weight-bold;
				margin-right: rem(10);
				font-size: rem(18);
			}
		}
	}
}

@media (max-width: 700px) {
	.header {
		margin: 0 !important;
		&__info {
			&__item {
				font-size: rem(14);
				&__email {
					display: none;
				}
			}
		}
		&__top {
			padding: 0;
		}
		&__bottom {
			justify-content: space-between;
		}
		&__social-media {
			display: none;
		}
	}
}

@media (max-width: 1100px) {
	.header {
		margin: 0 rem(12);

		&__info {
			&__item {
				&:nth-child(3) {
					display: none;
				}
				&:nth-child(4) {
					display: none;
				}
			}
		}
		&__menu {
			display: none;
		}
		&__menu-mobile {
			display: block;
		}

		&__reservation {
			display: none;
		}

		&__social-media {
			display: none;
		}
	}
}
</style>
