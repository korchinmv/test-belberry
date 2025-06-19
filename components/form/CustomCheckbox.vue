<template>
	<label class="custom-checkbox">
		<input
			class="custom-checkbox__input visually-hidden"
			name="chechbox"
			type="checkbox"
		/>

		<span class="custom-checkbox__span"></span>
	</label>
</template>

<style lang="scss">
	.custom-checkbox {
		&__span::before {
			content: "";
			display: inline-block;
			border: 1px solid #8b8b8b;
			border-radius: 4px;
			width: 20px;
			height: 20px;
			background-color: var(--white);
			transition: all 0.2s;
			cursor: pointer;
		}

		& > input:checked + span::before {
			background-image: url("img/check.svg");
			background-color: transparent;
			background-position: top right;
			background-size: contain;
			background-repeat: no-repeat;
		}

		& > input:not(:disabled, :checked) + span:hover::before {
			border-color: var(--purple-color);
		}

		& > input:not(:disabled):active + span::before {
			border-color: var(--purple-color);
		}
	}
</style>
