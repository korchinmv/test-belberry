<script setup>
	import { useModalStore } from "~/store/useModalStore";
	const modalStore = useModalStore();

	watch(
		() => modalStore.activeModal,
		(isOpen) => {
			document.body.style.overflow = isOpen ? "hidden" : "";
		}
	);

	onUnmounted(() => {
		document.body.style.overflow = "";
	});
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
