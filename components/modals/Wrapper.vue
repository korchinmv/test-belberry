<script setup>
	import { useModalStore } from "~/store/useModalStore";
	const modalStore = useModalStore();

	watch(
		() => modalStore.activeModal,
		(isOpen) => {
			if (isOpen) {
				// Сохраняем текущую позицию скролла
				const scrollY = window.scrollY;
				document.body.classList.add("body-lock");
				document.body.style.top = `-${scrollY}px`;
			} else {
				// Восстанавливаем позицию скролла
				const scrollY = Math.abs(parseInt(document.body.style.top || "0"));
				document.body.classList.remove("body-lock");
				document.body.style.top = "";
				window.scrollTo(0, scrollY);
			}
		},
		{ immediate: true } // Обрабатываем начальное состояние
	);

	// Очистка при размонтировании компонента
	onUnmounted(() => {
		const scrollY = Math.abs(parseInt(document.body.style.top || "0"));
		document.body.classList.remove("body-lock");
		document.body.style.top = "";
		window.scrollTo(0, scrollY);
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
