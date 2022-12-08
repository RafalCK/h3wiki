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
			<div class="home__search">
				<button class="search__button" @click="openSearch()">
				<span class="search__text">Szukaj</span>
				</button>
			</div>
		</div>
		<div class="home__right">
			<main-menu/>
		</div>
	</div>
</div>
</template>

<script setup>
import MainMenu from '../components/menu/MainMenu.vue';
</script>


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

	&__search {
		display: flex;
		align-items: center;
		justify-content: center;

		margin-top: rem(35);

		&:hover {
    		filter: drop-shadow(0px 0px 25px rgba(244, 247, 249, 1));
		}
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

	.search {

	&__button {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 100%;

		background: transparent;
		border: 0;
		background-image: url('src/assets/images/menu/vision.png');
		height: rem(100);
		background-size: rem(110);
		background-position: top left;
		background-repeat: no-repeat;
	}

	&__text {
		background-image: repeating-linear-gradient(#eee 0px, #ebc622 15px, #eee 30px);
		font-size: rem(30);
		font-weight: 700;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		filter: drop-shadow(0 1px 3px black) drop-shadow(0 1px 2px black) drop-shadow(0 1px 1px black);
		cursor: pointer;
	}
	}

}

@media (max-width: 840px) {
	.home {

		height: 100%;

		&__background {
			width: 100%;
			height: 100%;
			flex-direction: column;
		}

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