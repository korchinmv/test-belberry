<script setup>
	import { useMobileMenu } from "~/store/useMobileMenu";
	import { storeToRefs } from "pinia";

	const mobileStore = useMobileMenu();
	const { isShowMobileMenu } = storeToRefs(mobileStore);
</script>

<template>
	<div class="mobile-menu" :class="{ 'mobile-menu--active': isShowMobileMenu }">
		<MoleculesProfile class="mobile-menu__profile" />

		<MoleculesSearchForm class="mobile-menu__search" />

		<nav class="mobile-menu__nav">
			<ul class="mobile-menu__nav-list">
				<li class="mobile-menu__nav-item">
					<NuxtLink
						class="mobile-menu__nav-link"
						to="#"
						@click="mobileStore.hideMobileMenu"
						>Проекты</NuxtLink
					>
				</li>
				<li class="mobile-menu__nav-item">
					<NuxtLink
						class="mobile-menu__nav-link"
						to="#"
						@click="mobileStore.hideMobileMenu"
						>Услуги</NuxtLink
					>
				</li>
				<li class="mobile-menu__nav-item">
					<NuxtLink
						class="mobile-menu__nav-link"
						to="#"
						@click="mobileStore.hideMobileMenu"
						>Мы</NuxtLink
					>
				</li>
				<li class="mobile-menu__nav-item">
					<NuxtLink
						class="mobile-menu__nav-link"
						to="#"
						@click="mobileStore.hideMobileMenu"
						>Блог</NuxtLink
					>
				</li>
				<li class="mobile-menu__nav-item">
					<NuxtLink
						class="mobile-menu__nav-link"
						to="#"
						@click="mobileStore.hideMobileMenu"
						>Контакты</NuxtLink
					>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style lang="scss">
	.mobile-menu {
		position: fixed;
		z-index: 99;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		top: 61px;
		right: left;
		bottom: 0;
		background-color: var(--white-color);
		width: 280px;
		padding: 32px 15px 30px;
		box-shadow: none;
		transform: translateX(-100%);
		transition: 0.5s ease;
		transition-property: transform, box-shadow;
		display: none;

		@media screen and (width <= 1024px) {
			display: block;
		}

		@media screen and (width <= 768px) {
			top: 85px;
		}

		&--active {
			transform: translateX(0);
			box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
		}

		&__nav {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			position: relative;
			width: 100%;
		}

		&__nav-list {
			width: 100%;
		}

		&__nav-item {
			position: relative;

			&:not(:last-child) {
				margin-bottom: 25px;
			}
		}

		&__nav-link {
			font-size: 18px;
			transition: color 0.3s ease;

			&:hover {
				color: var(--purple-color);
			}
		}
	}
</style>
