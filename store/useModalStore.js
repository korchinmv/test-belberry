export const useModalStore = defineStore("modal", {
	state: () => ({
		activeModal: null,
		modalProps: {},
	}),
	actions: {
		open(modalName, props = {}) {
			this.activeModal = modalName;
			this.modalProps = props;
		},
		close() {
			this.activeModal = null;
			this.modalProps = {};
		},
	},
});
