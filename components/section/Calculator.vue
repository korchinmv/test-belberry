<script setup>
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
		{ value: "5000", label: "Лендинг" },
		{ value: "10000", label: "Корпоративный сайт" },
		{ value: "15000", label: "Интернет-магазин" },
	];

	const cmsTypes = [
		{ value: "5000", label: "WordPress" },
		{ value: "10000", label: "1C-Битрикс" },
		{ value: "15000", label: "OpenCart" },
	];

	const themes = [
		{ value: "5000", label: "Портфолио" },
		{ value: "10000", label: "Бизнес" },
		{ value: "15000", label: "Электронная коммерция" },
	];

	const designs = [
		{ value: "5000", label: "Стандарт" },
		{ value: "10000", label: "Профессиональный" },
		{ value: "15000", label: "Уникальный" },
	];

	const services = [
		{ value: "5000", label: "SEO оптимизация" },
		{ value: "10000", label: "Контекстная реклама" },
		{ value: "15000", label: "Мобильная версия" },
	];

	const selectOption = (field, label, value) => {
		selectedValues[field] = {
			label,
			value: Number(value),
		};
	};

	const sumService = computed(() => {
		return Object.values(selectedValues).reduce(
			(total, current) => total + Number(current.value || 0),
			0
		);
	});

	// const formattedSum = computed(() => {
	// 	return sumService.value.toLocaleString("ru-RU");
	// });

	watch(
		selectedValues,
		(newVal) => {
			console.log("Изменения в selectedValues:", newVal);
		},
		{ deep: true }
	);
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
						>
							<div
								v-for="option in siteTypes"
								:key="option.value"
								class="custom-select__option"
								@click="selectedValues.type = option.label"
							>
								{{ option.label }}
							</div>
						</FormCustomSelect>

						<FormCustomSelect
							class="calculator__select"
							defaultValue="Тип CMS"
							v-model="selectedValues.cms"
						>
							<option
								v-for="option in cmsTypes"
								:key="option.value"
								:value="option.value"
								@click="selectedValues.type = option.label"
							>
								{{ option.label }}
							</option>
						</FormCustomSelect>

						<FormCustomSelect
							class="calculator__select"
							defaultValue="Тематика сайта"
							v-model="selectedValues.theme"
						>
							<option
								v-for="option in themes"
								:key="option.value"
								:value="option.value"
								@click="selectedValues.type = option.label"
							>
								{{ option.label }}
							</option>
						</FormCustomSelect>

						<FormCustomSelect
							class="calculator__select"
							defaultValue="Дизайн сайта"
							v-model="selectedValues.design"
						>
							<option
								v-for="option in designs"
								:key="option.value"
								:value="option.value"
								@click="selectedValues.type = option.label"
							>
								{{ option.label }}
							</option>
						</FormCustomSelect>

						<FormCustomSelect
							class="calculator__select"
							defaultValue="Дополнительные услуги"
							v-model="selectedValues.service"
						>
							<option
								v-for="option in services"
								:key="option.value"
								:value="option.value"
								@click="selectedValues.type = option.label"
							>
								{{ option.label }}
							</option>
						</FormCustomSelect>

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
						<FormButton class="calculator__btn" text="Связаться с нами" />

						<div class="calculator__policy">
							<FormCustomCheckbox
								class="calculator__policy-checkbox"
								v-model="selectedValues.policy"
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
			background-image: url("img/form/bg.png");
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
