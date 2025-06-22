export const useSumService = defineStore("sumService", {
	state: () => ({
		totalPrice: null,
	}),
	actions: {
		updatePrice(num) {
			this.totalPrice = num;
		},
	},
});
