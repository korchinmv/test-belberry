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

						<div class="hero__projects-arrow">
							<Icon
								class="arrow-right"
								size="20"
								name="meteor-icons:arrow-up-right"
							/>
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

				<div class="hero__right"></div>
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
		}

		&__left {
			background: linear-gradient(124deg, #0804a1 0%, #9278fa 100%);
			border-radius: 20px;
			padding: 60px;
			max-width: 847px;
			width: 100%;
		}

		&__sub-title {
			font-weight: 400;
			font-size: 20px;
			color: var(--white-color);
			margin-bottom: 16px;
			display: block;
		}

		&__title {
			font-weight: 500;
			font-size: 68px;
			line-height: 1.2;
			text-transform: uppercase;
			margin-bottom: 60px;
			color: var(--white-color);
		}

		&__projects-link-wrap {
			position: relative;
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
		}

		&__projects-mobile {
			display: none;
		}
	}
</style>
