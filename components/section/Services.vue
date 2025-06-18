<script setup></script>

<template>
	<section class="services">
		<div class="container">
			<div class="services__wrapper">
				<ElementTitleSection class="services__title" text="Наши услуги" />

				<ElementSlider class="services__slider">
					<swiper-slide class="slider__item">
						<CardService
							title="Landing page"
							descr="Лендинги с адаптивным дизайном для всех типов устройств"
						/>
					</swiper-slide>
					<swiper-slide class="slider__item">
						<CardService
							title="Внедрение BITRIX24"
							descr="Оформление интерфейсов под устройства"
						/>
					</swiper-slide>
					<swiper-slide class="slider__item">
						<CardService
							title="Интернет-магазин"
							descr="Удобные интерфейсы с фокусом на мобильную версию"
						/>
					</swiper-slide>
					<swiper-slide class="slider__item">
						<CardService
							title="Личный кабинет"
							descr="Интуитивно понятные личные кабинеты"
						/>
					</swiper-slide>
					<swiper-slide class="slider__item">
						<CardService
							title="Техническая поддержка "
							descr="Лендинги с адаптивным дизайном для всех типов устройств"
						/>
					</swiper-slide>
					<swiper-slide class="slider__item">
						<CardService
							title="Сайты на WordPress"
							descr="Оформление интерфейсов под устройства."
						/>
					</swiper-slide>
					<swiper-slide class="slider__item">
						<CardService
							title="Проектирование интерфейса"
							descr="Удобные интерфейсы с фокусом на мобильную версию"
						/>
					</swiper-slide>
				</ElementSlider>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.services {
		width: 100%;
		padding: 80px 0;

		@media screen and (width <= 768px) {
			padding: 60px 0;
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
		}

		&__title {
			margin-bottom: 40px;
			align-self: flex-start;

			@media screen and (width <= 768px) {
				margin-bottom: 24px;
			}
		}

		.service-card {
			@media screen and (width <= 1024px) {
				max-width: 100%;
			}
		}
	}
</style>
