<script setup>
	defineProps({
		text: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<button class="button">{{ text }}</button>
</template>

<style lang="scss">
	.button {
		border-radius: 30px;
		padding: 13px 26px 12px 26px;
		background: linear-gradient(273deg, #0804a1 -50%, #9278fa 100%);
		width: 100%;
		color: var(--white-color);
		font-weight: 500;
		font-size: 24px;
		transition: all 0.5s ease;
		position: relative;
		overflow: hidden;
		z-index: 1;

		@media screen and (width <= 768px) {
			font-size: 16px;
		}

		&:hover {
			&::before {
				opacity: 1;
			}
		}

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(273deg, #0804a1 -30%, #9278fa 120%);
			opacity: 0;
			transition: opacity 0.5s ease;
			z-index: -1;
			border-radius: 30px;
		}
	}
</style>
