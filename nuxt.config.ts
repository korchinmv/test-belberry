// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	css: ["~/assets/scss/main.scss"],
	modules: [
		"nuxt-swiper",
		"@pinia/nuxt",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
	],
	googleFonts: {
		families: {
			"Open+Sans": true,
			Ubuntu: true,
		},
	},
	image: {
		dir: "public",
		inject: true,
		quality: 80,
	},
});
