<template>
	<div class="equipment">
		<div class="equipment__wrapper">
			<img
				class="equipment__background"
				src="@/assets/images/equipment.jpg" />
			<button
				@click="goToArtifact('head')"
				class="equipment__button equipment__button__head">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/head/hohe.gif" />
			</button>
			<button
				@click="goToArtifact('main-hand')"
				class="equipment__button equipment__button__main-hand">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/main-hand/soj.gif" />
			</button>
			<button
				@click="goToArtifact('hands')"
				class="equipment__button equipment__button__hand-left">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/hands/seotd.gif" />
			</button>
			<button
				@click="goToArtifact('neck')"
				class="equipment__button equipment__button__neck">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/neck/cnob.gif" />
			</button>
			<button
				@click="goToArtifact('accessories')"
				class="equipment__button equipment__button__accessory-1">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/accessory/toe.gif" />
			</button>
			<button
				@click="goToArtifact('body')"
				class="equipment__button equipment__button__body">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/body/aow.gif" />
			</button>
			<button
				@click="goToArtifact('accessories')"
				class="equipment__button equipment__button__accessory-2">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/accessory/oos.gif" />
			</button>
			<button
				@click="goToArtifact('off-hand')"
				class="equipment__button equipment__button__off-hand">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/off-hand/lsoc.gif" />
			</button>
			<button
				@click="goToArtifact('hands')"
				class="equipment__button equipment__button__hand-right">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/hands/qeotd.gif" />
			</button>
			<button
				@click="goToArtifact('accessories')"
				class="equipment__button equipment__button__accessory-3">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/accessory/gb.gif" />
			</button>
			<button
				@click="goToArtifact('cloaks')"
				class="equipment__button equipment__button__cloak">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/cloaks/dwt.gif" />
			</button>
			<button
				@click="goToArtifact('accessories')"
				class="equipment__button equipment__button__accessory-4">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/accessory/moom.gif" />
			</button>
			<button
				@click="goToArtifact('accessories')"
				class="equipment__button equipment__button__accessory-5">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/accessory/cop.gif" />
			</button>
			<button
				@click="goToArtifact('feet')"
				class="equipment__button equipment__button__feet">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/feet/sots.gif" />
			</button>
			<button
				@click="goToSpells"
				class="equipment__button equipment__button__spellbook">
				<img
					class="equipment__button__img"
					src="@/assets/images/artifacts/spellbook.png" />
			</button>
		</div>
	</div>
</template>

<script setup>
import router from "../router";

const goToArtifact = (name) => {
	router.push({ path: `/artifacts/${name}` });
};

const goToSpells = () => {
	router.push({ name: "Magics" });
};
</script>

<style lang="scss" scoped>
.equipment {
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
			.equipment__button__img {
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

		&__spellbook {
			top: 86%;
			left: 82%;
		}
	}
}

@media (max-width: 840px) {
	.equipment {
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

			&__spellbook {
				left: 80%;
			}
		}
	}
}
</style>
