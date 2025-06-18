<script setup>
	defineProps({
		title: {
			type: String,
			required: true,
		},
		descr: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="service-card">
		<NuxtLink class="service-card__link" to="#">
			<h4 class="service-card__title gradient-text">{{ title }}</h4>

			<p class="service-card__descr">{{ descr }}</p>
		</NuxtLink>
	</div>
</template>

<style lang="scss">
	.service-card {
		background-color: var(--white-color);
		max-width: 413px;
		width: 100%;
		border-radius: 30px;

		@media screen and (width <= 576px) {
			border-radius: 20px;
		}

		&__link {
			display: flex;
			flex-direction: column;
			padding: 30px;
			min-height: 400px;
			border-radius: 30px;
			transition: background-color 0.3s ease-in-out;

			@media screen and (width <= 576px) {
				min-height: 135px;
				padding: 16px;
				border-radius: 20px;
			}

			&:hover {
				background-color: var(--yellow-color);
			}
		}

		&__title {
			font-weight: 500;
			font-size: 44px;

			@media screen and (width <= 576px) {
				font-size: 22px;
				font-weight: 600;
			}
		}

		&__descr {
			margin-top: auto;
			font-weight: 400;
			font-size: 20px;
			line-height: 1.4;

			@media screen and (width <= 576px) {
				font-size: 16px;
				font-weight: 600;
			}
		}
	}
</style>
