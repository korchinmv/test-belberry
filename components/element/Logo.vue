<template>
	<a class="logo" href="#">
		<img src="public/img/logo.png" alt="Логотип Acoola Team" />
	</a>
</template>

<style lang="scss">
	.logo {
		&:hover {
			opacity: 0.8;
			transition: 0.3s;
		}

		@media screen and (width <= 576px) {
			img {
				width: 78px;
				height: 45px;
				object-fit: contain;
			}
		}
	}
</style>
