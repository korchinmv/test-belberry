<script setup>
	import { useModalStore } from "~/store/useModalStore";
	import { useSumService } from "~/store/useSumService";
	import { storeToRefs } from "pinia";

	const modalStore = useModalStore();
	const sumServiceStore = useSumService();
	const { totalPrice } = storeToRefs(sumServiceStore);

	const showTextInModal = computed(() => {
		if (totalPrice.value > 0) {
			return `Мы рассчитали стоимость вашего сайта, она составила ${totalPrice.value} рублей. Оставьте контакты, и наш менеджер свяжется с вами в ближайшее время.`;
		} else {
			return "Мы рассчитаем стоимость вашего сайта. Оставьте контакты, и наш менеджер свяжется с вами в ближайшее время.";
		}
	});

	const openApplicationModal = () => {
		modalStore.open("application", {
			title: "Осталось совсем немного!",
			text: showTextInModal,
		});
	};
</script>
<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<ElementBurgerButton class="header__burger-button" />

				<nav class="header__left-menu">
					<UiMenu class="header__menu">
						<UiMenuItem class="menu__item--height" link="#" linkName="Проекты">
							<NuxtLink class="menu__item-link" to="#"
								>Проекты

								<span class="menu__item-num gradient-text">18</span>
							</NuxtLink>
						</UiMenuItem>

						<UiMenuItem link="#" linkName="Проекты">
							<NuxtLink class="menu__item-link-dropdown" to="#"
								>Услуги
								<Icon
									class="menu__item-link-icon"
									size="20"
									name="iconamoon:arrow-down-2"
								/>
								<span class="menu__item-num gradient-text">36</span>
							</NuxtLink>
							<UiMenuDropdown class="menu__dropdown" />
						</UiMenuItem>

						<UiMenuItem link="#" linkName="Мы">
							<NuxtLink class="menu__item-link-dropdown" to="#"
								>Мы
								<Icon
									class="menu__item-link-icon"
									size="20"
									name="iconamoon:arrow-down-2"
							/></NuxtLink>
							<UiMenuDropdown class="menu__dropdown" />
						</UiMenuItem>
					</UiMenu>
				</nav>

				<ElementLogo class="header__logo" />

				<nav class="header__right-menu">
					<UiMenu class="header__menu">
						<UiMenuItem
							class="menu__item--height menu__item--blog"
							link="#"
							linkName="Блог"
						>
							<NuxtLink class="menu__item-link" to="#"
								>Блог
								<span class="menu__item-num gradient-text">31</span>
							</NuxtLink>
						</UiMenuItem>

						<UiMenuItem class="menu__item--contacts">
							<NuxtLink class="menu__item-link" to="#">Контакты</NuxtLink>
						</UiMenuItem>

						<UiMenuItem>
							<button class="black-button" to="#" @click="openApplicationModal">
								Связаться с нами
							</button>
						</UiMenuItem>
					</UiMenu>
				</nav>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
	.header {
		background-color: var(--white-color);
		padding: 10px 0;
		margin-bottom: 40px;

		@media screen and (width <= 768px) {
			margin-bottom: 35px;
			padding: 20px 0;
		}

		&__wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 10px;
		}

		&__logo {
			flex-shrink: 0;
		}

		&__menu {
			display: flex;
			column-gap: 24px;
			align-items: center;
		}

		&__left-menu {
			@media screen and (width <= 940px) {
				display: none;
			}
		}

		&__burger-button {
			display: none;

			@media screen and (width <= 940px) {
				display: block;
			}
		}
	}
</style>
