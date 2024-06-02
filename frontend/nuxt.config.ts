import AnimateOnScroll from "primevue/animateonscroll";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	devtools: { enabled: true },
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
			  @use "@/assets/scss/_fonts.scss" as *;
			  @use "@/assets/scss/_functions.scss" as *;
			  @use "@/assets/scss/_normalize.scss" as *;
			  @use "@/assets/scss/_variables.scss" as *;
			`,
				},
			},
		},
	},
	modules: ["@nuxtjs/strapi", "@nuxt/image", "nuxt-primevue", "@dargmuesli/nuxt-cookie-control"],
	css: ["primevue/resources/themes/lara-light-teal/theme.css", "~/assets/scss/main.scss", "~/assets/scss/primevue.scss", "primeicons/primeicons.css"],
	primevue: {
		components: {
			include: ["Button", "Menubar", "InputText", "Carousel", "Avatar", "Textarea", "FloatLabel", "Galleria"],
		},
		directives: {
			include: ["AnimateOnScroll"],
		},
	},
	image: {
		inject: true,
	},
	strapi: {
		url: process.env.STRAPI_URL || "http://localhost:1337",
		prefix: "/api",
		version: "v4",
		cookie: {},
		cookieName: "strapi_jwt",
	},
	cookieControl: {
		colors: {
			barBackground: "#f4f0ed",
			barButtonHoverColor: "#fff",
			controlButtonBackground: "#14b8a6",
			controlButtonHoverBackground: "#0d9488",
			controlButtonIconColor: "#fff",
			controlButtonIconHoverColor: "#fff",
			barButtonBackground: "#14b8a6",
			barButtonColor: "#fff",
			barButtonHoverBackground: "#14b8a6",
			barTextColor: "#4b5563",
			modalButtonBackground: "#14b8a6",
			modalButtonColor: "#fff",
			modalButtonHoverBackground: "#0d9488",
			modalButtonHoverColor: "#fff",
		},
		closeModalOnClickOutside: true,
		cookies: {
			necessary: [
				{
					id: "n",
					name: {
						pl: "Wymagane cookies",
					},
					targetCookieIds: ["NEC"],
				},
			],
		},
		isIframeBlocked: false,
		locales: ["pl"],
		barPosition: "bottom-left",
	},
});
