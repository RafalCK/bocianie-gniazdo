<template>
	<div class="about-us">
		<PageHero
			img="images/ofert.jpg"
			header="O nas"></PageHero>
		<div class="wrapper">
			<div class="about-us__hosts">
				<div class="about-us__hosts__item">
					<div class="about-us__hosts__item__avatar">
						<Avatar
							:image="`http://localhost:1337${about.image.url}`"
							size="xlarge"
							shape="circle" />
						<span class="about-us__hosts__item__name">Ela i Adrian</span>
					</div>
					<div class="about-us__hosts__item__opinion">
						<p>{{ about.text }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "page-layout",
});

const { find } = useStrapi();

const { data } = await useAsyncData("about-us", async () => {
	try {
		const response = await find("about-us", { pLevel: "5" });
		return response;
	} catch (err) {
		return null;
	}
});

const about = data?.value?.data;
</script>

<style lang="scss" scoped>
.about-us {
	&__container {
		margin: rem(80) rem(75);
	}

	&__row {
		display: grid;
		grid-template-columns: 1fr 1fr;

		&:nth-child(even) {
			.about-us__text {
				background-color: $color-secondary;
			}
		}
	}

	&__text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: rem(40) 15%;

		&__header {
			display: flex;
			justify-content: center;
			text-align: center;
			font-size: rem(38);
			font-family: $font-family-bold;
			padding-top: rem(40);
			margin-bottom: rem(50);
			text-transform: uppercase;
			text-decoration: underline;
			text-decoration-color: $color-secondary;
			text-underline-offset: rem(6);
		}
	}

	&__image {
		display: flex;
		position: relative;
		overflow: hidden;
		min-height: 600px;
		img {
			width: 100%;
			height: auto;
			object-fit: cover;
		}
	}

	&__hosts {
		margin: rem(80) rem(75);
		&__item {
			display: flex;
			align-items: center;
			height: 100%;
			padding: rem(50);

			&__avatar {
				margin-right: rem(40);

				:deep(.p-avatar) {
					width: rem(160);
					height: rem(160);

					img {
						object-fit: cover;
					}
				}
			}

			&__opinion {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			&__name {
				display: block;
				text-align: center;
				margin-top: rem(10);
				margin-left: rem(-8);
				font-family: $font-family-medium;
			}
		}
	}
}

@media (max-width: 965px) {
	.about-us {
		&__container {
			margin: rem(80) rem(5);
		}

		&__row {
			grid-template-columns: 1fr;

			&:nth-child(even) {
				.about-us__image {
					order: 2;
				}
			}
		}

		&__image {
			min-height: 450px;
			max-height: 450px;
		}

		&__hosts {
			margin: rem(80) rem(5);
			&__item {
				flex-direction: column;

				&__avatar {
					margin-right: 0;
				}

				&__name {
					margin-bottom: rem(20);
				}
			}
		}
	}
}
</style>
