<script setup>
	defineProps({
		text: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<h2 class="title-section">{{ text }}</h2>
</template>

<style lang="scss">
	.title-section {
		font-weight: 600;
		font-size: 64px;
		line-height: 1.2;

		@media screen and (width <= 1024px) {
			font-size: 48px;
		}
		@media screen and (width <= 768px) {
			font-size: 42px;
		}
		@media screen and (width <= 576px) {
			font-size: 36px;
		}
	}
</style>
