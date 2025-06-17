<template>
	<ul class="menu-dropdown">
		<li class="menu-dropdown__item">
			<NuxtLink class="menu-dropdown__link" to="#">Ссылка1</NuxtLink>
		</li>
		<li class="menu-dropdown__item">
			<NuxtLink class="menu-dropdown__link" to="#">Ссылка2</NuxtLink>
		</li>
		<li class="menu-dropdown__item">
			<NuxtLink class="menu-dropdown__link" to="#">Ссылка3</NuxtLink>
		</li>
	</ul>
</template>

<style lang="scss">
	.menu-dropdown {
		border-radius: 12px;
		border: 1px solid var(--text-color);
		background-color: var(--white-color);
		padding: 23px;
		display: flex;
		flex-direction: column;
		position: absolute;
		z-index: 2;
		opacity: 0;
		visibility: hidden;
		transition-property: opacity, visibility;
		transition-duration: 0.3s;
		transition-delay: 0.15s;

		&:hover {
			opacity: 1;
			visibility: visible;
		}

		&__item {
			&:not(:last-child) {
				margin-bottom: 16px;
			}
		}

		&__link {
			transition: color 0.3s;

			&:hover {
				color: var(--purple-color);
			}
		}
	}
</style>
