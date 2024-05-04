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
	modules: ["@nuxtjs/strapi", "@nuxt/image", "nuxt-primevue"],
	css: ["primevue/resources/themes/lara-light-teal/theme.css", "primevue/resources/primevue.css", "primeicons/primeicons.css", "~/assets/scss/main.scss"],
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
});
