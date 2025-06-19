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
		"@nuxt/icon",
	],
	googleFonts: {
		families: {
			"Golos+Text": true,
		},
	},
	image: {
		dir: "public/img", // опционально, можно указать базовую директорию
	},
});
