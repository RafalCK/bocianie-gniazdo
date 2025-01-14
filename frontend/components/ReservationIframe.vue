<template>
	<iframe
		ref="iframe"
		class="hero__reservation"
		id="ra-reservation-form-v2-05b4d33f48fb8d8f53d84c5fc84f588d"
		style="width: 100%; height: 100px; border: none; padding: 0"
		src="https://roomadmin.pl/widget/reservation-v2/start?fh=bab2be9f63ca5163289900a1f2560584e7040979&style=%7B%22color_accent%22%3A%22%234b5563%22%2C%22color_bg%22%3A%22transparent%22%2C%22color_panel_header%22%3A%22%transparetn%22%2C%22color_panel_body%22%3A%22%23FFFFFF%22%2C%22rounded_corners%22%3Atrue%7D&filter=%7B%7D&lang=pl
"></iframe>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const iframe = ref(null);

onMounted(() => {
	const raMessageReceiver = (event) => {
		if (iframe.value) {
			if (!event.data.sender || "reservation-form-05b4d33f48fb8d8f53d84c5fc84f588d" !== event.data.sender) {
				return;
			}
			if (event.data.height) {
				iframe.value.style.height = event.data.height + 10 + "px";
			}
			if (event.data.event && event.data.event.name === "widget.scrollup.requested") {
				try {
					iframe.value.scrollIntoView({ behavior: "smooth", block: "start" });
				} catch (e) {}
			}
			if (event.data.event && event.data.event.name === "reservation.submit.success") {
				let moneyTotal = event.data.event.data.reservation.moneyTotal;
				let id = event.data.event.data.reservation.id;
			}
			if (event.data.event && event.data.event.name === "reservation.variant-search.start") {
			}
		}
	};

	window.addEventListener("message", raMessageReceiver, false);

	function setup() {
		try {
			iframe.value.contentWindow.postMessage(
				{
					location: window.location.toString(),
					setup: {
						autoHeight: true,
						senderName: "reservation-form-05b4d33f48fb8d8f53d84c5fc84f588d",
					},
				},
				"*"
			);
		} catch (e) {
			console.error(e);
		}
	}

	setInterval(setup, 1000);
	iframe.value.addEventListener("load", setup);
});
</script>

<style lang="scss" scoped></style>
