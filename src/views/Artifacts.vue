<template>
	<div class="artifacts">
		<div class="artifacts__list">
			<li
				class="artifacts__item"
				v-for="artifact in artifacts"
				:key="artifact.id">
				<div class="artifacts__item__name">
					{{ artifact.name }}
				</div>
				<div class="artifacts__item__box">
					<div class="artifacts__item__img"><img :src="`${imageUrl(artifact.imageUrl)}`" /></div>
					<div class="artifacts__item__info">
						<span class="artifacts__item__info__value center">{{ artifact.rarity }}</span>
					</div>
					<div class="artifacts__item__info">
						<span class="artifacts__item__info__value center">{{ artifact.description }}</span>
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
const artifacts = ref([]);

onMounted(async () => {
	const response = await fetch("../assets/data/artifacts/" + route.params.type + ".json");
	artifacts.value = await response.json();
});

const imageUrl = (item) => {
	return new URL(`../assets/images/artifacts/${route.params.type}/${item}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.artifacts {
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

		&__info {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			border-top: 1px solid $color-gold;

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

			height: rem(120);
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
