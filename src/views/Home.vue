<template>
<div class="home">
	<div class="home__background">
		<div class="home__left">
			<div class="home__header">
				<span class="header__inscription-letter">H</span>
				<span class="header__inscription">eroes</span>
				<span class="header__inscription-number">III</span>
			</div>
			<div class="home__subheader">
				<span class="subheader__inscription">wiki</span>
			</div>
		</div>
		<div class="home__right">
			<div class="menu">
			<ul>
				<li>Jednostki</li>
				<li>Lokacje</li>
			</ul>
		</div>
		</div>
	</div>
</div>
</template>

<setup script>

</setup>


<style lang="scss" scoped>

.home {
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	&__background {
	width: 70%;
	height: 80%;
	background-image: url(@/assets/images/home_image.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;
	border: 4px solid #B7A553;

	display: flex;
	}

	&__left {
		flex: 1 1 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	&__right {
		flex: 1 1 0;
	}

	&__header {
		color: $color-white;
		text-transform: uppercase;
		line-height: rem(150);
	}

	&__subheader {
		color: $color-white;
		text-transform: uppercase;
		margin-top: rem(-85);
	}

	.header {
		&__inscription {
			font-size: rem(76);
			vertical-align: top;
			&-letter {
				font-size: rem(120);
				line-height: rem(175);
			}
			&-number {
				font-size: rem(120);
				letter-spacing: rem(-15);
				line-height: rem(175);
			}
		}
	}

	.subheader {
		&__inscription {
			font-size: rem(24);
		}
	}

}

</style>