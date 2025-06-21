<script setup>
	const props = defineProps({
		isOpen: Boolean,
		title: String,
		text: String,
	});

	const emit = defineEmits(["close"]);

	const close = () => {
		emit("close");
	};

	watch(
		() => props.isOpen,
		(val) => {
			document.body.style.overflow = val ? "hidden" : "";
		}
	);
</script>
<template>
	<Teleport to="#modals">
		<Transition name="fade">
			<div v-if="isOpen" class="modal" @click.self="close">
				<Transition name="slide">
					<div class="modal__content">
						<button class="modal__close" @click="close">
							<Icon name="ep:close" size="32" />
						</button>
						<h2 class="modal__title">{{ title }}</h2>
						<p class="modal__text">
							{{ text }}
						</p>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<style lang="scss">
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		backdrop-filter: blur(12px);
		background: rgba(2, 0, 75, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;

		&__content {
			background: var(--white-color);
			padding: 60px;
			border-radius: 20px;
			max-width: 820px;
			width: 90%;
			position: relative;
		}

		&__title {
			font-weight: 600;
			font-size: 44px;
			line-height: 1.2;
			text-align: center;
			margin-bottom: 12px;
			color: var(--black-color);
		}

		&__text {
			font-weight: 400;
			font-size: 18px;
			line-height: 1.4;
			text-align: center;
			color: var(--black-color);
			margin-bottom: 40px;
		}

		&__close {
			position: absolute;
			top: 24px;
			right: 24px;
			background: none;
			border: none;
		}
	}

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
