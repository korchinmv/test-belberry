<script setup>
	const containerRef = ref(null);
	const swiper = useSwiper(containerRef, {
		loop: true,
		enabled: true,
		allowTouchMove: true,
		freeMode: true,
		breakpoints: {
			1440: {
				slidesPerView: 3.2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			320: {
				slidesPerView: "auto",
				direction: "vertical",
				spaceBetween: 8,
				enabled: false,
			},
		},
	});
</script>

<template>
	<ClientOnly>
		<swiper-container class="slider" ref="containerRef">
			<slot />
		</swiper-container>
	</ClientOnly>

	<div class="controls">
		<button class="controls__button" @click="swiper.prev()">
			<Icon name="basil:arrow-left-outline" size="30px" />
		</button>
		<button class="controls__button" @click="swiper.next()">
			<Icon name="basil:arrow-right-outline" size="30px" />
		</button>
	</div>
</template>

<style lang="scss">
	.slider::part(container) {
		overflow: visible !important;
		touch-action: pan-y;
	}

	.controls {
		display: flex;
		gap: 20px;
		margin-top: 30px;

		@media screen and (width <= 768px) {
			display: none;
		}

		&__button {
			background: var(--white-color);
			display: flex;
			justify-content: center;
			align-items: center;
			border: none;
			width: 70px;
			height: 70px;
			cursor: pointer;
			border-radius: 10px;
			transition: background-color 0.3s;

			&:hover {
				background-color: var(--purple-color);
			}
		}
	}
</style>
