<template>
	<div>
		<button
			@click="toggleMenu"
			:class="{ open: menuIsOpen }"
			class="menu-button">
			<span
				class="bar"
				:class="{ cross: menuIsOpen }"></span>
			<span
				class="bar"
				:class="{ cross: menuIsOpen }"></span>
			<span
				class="bar"
				:class="{ cross: menuIsOpen }"></span>
		</button>
		<div
			:class="{ open: menuIsOpen }"
			class="menu-mobile__menu">
			<Nav :class="{ active: menuIsOpen }" />
		</div>
	</div>
</template>

<script setup lang="ts">
const menuIsOpen = ref(false);

const route = useRoute();

const toggleMenu = () => {
	menuIsOpen.value = !menuIsOpen.value;
};

watch(
	() => route.path,
	() => {
		menuIsOpen.value = false;
	}
);
</script>

<style lang="scss" scoped>
.menu-button {
	z-index: 1001;
	position: relative;
	background: none;
	border: none;
	cursor: pointer;

	&.open {
		.bar {
			background-color: $color-white;
		}
	}

	.bar {
		display: block;
		width: rem(25);
		height: rem(3);
		background-color: $color-primary;
		margin: rem(5) 0;
		transition: all 0.3s ease;

		&:first-child {
			transform-origin: top left;
		}

		&:nth-child(2) {
			transform-origin: center;
		}

		&:last-child {
			transform-origin: bottom left;
		}

		&.cross {
			&:first-child {
				transform: rotate(47deg) translateY(-1px);
			}

			&:nth-child(2) {
				transform: scale(0);
			}

			&:last-child {
				transform: rotate(-45deg) translateY(0);
			}
		}
	}
}

.menu-mobile {
	&__menu {
		display: flex;
		flex-direction: column;
		margin-top: rem(90);
		background-color: $color-black-500;
		position: absolute;
		top: 60px;
		right: 0;
		width: 100%;

		:deep(.nav) {
			display: unset;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 1000;
			width: 85%;
			height: auto;
			background-color: $color-primary;
			opacity: 0;
			text-align: center;
			transform: translate3d(100%, 0, 0);
			transition: transform 0.4s, opacity 0.2s;

			&.active {
				opacity: 1;
				transform: translateZ(0);
			}

			.nav__container {
				margin-top: rem(90);
			}

			.nav__link {
				display: flex;
				font-size: rem(22);
				width: 85%;
				line-height: 36px;

				&::after {
					background: $color-white;
					bottom: 0;
				}

				&:hover {
					&:after {
						width: 5%;
					}
				}

				&.router-link-active {
					&:after {
						width: 10%;
					}
				}

				&:hover {
					border-top: none;
				}
			}

			.nav__reservation {
				display: flex;
			}
		}
	}
}
</style>
