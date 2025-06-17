<script setup>
	import { useMobileMenu } from "~/store/useMobileMenu";
	import { storeToRefs } from "pinia";

	const mobileStore = useMobileMenu();
	const { isShowMobileMenu } = storeToRefs(mobileStore);

	const clickButton = () => {
		mobileStore.toggleMobileMenu();
	};
</script>

<template>
	<button
		class="burger-btn"
		:class="{ 'burger-btn--active': isShowMobileMenu }"
		@click="clickButton"
	>
		<span class="burger-btn__line"></span>
		<span class="burger-btn__line"></span>
		<span class="burger-btn__line"></span>
	</button>
</template>

<style lang="scss">
	.burger-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33px;
		height: 22px;
		position: relative;

		&--active {
			.burger-btn__line {
				&:nth-child(1) {
					top: 9px;
					transform: rotate(45deg);
				}

				&:nth-child(2) {
					opacity: 0;
				}

				&:nth-child(3) {
					bottom: 9px;
					transform: rotate(-45deg);
				}
			}
		}

		&__line {
			display: block;
			position: absolute;
			height: 4px;
			width: 33px;
			opacity: 1;
			left: 0;
			transition: 0.5s ease;
			background-color: var(--text-color);
			border-radius: 2px;

			&:nth-child(1) {
				top: 0;
			}

			&:nth-child(2) {
				top: 9px;
			}

			&:nth-child(3) {
				bottom: 0;
			}
		}
	}
</style>
