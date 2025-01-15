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
										v-model="username" />
									<label for="username">Imię i nazwisko</label>
								</FloatLabel>
								<FloatLabel>
									<InputText
										id="phone"
										v-model="phone" />
									<label for="phone">Telefon</label>
								</FloatLabel>
								<FloatLabel>
									<InputText
										id="email"
										v-model="email" />
									<label for="email">Adres e-mail</label>
								</FloatLabel>
								<FloatLabel>
									<Textarea
										id="message"
										rows="5"
										v-model="message" />
									<label for="message">Wiadomość</label>
								</FloatLabel>
								<div class="d-flex">
									<Checkbox
										v-model="consent"
										name="consent"
										binary />
									<label
										for="consent"
										class="ml-2"
										>Zaznaczając to pole, wyrażasz zgodę na przetwarzanie Twoich danych osobowych w celu wysyłania wiadomości zgodnie z naszą
										<NuxtLink
											target="_blank"
											to="/polityka-prywatnosci"
											>Polityką Prywatności</NuxtLink
										>.</label
									>
								</div>
								<div class="contact__form__form__button">
									<Button
										iconPos="right"
										label="Wyślij"
										@click="sendEmail"
										:disabled="!consent"
										icon="pi pi-send" />
								</div>
							</form>
							<Message
								v-if="showAlert && alertStatus === 'success'"
								:closable="false"
								variant="simple"
								severity="success"
								class="mb-2"
								>Wiadomość została wysłana</Message
							>
							<Message
								v-if="showAlert && alertStatus === 'error'"
								:closable="false"
								variant="simple"
								severity="error"
								class="mb-2"
								>Niestety nie udało się wysłać wiadomośći. Spórbuj jeszcze raz.</Message
							>
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

const username = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");
const consent = ref(false);
const showAlert = ref(false);
const alertStatus = ref("");

const mail = useMail();

const sendEmail = async () => {
	try {
		await mail.send({
			subject: "Kontakt ze strony internetowej",
			html: `
				<p><strong>Imię i nazwisko:</strong> ${username.value}</p>
				<p><strong>Telefon:</strong> ${phone.value}</p>
				<p><strong>Email:</strong> ${email.value}</p>
				<p><strong>Wiadomość:</strong><br>${message.value}</p>
			`,
		});
		alertStatus.value = "success";
	} catch (error) {
		alertStatus.value = "error";
	} finally {
		username.value = "";
		phone.value = "";
		email.value = "";
		message.value = "";
		consent.value = false;

		showAlert.value = true;
		setTimeout(() => {
			showAlert.value = false;
			alertStatus.value = "";
		}, 5000);
	}
};
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
			font-family: $font-family-cinzel;
			font-weight: 700;
			margin-bottom: rem(10);
			text-transform: uppercase;
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
				margin-top: rem(16);
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
				background-color: $color-white;
				border-radius: 50%;

				display: flex;
				justify-content: center;
				align-items: center;

				margin: rem(8);
				color: $color-text;
				font-weight: $font-weight-bold;

				:deep(.pi) {
					font-size: rem(26);
				}
			}

			&:hover {
				color: $color-black;

				.contact__info__item__icon {
					background-color: $color-secondary;
					color: $color-black;
				}
			}
		}
	}

	:deep(.map__header) {
		display: none;
	}
}

@media (max-width: 480px) {
	.contact__form__box {
		padding: rem(50) rem(20) rem(20) rem(20);
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
