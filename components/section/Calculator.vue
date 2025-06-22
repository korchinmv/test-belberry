<script setup>
	import { useModalStore } from "~/store/useModalStore";
	import { useSumService } from "~/store/useSumService";

	const modalStore = useModalStore();
	const sumServiceStore = useSumService();

	const selectedValues = reactive({
		type: { value: null, label: "" },
		cms: { value: null, label: "" },
		theme: { value: null, label: "" },
		design: { value: null, label: "" },
		service: { value: null, label: "" },
		comment: "",
		checkbox: false,
	});

	const siteTypes = [
		{ value: "5000", label: "Лендинг", id: 1 },
		{ value: "10000", label: "Корпоративный сайт", id: 2 },
		{ value: "15000", label: "Интернет-магазин", id: 3 },
	];

	const cmsTypes = [
		{ value: "5000", label: "WordPress", id: 1 },
		{ value: "10000", label: "1C-Битрикс", id: 2 },
		{ value: "15000", label: "OpenCart", id: 3 },
	];

	const themesTypes = [
		{ value: "5000", label: "Портфолио", id: 1 },
		{ value: "10000", label: "Бизнес", id: 2 },
		{ value: "15000", label: "Электронная коммерция", id: 3 },
	];

	const designsTypes = [
		{ value: "5000", label: "Стандарт", id: 1 },
		{ value: "10000", label: "Профессиональный", id: 2 },
		{ value: "15000", label: "Уникальный", id: 3 },
	];

	const servicesTypes = [
		{ value: "5000", label: "SEO оптимизация", id: 1 },
		{ value: "10000", label: "Контекстная реклама", id: 2 },
		{ value: "15000", label: "Мобильная версия", id: 3 },
	];

	const sumService = computed(() => {
		let totalPrice =
			Number(selectedValues.service.value) +
			Number(selectedValues.design.value) +
			Number(selectedValues.theme.value) +
			Number(selectedValues.cms.value) +
			Number(selectedValues.type.value);

		sumServiceStore.updatePrice(totalPrice);
		return totalPrice;
	});

	const openApplicationModal = () => {
		modalStore.open("application", {
			title: "Осталось совсем немного!",
			text: `Мы рассчитали стоимость вашего сайта, она составила ${sumService.value} рублей. Оставьте контакты, и наш менеджер свяжется с вами в ближайшее время.`,
		});
	};

	const isSubmitDisabled = computed(() => {
		return sumService.value === 0 || !selectedValues.checkbox;
	});
</script>

<template>
	<section class="calculator">
		<div class="container">
			<div class="calculator__wrapper">
				<h2 class="calculator__title">Посчитайте стоимость вашего сайта:</h2>

				<div class="calculator__body">
					<div class="calculator__inputs">
						<FormCustomSelect
							class="calculator__select"
							defaultValue="Тип сайта"
							v-model="selectedValues.type"
							:options="siteTypes"
						/>

						<FormCustomSelect
							class="calculator__select"
							defaultValue="Тип CMS"
							v-model="selectedValues.cms"
							:options="cmsTypes"
						/>

						<FormCustomSelect
							class="calculator__select"
							defaultValue="Тематика сайта"
							v-model="selectedValues.theme"
							:options="themesTypes"
						/>

						<FormCustomSelect
							class="calculator__select"
							defaultValue="Дизайн сайта"
							v-model="selectedValues.design"
							:options="designsTypes"
						/>

						<FormCustomSelect
							class="calculator__select"
							defaultValue="Дополнительные услуги"
							v-model="selectedValues.service"
							:options="servicesTypes"
						/>

						<textarea
							class="calculator__textarea"
							id="calculator__textarea"
							name="calculator__textarea"
							v-model="selectedValues.comment"
							placeholder="Комментарии к проекту"
						></textarea>

						<div class="calculator__cost">
							<p class="calculator__cost-text">Стоимость проекта:</p>

							<div class="calculator__cost-inner">
								<span class="calculator__cost-value">{{ sumService }}</span>

								<p class="calculator__cost-value-text">₽</p>
							</div>
						</div>
					</div>

					<div class="calculator__button">
						<FormButton
							class="calculator__btn"
							text="Связаться с нами"
							:disabled="isSubmitDisabled"
							@click="openApplicationModal"
						/>

						<div class="calculator__policy">
							<FormCustomCheckbox
								class="calculator__policy-checkbox"
								v-model="selectedValues.checkbox"
								:checked="selectedValues.checkbox"
							/>

							<p class="calculator__policy-text">
								Нажимая кнопку, я соглашаюсь с
								<NuxtLink class="calculator__policy-link" to="#"
									>политикой конфиденциальности</NuxtLink
								>
								и даю разрешение на обработку моих персональных данных.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.calculator {
		width: 100%;
		margin-bottom: 107px;

		&__wrapper {
			background-color: var(--text-color);
			padding: 60px;
			border-radius: 20px;
			background-image: url("/img/form/bg.png");
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;

			@media screen and (width <= 768px) {
				padding: 32px 16px;
			}
		}

		&__title {
			font-weight: 600;
			font-size: 44px;
			line-height: 1.2;
			color: var(--white-color);
			margin-bottom: 50px;

			@media screen and (width <= 768px) {
				font-size: 36px;
				margin-bottom: 20px;
			}
		}

		&__inputs {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 64px 160px 64px;
			gap: 20px;
			margin-bottom: 49px;

			@media screen and (width <= 1024px) {
				display: flex;
				flex-direction: column;
				row-gap: 10px;
			}

			@media screen and (width <= 768px) {
				margin-bottom: 24px;
			}
		}

		&__textarea {
			resize: none;
			height: 232px;
			border-radius: 20px 28px;
			padding: 20px;
			background-color: var(--white-color);
			grid-column: 3;
			grid-row: 2;

			&::placeholder {
				font-weight: 500;
				font-size: 16px;
				line-height: 1.2;
				color: var(--text-color);
			}
		}

		&__cost {
			display: flex;
			column-gap: 15px;

			@media screen and (width <= 768px) {
				flex-direction: column;
			}
		}

		&__cost-text {
			font-weight: 400;
			font-size: 24px;
			line-height: 1.2;
			color: var(--white-color);
			align-self: flex-start;

			@media screen and (width <= 768px) {
				margin-bottom: 8px;
			}
		}

		&__cost-inner {
			display: flex;
			column-gap: 10px;
		}

		&__cost-value,
		&__cost-value-text {
			font-weight: 500;
			font-size: 72px;
			line-height: 1;
			color: var(--white-color);
		}

		&__btn {
			margin-bottom: 32px;

			&:disabled {
				opacity: 0.5;
				background-color: var(--gray-color);
				cursor: not-allowed;
			}

			@media screen and (width <= 768px) {
				margin-bottom: 16px;
			}
		}

		&__policy {
			display: flex;
			column-gap: 8px;
		}

		&__policy-text {
			color: #8b8b8b;
			font-weight: 400;
			font-size: 16px;
			line-height: 1.2;

			@media screen and (width <= 768px) {
				margin-bottom: 12px;
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
