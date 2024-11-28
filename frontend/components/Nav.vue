<template>
	<div class="nav">
		<div class="nav__container">
			<template
				v-for="item in items"
				:key="item.route">
				<NuxtLink
					class="nav__link"
					:to="item.route"
					>{{ item.label }}</NuxtLink
				>
			</template>
			<div class="nav__reservation">
				<NuxtLink
					class="nav__reservation__link"
					to="/rezerwacje"
					><span class="pi pi-calendar-plus nav__reservation__link__icon"></span>Zarezerwuj</NuxtLink
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const items = [
	{ route: "/", label: "Strona główna" },
	{ route: "/o-nas", label: "O nas" },
	{ route: "/oferta", label: "Oferta" },
	{ route: "/domki", label: "Domki" },
	{ route: "/atrakcje", label: "Atrakcje" },
	{ route: "/kontakt", label: "Kontakt" },
];
</script>

<style lang="scss" scoped>
.nav {
	&__link {
		position: relative;
		display: inline-flex;
		padding: 0 rem(15);
		color: $color-white;
		text-transform: uppercase;
		font-family: $font-family-regular;

		&:hover {
			&:after {
				width: 50%;
			}
		}

		&:after {
			width: 0;
			background: $color-primary;
			height: 2px;
			content: "";
			position: absolute;
			margin-top: rem(20);
			display: block;
			transition: all 0.2s ease-in-out;
		}

		&.router-link-active {
			&:after {
				width: 50%;
			}
		}
	}
	&__reservation {
		display: none;
		margin-left: rem(20);
		margin-top: rem(20);

		&__link {
			font-size: rem(20);
			line-height: 21px;
			padding: rem(10) rem(20);
			font-family: $font-family-bold;
			text-transform: uppercase;

			color: $color-white;
			border: 2px solid $color-white;

			transition: 0.3s all ease-in-out;

			&:hover {
				color: $color-primary;
				background: $color-white;
			}

			&__icon {
				font-weight: $font-weight-bold;
				margin-right: rem(10);
				font-size: rem(18);
			}
		}
	}
}
</style>
