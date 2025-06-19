<script setup>
	const props = defineProps({
		modelValue: {
			type: Object,
			default: null,
		},
		defaultValue: {
			type: String,
			default: "Выберите вариант",
		},
	});

	const emit = defineEmits(["update:modelValue"]);
	const slots = useSlots();
	const isOpen = ref(false);

	const displayValue = computed(() => {
		if (!props.modelValue) return props.defaultValue;

		const options = slots.default();

		const selectedOption = options.find((option) => {
			return option.props?.value === props.modelValue.label;
		});

		return selectedOption?.children || props.modelValue.label;
	});

	const toggleDropdown = () => {
		isOpen.value = !isOpen.value;
	};

	const closeDropdown = () => {
		isOpen.value = false;
	};

	const handleOptionClick = (value) => {
		emit("update:modelValue", value);
		closeDropdown();
	};

	onMounted(() => {
		document.addEventListener("click", closeDropdown);
	});

	onBeforeUnmount(() => {
		document.removeEventListener("click", closeDropdown);
	});

	defineExpose({
		handleOptionClick,
	});
</script>

<template>
	<div class="custom-select" :class="{ 'is-open': isOpen }">
		<div class="custom-select__selected-option" @click.stop="toggleDropdown">
			<span class="custom-select__selected-option-text">{{
				displayValue
			}}</span>
			<Icon
				class="custom-select__icon"
				name="ic:round-keyboard-arrow-down"
				size="24"
			/>
		</div>

		<div v-if="isOpen" class="custom-select__dropdown">
			<div class="custom-select__dropdown-content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.custom-select {
		position: relative;
		width: 100%;
		cursor: pointer;
		height: 64px;

		@media screen and (width <= 768px) {
			height: auto;
		}

		&__selected-option {
			padding: 20px 28px;
			border-radius: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: var(--white-color);

			@media screen and (width <= 768px) {
				padding: 12px 16px;
			}
		}

		&__selected-option-text {
			font-weight: 500;
			font-size: 16px;
			line-height: 1.2;
		}

		&__selected-option:hover {
			border-color: #888;
		}

		&__icon {
			font-size: 12px;
			transition: transform 0.2s;
		}

		&.is-open .custom-select__icon {
			transform: rotate(180deg);
		}

		&__dropdown {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 1000;
			border-radius: 20px;
			background-color: var(--white-color);
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			margin-top: 5px;
		}

		&__dropdown-content {
			max-height: 200px;
			overflow-y: auto;
			border-radius: 20px;
		}

		&__dropdown-content option {
			padding: 20px;
			cursor: pointer;
		}

		&__option {
			padding: 12px 20px;
			cursor: pointer;

			&:hover {
				background-color: var(--page-bg-color);
			}
		}

		&__dropdown-content option:hover {
			background-color: var(--page-bg-color);
		}
	}
</style>
не выводятся деволтные options
