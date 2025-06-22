<script setup>
	import { useModalStore } from "~/store/useModalStore";
	import { storeToRefs } from "pinia";

	const modalStore = useModalStore();
	const { props } = storeToRefs(modalStore);

	const close = () => modalStore.close();
</script>

<template>
	<div class="modal" @click.self="close">
		<div class="container">
			<div class="modal__content">
				<button class="modal__close" @click="close">
					<Icon name="ep:close" size="32" />
				</button>
				<h2 class="modal__title">{{ props.title }}</h2>
				<p class="modal__text">{{ props.text }}</p>

				<form class="modal__form" action="#">
					<slot />

					<FormButton
						type="submit"
						class="modal__button"
						text="Оставить заявку"
					/>

					<div class="modal__policy">
						<FormCustomCheckbox class="modal__policy-checkbox" />

						<p class="modal__policy-text">
							Нажимая кнопку, я соглашаюсь с
							<NuxtLink class="calculator__policy-link" to="#"
								>политикой конфиденциальности</NuxtLink
							>
							и даю разрешение на обработку моих персональных данных.
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
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
			width: 100%;
			position: relative;

			@media screen and (width <= 768px) {
				padding: 24px 20px;
			}
		}

		&__title {
			font-weight: 600;
			font-size: 44px;
			line-height: 1.2;
			text-align: center;
			margin-bottom: 12px;
			color: var(--black-color);

			@media screen and (width <= 768px) {
				font-size: 28px;
			}
		}

		&__text {
			font-weight: 400;
			font-size: 18px;
			line-height: 1.4;
			text-align: center;
			color: var(--black-color);
			margin-bottom: 40px;

			@media screen and (width <= 768px) {
				font-size: 14px;
				margin-bottom: 32px;
			}
		}

		&__close {
			position: absolute;
			top: 24px;
			right: 24px;
			background: none;
			border: none;

			@media screen and (width <= 768px) {
				top: -40px;
				right: 0;

				span {
					color: var(--white-color);
				}
			}
		}

		&__inner {
			display: flex;
			column-gap: 20px;
			margin-bottom: 16px;

			@media screen and (width <= 768px) {
				flex-direction: column;
				row-gap: 8px;
				margin-bottom: 8px;
			}
		}

		&__button {
			margin-bottom: 12px;

			@media screen and (width <= 768px) {
				margin-bottom: 16px;
			}
		}

		&__policy {
			display: flex;
			column-gap: 8px;
		}

		&__policy-text {
			color: var(--gray);
			font-weight: 400;
			font-size: 16px;
			line-height: 1.2;

			@media screen and (width <= 768px) {
				font-size: 12px;
			}
		}

		&__policy-checkbox {
			align-self: flex-start;
		}

		&__policy-link {
			font-weight: 700;
			transition: color 0.3s;

			&:hover {
				color: var(--purple-color);
			}
		}
	}
</style>
