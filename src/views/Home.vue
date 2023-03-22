<template>
	<div class="home">
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
			<menu-home />
		</div>
	</div>
</template>

<script setup>
import MenuHome from "../components/menu/MenuHome.vue";
</script>

<style lang="scss" scoped>
.home {
	display: flex;

	width: 100%;
	height: 100%;

	background-image: url(/assets/images/home_image.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;

	&__left {
		flex: 1 1 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	&__right {
		flex: 1 1 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
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

@media (max-width: 840px) {
	.home {
		width: 100%;
		height: 100%;
		flex-direction: column;

		&__right {
			justify-content: center;
		}

		.header {
			&__inscription {
				font-size: rem(45);
				vertical-align: top;
				&-letter {
					font-size: rem(100);
					line-height: rem(175);
				}
				&-number {
					font-size: rem(100);
					letter-spacing: rem(-15);
					line-height: rem(175);
				}
			}
		}

		.subheader {
			&__inscription {
				font-size: rem(20);
			}
		}
	}
}
</style>
