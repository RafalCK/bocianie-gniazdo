<template>
	<footer class="footer">
		<div class="footer__top">
			<div class="footer__column">
				<span class="footer__header">Kontakt</span>
				<div
					class="footer__contact"
					v-for="contact in contacts"
					:key="contact.value">
					<a
						:href="contact.link"
						traget="_blank"
						><i
							:class="contact.icon"
							class="mr-2"></i
						><span>{{ contact.value }}</span></a
					>
				</div>
				<div class="footer__bottom__links mt-3">
					<NuxtLink
						v-for="link in links"
						:key="link.label"
						class="footer__bottom__links__link"
						:to="link.url"
						:target="link.blank ? '_blank' : null">
						{{ link.label }}</NuxtLink
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
						v-for="social in socials"
						:key="social.name"
						:href="social.link"
						:target="social.blank ? '_blank' : null"
						class="footer__item">
						<div class="footer__item__icon"><span :class="social.icon"></span></div>
					</a>
				</div>
			</div>
			<div class="footer__column">
				<span class="footer__header">Rezerwacje</span>
				<a
					v-for="partner in partners"
					:key="partner.name"
					:href="partner.link"
					target="_blank"
					class="mt-3 mb-2">
					<NuxtImg
						:src="`images/${partner.logo.data.attributes.name}`"
						height="23" />
				</a>
			</div>
		</div>
	</footer>
	<div class="footer__bottom">
		<span>Wszelkie prawa zastrzeżone © 2024 Bocianie Gniazdo</span>
	</div>
</template>

<script setup lang="ts">
const contacts = inject("contacts");
const socials = inject("socials");
const links = inject("links");
const partners = inject("partners");
</script>

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
