export const useMobileMenu = defineStore("mobileMenu", {
	state: () => ({
		isShowMobileMenu: false,
	}),
	actions: {
		toggleMobileMenu() {
			this.isShowMobileMenu = !this.isShowMobileMenu;
		},
		hideMobileMenu() {
			this.isShowMobileMenu = false;
		},
	},
});
