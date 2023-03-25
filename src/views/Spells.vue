<template>
	<div class="spell">
		<div class="units__list">
			<li
				class="units__item"
				v-for="spell in spells"
				:key="spell.id">
				<div class="units__item__name">
					{{ spell.name }}
				</div>
				<div class="units__item__box">
					<div class="units__item__img"><img :src="`../${spell.imageUrl}`" /></div>
					<div class="units__item__container__info">
						<div class="units__item__info">
							<span class="units__item__info__header">Level</span>
							<div class="units__item__info__image">
								<img
									class="units__item__info__image__img"
									src="@/assets/images/growth.jpg" />
							</div>
							<span class="units__item__info__value">{{ spell.level }}</span>
						</div>
						<div class="units__item__info">
							<span class="units__item__info__header">Mana Cost</span>
							<div class="units__item__info__image">
								<img
									class="units__item__info__image__img"
									src="@/assets/images/spec.jpg" />
							</div>
							<span class="units__item__info__value">{{ spell.manaCost }}</span>
						</div>
						<div
							class="units__item__info"
							v-if="spell.basic">
							<span class="units__item__info__header">Skill level</span>
							<div class="units__item__info__image">
								<img
									class="units__item__info__image__img"
									:src="`@/assets/images/basic_${spell.magic}.jpg`" />
							</div>
							<span class="units__item__info__value">Basic</span>
						</div>
						<div
							class="units__item__info"
							v-if="spell.basic">
							<span class="units__item__info__value center">{{ spell.basic }}</span>
						</div>
						<div
							class="units__item__info"
							v-if="spell.advanced">
							<span class="units__item__info__header">Skill level</span>
							<div class="units__item__info__image">
								<img
									class="units__item__info__image__img"
									:src="`@/assets/images/advanced_${spell.magic}.jpg`" />
							</div>
							<span class="units__item__info__value">Advanced</span>
						</div>
						<div
							class="units__item__info"
							v-if="spell.advanced">
							<span class="units__item__info__value center">{{ spell.advanced }}</span>
						</div>
						<div
							class="units__item__info"
							v-if="spell.expert">
							<span class="units__item__info__header">Skill level</span>
							<div class="units__item__info__image">
								<img
									class="units__item__info__image__img"
									:src="`@/assets/images/expert_${spell.magic}.jpg`" />
							</div>
							<span class="units__item__info__value">Expert</span>
						</div>
						<div
							class="units__item__info"
							v-if="spell.expert">
							<span class="units__item__info__value center">{{ spell.expert }}</span>
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
const spells = ref(null);

onMounted(() => {
	let link = "../src@/assets/data/magics/" + route.params.name + ".json";
	fetch(link)
		.then((res) => res.json())
		.then((data) => (spells.value = data))
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

			&__level {
				flex-direction: column;
			}

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
				width: rem(30);

				&__img {
					width: 100%;
					height: rem(25);
					display: flex;
					align-self: center;
					object-fit: cover;
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
				margin-right: rem(5);

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
