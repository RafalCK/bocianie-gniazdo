import AnimateOnScroll from "primevue/animateonscroll";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
				},
			],
		},
	},
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
	css: ["primevue/resources/themes/lara-light-teal/theme.css", "~/assets/scss/main.scss", "~/assets/scss/primevue.scss", "primeicons/primeicons.css"],
	primevue: {
		components: {
			include: ["Button", "Menubar", "InputText", "Carousel", "Avatar", "Textarea", "Checkbox", "FloatLabel", "Galleria"],
		},
		directives: {
			include: ["AnimateOnScroll"],
		},
	},
	image: {
		format: ["webp"],
		strapi: {
			baseURL: "http://localhost:1337/",
		},
	},
	strapi: {
		url: process.env.STRAPI_URL || "http://localhost:1337",
		prefix: "/api",
		version: "v4",
		cookie: {},
		cookieName: "strapi_jwt",
	},
});
