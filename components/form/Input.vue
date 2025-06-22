<script setup>
	defineProps({
		labelName: {
			type: String,
			required: true,
		},
		inputName: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="input-block">
		<input
			class="input-block__input"
			type="text"
			:id="inputName"
			placeholder=" "
		/>
		<label class="input-block__placeholder" :for="inputName">
			{{ labelName }}
		</label>
	</div>
</template>

<style lang="scss">
	.input-block {
		position: relative;
		width: 100%;

		&__input {
			padding: 22px 16px;
			border-radius: 20px;
			background: var(--light-bg);
			font-weight: 500;
			font-size: 15px;
			line-height: 1.3;
			color: var(--black);
			width: 100%;

			@media screen and (width <= 768px) {
				padding: 12px 16px;
			}
		}

		&__placeholder {
			font-weight: 500;
			font-size: 15px;
			line-height: 1.3;
			color: var(--light-grey);
			position: absolute;
			top: 50%;
			left: 16px;
			transform: translateY(-50%);
			transition: top 0.3s ease-in-out, font-size 0.3s ease-in-out;
		}

		&__input:focus + &__placeholder,
		&__input:not(:placeholder-shown) + &__placeholder {
			font-size: 12px;
			top: 15px;
		}
	}
</style>
