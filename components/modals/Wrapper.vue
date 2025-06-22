<script setup>
	import { useModalStore } from "~/store/useModalStore";
	const modalStore = useModalStore();

	// watch(
	// 	() => modalStore.activeModal,
	// 	(isOpen) => {
	// 		document.body.style.overflow = isOpen ? "hidden" : "";
	// 	}
	// );

	// onUnmounted(() => {
	// 	document.body.style.overflow = "";
	// });
</script>

<template>
	<Teleport to="#modals">
		<Transition name="fade">
			<ModalsApplicationModal v-if="modalStore.activeModal === 'application'">
				<div class="modal__inner">
					<FormInput labelName="Имя" inputName="name" />
					<FormInput labelName="Телефон" inputName="phone" />
				</div>
			</ModalsApplicationModal>
		</Transition>
	</Teleport>
</template>

<style lang="scss">
	/* Анимации */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: transform 0.3s;
	}

	.slide-enter-from {
		transform: translateY(-50px);
	}

	.slide-leave-to {
		transform: translateY(50px);
	}
</style>
