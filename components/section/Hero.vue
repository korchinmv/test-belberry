<script setup></script>

<template>
	<section class="hero">
		<div class="container">
			<div class="hero__wrapper">
				<div class="hero__left">
					<span class="hero__sub-title">digital creative agency</span>
					<h1 class="hero__title">Создание и продвижение сайтов</h1>

					<div class="hero__projects-link-wrap">
						<NuxtLink class="hero__projects-link" to="#">
							<ul class="hero__projects-list">
								<li class="hero__projects-list-item">
									<img
										class="hero__projects-img"
										src="/img/projects/1.jpg"
										alt="Проект"
									/>
								</li>
								<li class="hero__projects-list-item">
									<img
										class="hero__projects-img"
										src="/img/projects/2.jpg"
										alt="Проект"
									/>
								</li>
								<li class="hero__projects-list-item">
									<img
										class="hero__projects-img"
										src="/img/projects/3.jpg"
										alt="Проект"
									/>
								</li>
								<li class="hero__projects-list-item">
									<img
										class="hero__projects-img"
										src="/img/projects/4.jpg"
										alt="Проект"
									/>
								</li>
								<li class="hero__projects-list-item">
									<img
										class="hero__projects-img"
										src="/img/projects/5.jpg"
										alt="Проект"
									/>
								</li>
							</ul>

							<span class="hero__projects-name">Наши проекты</span>
						</NuxtLink>

						<div class="hero__projects-inner">
							<NuxtLink class="hero__projects-link-mobile" to="#"
								>Наши проекты</NuxtLink
							>
							<div class="hero__projects-arrow">
								<Icon
									class="arrow-right"
									size="20"
									name="meteor-icons:arrow-up-right"
								/>
							</div>
						</div>
					</div>

					<div class="hero__projects-mobile">
						<NuxtLink class="hero__projects-mobile-link" to="#">
							Наши проекты
						</NuxtLink>

						<div class="hero__projects-mobile-arrow">
							<Icon
								class="arrow-right"
								size="20"
								name="meteor-icons:arrow-up-right"
							/>
						</div>
					</div>
				</div>

				<div class="hero__right">
					<div class="hero__right-descr">
						техподдержка сайта <br />
						на 30 дней — в подарок
					</div>

					<div class="hero__right-bot">
						<div class="hero__right-our-price">ваша цена</div>
						<span class="hero__right-num">320 000 ₽</span>

						<div class="hero__right-inner">
							<span class="hero__right-text"
								>Топ-10 самых креативных разработчиков сайтов в России</span
							>

							<button class="hero__right-btn primary-button">
								<i class="primary-button__icon-wrap">
									<Icon
										class="primary-button__icon"
										name="meteor-icons:arrow-right"
										size="20"
								/></i>
								<span class="primary-button__text">Заказать</span>
							</button>
						</div>
					</div>

					<img
						class="hero__right-flower"
						src="/img/hero/flower.png"
						alt="Цветок"
					/>

					<img
						class="hero__right-flower-mobile"
						src="/img/hero/flower-mobile.png"
						alt="Цветок"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.hero {
		width: 100%;

		&__wrapper {
			display: flex;
			justify-content: space-between;
			column-gap: 20px;

			@media screen and (width <= 1312px) {
				flex-direction: column;
			}
		}

		&__left {
			background: linear-gradient(124deg, #0804a1 0%, #9278fa 100%);
			border-radius: 20px;
			padding: 60px;
			max-width: 847px;
			width: 100%;

			@media screen and (width <= 1312px) {
				max-width: 100%;
				margin-bottom: 19px;
			}

			@media screen and (width <= 768px) {
				padding: 30px;
			}
		}

		&__sub-title {
			font-weight: 400;
			font-size: 20px;
			color: var(--white-color);
			margin-bottom: 16px;
			display: block;

			@media screen and (width <= 768px) {
				font-size: 18px;
				margin-bottom: 20px;
			}
		}

		&__title {
			font-weight: 500;
			font-size: 68px;
			line-height: 1.2;
			text-transform: uppercase;
			margin-bottom: 60px;
			color: var(--white-color);

			@media screen and (width <= 1024px) {
				font-size: 48px;
				margin-bottom: 40px;
			}

			@media screen and (width <= 768px) {
				font-size: 34px;
			}

			@media screen and (width <= 576px) {
				font-size: 24px;
			}
		}

		&__projects-link-wrap {
			position: relative;
			width: 728px;
		}

		&__projects-link {
			display: flex;
			padding: 10px;
			width: 728px;
			height: 132px;
			overflow: visible;
			background-color: var(--white-color);
			-webkit-mask: url('data:image/svg+xml;utf8,<svg width="728" height="132" viewBox="0 0 728 132" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M676 0C682.627 0 688 5.37258 688 12V16C688 27.0457 696.954 36 708 36H716C722.627 36 728 41.3726 728 48V120C728 126.627 722.627 132 716 132H12C5.3726 132 0 126.627 0 120V12C0 5.37258 5.37258 0 12 0H676Z M700,60 L728,66 L700,72 Z" fill="black"/></svg>')
				center / cover;
			mask: url('data:image/svg+xml;utf8,<svg width="728" height="132" viewBox="0 0 728 132" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M676 0C682.627 0 688 5.37258 688 12V16C688 27.0457 696.954 36 708 36H716C722.627 36 728 41.3726 728 48V120C728 126.627 722.627 132 716 132H12C5.3726 132 0 126.627 0 120V12C0 5.37258 5.37258 0 12 0H676Z M700,60 L728,66 L700,72 Z" fill="black"/></svg>')
				center / cover;

			@media screen and (width <= 880px) {
				display: none;
			}
		}

		&__projects-link-mobile {
			display: none;
			color: var(--blue-color);
			font-weight: 600;
			font-size: 16px;
			border-radius: 30px;
			background-color: var(--white-color);
			padding: 13px 48px;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: var(--yellow-color);
			}

			@media screen and (width <= 880px) {
				display: block;
			}
		}

		&__projects-list {
			display: flex;
			column-gap: 12px;
			margin-right: 19px;
		}

		&__projects-name {
			font-weight: 600;
			font-size: 16px;
			line-height: 1.2;
			color: var(--black-color);
			display: block;
			align-self: end;
		}

		&__projects-img {
			object-fit: cover;
			height: 100%;
			border-radius: 8px;
		}

		&__projects-inner {
			display: flex;
			column-gap: 2px;
			align-items: center;
		}

		&__projects-arrow {
			width: 32px;
			height: 32px;
			background-color: var(--yellow-color);
			border-radius: 50%;
			position: absolute;
			top: 15px;
			right: 2px;
			transform: translateY(-50%);
			transition: transform 0.3s ease;
			z-index: 2;
			display: flex;
			align-items: center;
			justify-content: center;

			@media screen and (width <= 880px) {
				position: static;
				width: 45px;
				height: 45px;
				transform: translateY(0);
			}
		}

		&__projects-mobile {
			display: none;
		}

		&__right {
			max-width: 413px;
			width: 100%;
			flex-shrink: 0;
			background-image: url("img/hero/right-card-bg.png");
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			border-radius: 20px;
			position: relative;
			overflow: visible;
			padding: 53px 8px 8px 8px;
			display: flex;
			flex-direction: column;

			@media screen and (width <= 1312px) {
				max-width: 100%;
				padding: 30px;
			}
		}

		&__right-flower {
			max-width: 577px;
			height: 600px;
			position: absolute;
			bottom: 0;
			right: 0;
			object-fit: cover;
			z-index: 1;

			@media screen and (width <= 1312px) {
				max-width: 350px;
				height: 346px;
			}
			@media screen and (width <= 768px) {
				display: none;
			}
		}

		&__right-flower-mobile {
			display: none;
			width: 400px;
			height: 346px;
			position: absolute;
			bottom: 0;
			right: -12px;
			object-fit: cover;
			z-index: 1;

			@media screen and (width <= 768px) {
				display: block;
			}
		}

		&__right-descr {
			font-weight: 400;
			font-size: 16px;
			color: var(--yellow-color);
			max-width: 190px;
			align-self: flex-end;
			text-align: right;
			position: relative;
			z-index: 2;

			@media screen and (width <= 1312px) {
				align-self: flex-start;
			}

			@media screen and (width <= 768px) {
				display: none;
			}
		}

		&__right-bot {
			margin-top: auto;
			position: relative;
			z-index: 2;
		}

		&__right-num {
			font-weight: 600;
			font-size: 72px;
			color: var(--white-color);
			text-align: center;
			width: 100%;
			display: block;
			margin-bottom: 14px;

			@media screen and (width <= 1024px) {
				font-size: 58px;
			}
			@media screen and (width <= 768px) {
				font-size: 38px;
				text-align: start;
			}
			@media screen and (width <= 576px) {
				font-size: 36px;
			}
		}

		&__right-inner {
			display: flex;

			@media screen and (width <= 1312px) {
				flex-direction: column;
			}
		}

		&__right-text {
			font-weight: 600;
			font-size: 14px;
			line-height: 1.2;
			max-width: 244px;
			align-self: flex-end;
			margin-right: 15px;

			@media screen and (width <= 1312px) {
				margin-right: 0;
				align-self: flex-start;
				margin-bottom: 10px;
			}
			@media screen and (width <= 768px) {
				display: none;
			}
		}

		&__right-btn {
			@media screen and (width <= 1312px) {
				width: fit-content;
			}
			@media screen and (width <= 576px) {
				width: 100%;
			}
		}

		&__right-our-price {
			display: none;
			font-weight: 400;
			font-size: 18px;
			line-height: 1.2;
			margin-bottom: 5px;
			color: var(--white-color);

			@media screen and (width <= 768px) {
				display: block;
				margin-top: 98px;
			}
		}
	}
</style>
