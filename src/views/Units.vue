<template>
	<div class="units">
		<div class="units__list">
			<li
				class="units__item"
				:class="{ three: unit.up }"
				v-for="unit in units"
				:key="unit.id">
				<div class="units__item__name">
					{{ unit.name }}
				</div>
				<div class="units__item__box">
					<div class="units__item__img"><img :src="`../${unit.imageUrl}`" /></div>
					<div class="units__item__container__info">
						<div class="units__item__info">
							<span class="units__item__info__header">Attack</span>
							<img
								class="units__item__info__img"
								src="/assets/images/att.jpg" />
							<span class="units__item__info__value">{{ unit.attack }}</span>
						</div>
						<div class="units__item__info">
							<span class="units__item__info__header">Defense</span>
							<img
								class="units__item__info__img"
								src="/assets/images/def.jpg" />
							<span class="units__item__info__value">{{ unit.defense }}</span>
						</div>
						<div class="units__item__info">
							<span class="units__item__info__header">Damage</span>
							<img
								class="units__item__info__img"
								src="/assets/images/dmg.jpg" />
							<span class="units__item__info__value">{{ unit.damage }}</span>
						</div>
						<div
							v-if="unit.shots"
							class="units__item__info">
							<span class="units__item__info__header">Shots</span>
							<img
								class="units__item__info__img"
								src="/assets/images/dmg.jpg" />
							<span class="units__item__info__value">{{ unit.shots }}</span>
						</div>
						<div class="units__item__info">
							<span class="units__item__info__header">Health</span>
							<img
								class="units__item__info__img"
								src="/assets/images/hp.jpg" />
							<span class="units__item__info__value">{{ unit.health }}</span>
						</div>
						<div class="units__item__info">
							<span class="units__item__info__header">Speed</span>
							<img
								class="units__item__info__img"
								src="/assets/images/speed.jpg" />
							<span class="units__item__info__value">{{ unit.speed }}</span>
						</div>
						<div class="units__item__info">
							<span class="units__item__info__header">Growth</span>
							<img
								class="units__item__info__img"
								src="/assets/images/growth.jpg" />
							<span class="units__item__info__value">{{ unit.growth }}</span>
						</div>
						<div class="units__item__info">
							<span class="units__item__info__header">Cost</span>
							<img
								class="units__item__info__img"
								src="/assets/images/cost.jpg" />
							<span class="units__item__info__value"><img src="/assets/images/gold.gif" /> {{ unit.valueMoney }}</span>
						</div>

						<div
							v-if="unit.specialAbilities"
							class="units__item__info">
							<span class="units__item__info__header">Special</span>
							<div class="units__item__info__image">
								<img
									class="units__item__info__image__img"
									src="/assets/images/spec.jpg" />
							</div>
							<span class="units__item__info__value">Abilities</span>
						</div>
						<div
							v-if="unit.specialAbilities"
							class="units__item__info">
							<span class="units__item__info__value center">{{ unit.specialAbilities }}</span>
						</div>
					</div>
				</div>
			</li>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const units = ref(null);

onMounted(() => {
	let link = "../src/assets/data/" + route.params.name + ".json";
	fetch(link)
		.then((res) => res.json())
		.then((data) => (units.value = data))
		.catch((err) => console.log(err.message));
});
</script>

<style lang="scss" scoped>
.units {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	&__list {
		width: 100%;
		height: 100%;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: rem(20);
		list-style: none;
	}

	&__item {
		width: 35%;
		display: flex;
		flex-direction: column;

		align-self: baseline;
		justify-self: center;

		border: 1px solid $color-gold;

		&.three {
			width: 72%;
		}

		&__container__info {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		&__info {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			border: 1px solid $color-gold;

			&__header {
				display: flex;
				justify-content: flex-end;
				flex: 2;
				margin-right: rem(5);
			}

			&__image {
				height: auto;
				border: 1px solid $color-gold;
				display: flex;
				align-self: stretch;
				background: #30190e;
				border: 1px solid $color-gold;

				&__img {
					width: 100%;
					height: rem(25);
					display: flex;
					align-self: center;
				}
			}
			&__img {
				border: 1px solid $color-gold;
				flex: 0 0 rem(30);
			}

			&__value {
				display: flex;
				flex: 2;
				margin-left: rem(5);

				&.center {
					display: flex;
					justify-content: center;
					text-align: center;
					padding: rem(5) 0;
				}
			}
		}

		&__name {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			background: $color-gold;
			color: $color-white;
			border: 1px solid $color-gold;
			padding: rem(2) 0;
		}

		&__img {
			display: flex;
			align-items: center;
			justify-content: center;

			filter: drop-shadow(0px 0px 25px rgb(244, 247, 249));

			height: rem(150);
		}
	}
}

@media (max-width: 840px) {
	.units {
		&__item {
			width: 70%;
		}
	}
}
</style>
