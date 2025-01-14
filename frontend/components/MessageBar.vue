<template>
	<div class="message-bar">
		<span>Z kodem rabatowym ZIMA dostaniesz -10% na rezerwacje domków lub apartamentów</span>
	</div>
</template>

<script setup lang="ts">
interface Item {
	item: string;
	label: string;
}

const items: Item[] = [
	{ route: "/o-nas", label: "O nas" },
	{ route: "/oferta", label: "Oferta" },
	{ route: "/domki", label: "Domki" },
	{ route: "/apartamenty", label: "Apartamenty" },
	{ route: "/kontakt", label: "Kontakt" },
];
</script>

<style lang="scss" scoped>
.message-bar {
	display: flex;
	padding: 11px 40px 12px 15px;
	position: relative;
	align-items: center;
	background-color: $color-secondary;
	padding: 10px;
	text-align: center;
	justify-content: center;
}
</style>
