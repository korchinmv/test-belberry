<script setup></script>

<template>
	<ul class="menu">
		<slot />
	</ul>
</template>

<style lang="scss">
	.menu {
		&__item {
			background-color: var(--light-gray-color);
			border-radius: 100px;
			transition: all 0.3s;

			&--height {
				height: 47px;
			}

			&--blog,
			&--contacts {
				@media screen and (width <= 940px) {
					display: none;
				}
			}
		}

		&__item-link,
		&__item-link-dropdown {
			display: flex;
			border-radius: 100px;
			font-weight: 600;
			font-size: 16px;
			position: relative;
			transition: background-color 0.3s;

			&:hover {
				background-color: var(--yellow-color);
			}
		}

		&__item-link {
			padding: 15px 12px 13px;
		}

		&__item-link-dropdown {
			padding: 9px 12px 7px 12px;
			align-items: center;
			column-gap: 4px;

			&:hover {
				& + .menu__dropdown {
					opacity: 1;
					visibility: visible;
				}

				.menu__item-link-icon {
					transform: rotate(180deg);
				}
			}
		}

		&__item-num {
			font-weight: 600;
			font-size: 14px;
			line-height: 1.128;
			text-transform: uppercase;
			position: absolute;
			top: 0;
			right: 0;
		}

		&__item-link-icon {
			transition: transform 0.3s;
		}

		&__dropdown {
			top: 60px;
		}
	}
</style>
