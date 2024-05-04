<template>
	<div class="privacy-policy">
		<PageHero
			img="images/hero_1.jpg"
			header="Polityka Prywatności"></PageHero>
		<div class="wrapper">
			<div class="privacy-policy__container">
				<div class="privacy-policy__content">Tu będzie polityka prywatnośći</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.privacy-policy {
	&__container {
		margin: rem(40) 0 rem(80) 0;
	}
	&__content {
		padding-bottom: rem(200);
	}
}
</style>
