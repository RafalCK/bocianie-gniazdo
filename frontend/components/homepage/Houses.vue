<template>
	<div class="houses">
		<div class="houses__container">
			<div
				class="houses__description animation-duration-1000 animation-ease-in-out"
				v-animateonscroll="{ enterClass: 'fadeinleft' }">
				<span class="houses__description__header">Domki</span>
				<p>{{ houses.content }}</p>
				<div class="houses__description__button">
					<NuxtLink :to="houses.button.url">
						<Button
							iconPos="right"
							:label="houses.button.label"
							icon="pi pi-arrow-right" />
					</NuxtLink>
				</div>
			</div>
			<div
				class="houses__image animation-duration-1000 animation-ease-in-out"
				v-animateonscroll="{ enterClass: 'fadeinright' }">
				<NuxtImg
					class="houses__image-one"
					:src="`images/${houses.imageOne.data.attributes.name}`"
					height="505" />
				<NuxtImg
					class="houses__image-second"
					:src="`images/${houses.imageTwo.data.attributes.name}`"
					height="260" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const houses = inject("houses");
</script>

<style lang="scss" scoped>
.houses {
	position: relative;
	margin-top: rem(92);
	margin-bottom: rem(180);
	padding: rem(30) 0 rem(100) 0;

	&__container {
		display: flex;
		margin-top: rem(50);
	}

	&__image {
		max-height: rem(522);
	}

	&__image-second {
		width: 300px;
		height: 260px;
		margin-top: -6rem;
		transform: translateX(10rem);
		border: solid 8px #fff;
	}

	&__description {
		padding: rem(50) rem(40);
		line-height: 22px;

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

		&__button {
			display: flex;
			justify-content: flex-end;
			margin-top: rem(55);
		}
	}
}

@media (max-width: 1260px) {
	.houses {
		margin-top: 0;
		margin-bottom: rem(20);
		padding: rem(30) 0 0 0;
		&__container {
			flex-direction: column-reverse;
		}
		&__image {
			display: flex;
			justify-content: center;
			&-one {
				width: 100%;
				max-width: rem(400);
				height: auto;
			}

			&-second {
				display: none;
			}
		}
	}
}

@media (min-width: 1261px) and (max-width: 1680px) {
	.houses {
		margin-bottom: rem(20);
		padding: rem(30) 0 rem(0) 0;
	}
}
</style>
