<template>
	<div class="contact">
		<PageHero
			img="images/kontakt.jpg"
			header="Kontakt"></PageHero>
		<div class="wrapper">
			<div class="contact__container">
				<div class="contact__left">
					<div class="contact__form">
						<span class="contact__form__subheader">Potrzebujesz więcej informacji na temat rezerwacji i pobytu w Bocianim Gnieździe? Jesteśmy tu, aby Ci pomóc! Skontaktuj się z nami poprzez telefon lub wypełnij formularz kontaktowy.</span>
						<span class="contact__form__header mt-4"> Zapraszamy do kontaktu </span>
						<div class="contact__form__box">
							<form class="contact__form__form">
								<FloatLabel>
									<InputText
										id="username"
										v-model="name" />
									<label for="username">Imię</label>
								</FloatLabel>
								<FloatLabel>
									<InputText
										id="phone"
										v-model="phone" />
									<label for="username">Telefon</label>
								</FloatLabel>
								<FloatLabel>
									<InputText
										id="email"
										v-model="email" />
									<label for="username">Adres e-mail</label>
								</FloatLabel>
								<FloatLabel>
									<Textarea
										id="message"
										rows="5"
										v-model="message" />
									<label for="username">Wiadomość</label>
								</FloatLabel>
								<div class="contact__form__form__button">
									<Button
										iconPos="right"
										label="Wyślij"
										icon="pi pi-send" />
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="contact__right">
					<div class="contact__info">
						<NuxtLink
							v-for="contact in contacts"
							:key="contact.value"
							:to="contact.url"
							:target="contact.blank ? '_blank' : null"
							class="contact__info__item contact__info__item__phone">
							<div class="contact__info__item__icon"><span :class="contact.iconame"></span></div>
							<span>{{ contact.value }}</span>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<Map />
	</div>
</template>

<script setup lang="ts">
import Map from "~/components/homepage/Map.vue";

definePageMeta({
	layout: "page-layout",
});

const contacts = inject("contacts");

const name = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");
</script>

<style lang="scss" scoped>
.contact {
	&__container {
		display: flex;
		margin: rem(80);
		gap: rem(40);
	}
	&__left {
		flex: 2;
	}
	&__right {
		flex: 1;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__form {
		&__header {
			display: flex;
			justify-content: center;
			text-align: center;
			font-size: rem(38);
			font-family: $font-family-bold;
			margin-bottom: rem(10);
			text-transform: uppercase;
			text-decoration: underline;
			text-decoration-color: $color-primary;
			text-underline-offset: rem(6);
			line-height: 46px;
		}

		&__subheader {
			display: flex;
			justify-content: center;
			text-align: center;
			line-height: 22px;
		}

		&__box {
			background: $color-secondary;
			margin: rem(40) 0;
			padding: rem(50) rem(50) rem(20) rem(50);
		}

		:deep(.p-inputtext) {
			width: 100%;
		}

		:deep(.p-float-label) {
			margin-bottom: rem(40);
		}

		&__form {
			&__button {
				display: flex;
				justify-content: flex-end;
			}
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		gap: rem(10);

		&__item {
			display: flex;
			align-items: center;
			color: $color-text;
			&__icon {
				width: rem(60);
				height: rem(60);
				background-color: $color-primary;
				border-radius: 50%;

				display: flex;
				justify-content: center;
				align-items: center;

				margin: rem(8);
				color: $color-white;
				font-weight: $font-weight-bold;

				:deep(.pi) {
					font-size: rem(26);
				}
			}

			&:hover {
				color: $color-primary;

				.contact__info__item__icon {
					background-color: $color-white;
					color: $color-primary;
				}
			}
		}
	}

	:deep(.map__header) {
		display: none;
	}
}

@media (max-width: 1100px) {
	.contact {
		&__container {
			flex-direction: column;
			margin: rem(32);
		}
		&__left {
			flex: 1;
		}
	}
}
</style>
