export const useModalStore = defineStore("modal", {
	state: () => ({
		activeModal: null,
		props: {
			title: "",
			text: "",
		},
	}),
	actions: {
		open(modalName, props = {}) {
			this.activeModal = modalName;
			this.props = {
				title: props.title || "",
				text: props.text || "",
			};
		},
		close() {
			this.activeModal = null;
			this.props = {
				title: "",
				text: "",
			};
		},
	},
});
