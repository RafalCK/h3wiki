<template>
	<div class="artefacts">
		<div class="artefacts__wrapper">
			<img
				class="artefacts__background"
				src="/assets/images/artefacts.jpg" />
			<button class="artefacts__button artefacts__button__head">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/head/helm.gif" />
			</button>
			<button class="artefacts__button artefacts__button__main-hand">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/main-hand/soj.gif" />
			</button>
			<button class="artefacts__button artefacts__button__hand-left">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/hand-left/seotd.gif" />
			</button>
			<button class="artefacts__button artefacts__button__neck">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/neck/cnob.gif" />
			</button>
			<button class="artefacts__button artefacts__button__accessory-1">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/accessory/toe.gif" />
			</button>
			<button class="artefacts__button artefacts__button__body">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/body/aow.gif" />
			</button>
			<button class="artefacts__button artefacts__button__accessory-2">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/accessory/oos.gif" />
			</button>
			<button class="artefacts__button artefacts__button__off-hand">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/off-hand/lion.gif" />
			</button>
			<button class="artefacts__button artefacts__button__hand-right">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/hand-right/qeotd.gif" />
			</button>
			<button class="artefacts__button artefacts__button__accessory-3">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/accessory/gb.gif" />
			</button>
			<button class="artefacts__button artefacts__button__cloak">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/cloaks/tabard.gif" />
			</button>
			<button class="artefacts__button artefacts__button__accessory-4">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/accessory/moom.gif" />
			</button>
			<button class="artefacts__button artefacts__button__accessory-5">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/accessory/cop.gif" />
			</button>
			<button class="artefacts__button artefacts__button__feet">
				<img
					class="artefacts__button__img"
					src="/assets/images/artefacts/feet/sots.gif" />
			</button>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.artefacts {
	width: 100%;
	height: 100%;
	position: relative;

	display: flex;
	justify-content: center;

	&__wrapper {
		display: flex;
		justify-content: center;
		max-width: rem(550);
		height: 100%;
		position: relative;
	}

	&__background {
		height: 100%;
		width: 100%;
	}

	&__button {
		width: auto;
		height: 12%;
		position: absolute;
		border: 0;
		margin-left: rem(5);
		cursor: pointer;
		background: transparent;

		&:hover {
			.artefacts__button__img {
				filter: drop-shadow(0px 0px 10px rgb(244, 247, 249));
			}
		}

		&__img {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
		}

		&__head {
			top: 2%;
			left: 46%;
		}

		&__main-hand {
			top: 14%;
			left: 1%;
		}

		&__hand-left {
			top: 14%;
			left: 18%;
		}

		&__neck {
			top: 17%;
			left: 46%;
		}

		&__accessory-1 {
			top: 36%;
			left: 1%;
		}

		&__body {
			top: 32%;
			left: 46%;
		}

		&__accessory-2 {
			top: 51%;
			left: 6%;
		}

		&__off-hand {
			top: 48%;
			left: 65%;
		}

		&__hand-right {
			top: 48%;
			left: 82%;
		}

		&__accessory-3 {
			top: 66%;
			left: 12%;
		}

		&__cloak {
			top: 66%;
			left: 67%;
		}

		&__accessory-4 {
			top: 81%;
			left: 0%;
		}

		&__accessory-5 {
			top: 81%;
			left: 18%;
		}

		&__feet {
			top: 82%;
			left: 48%;
		}
	}
}

@media (max-width: 840px) {
	.artefacts {
		height: calc(100vh - 4.4375rem);
		align-items: center;

		&__wrapper {
			height: 50%;
		}

		&__button {
			&__head {
				left: 45%;
			}

			&__main-hand {
				left: 0%;
			}

			&__hand-left {
				left: 17%;
			}

			&__neck {
				left: 44%;
			}

			&__accessory-1 {
				left: 0%;
			}

			&__body {
				left: 44%;
			}

			&__accessory-2 {
				left: 5%;
			}

			&__off-hand {
				left: 64%;
			}

			&__hand-right {
				left: 81%;
			}

			&__accessory-3 {
				left: 10%;
			}

			&__cloak {
				left: 65%;
			}

			&__accessory-4 {
				left: 0%;
			}

			&__accessory-5 {
				left: 17%;
			}

			&__feet {
				left: 46%;
			}
		}
	}
}
</style>
