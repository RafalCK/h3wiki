<template>
	<div class="towns">
		<div class="towns__list">
			<li
				class="towns__item"
				v-for="town in towns"
				:key="town.id">
				<a
					class="towns__link"
					:href="`/units/${town.name}`">
					<img
						class="towns__img"
						:src="`/assets/images/towns/${town.src}`"
						:alt="town.name" />
					<span class="towns__name">{{ town.name }}</span>
				</a>
			</li>
		</div>
	</div>
</template>

<script setup>
import townsData from "../assets/data/townsData.json";

const towns = townsData;
</script>

<style lang="scss" scoped>
.towns {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	&__list {
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
		list-style: none;
	}

	&__item {
		display: flex;
		flex-direction: column;
		max-width: rem(260);

		align-self: center;
		justify-self: center;

		border: 1px solid $color-gold;
	}

	&__link {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}

	&__img {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	&__name {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		background: $color-gold;
		color: $color-white;
		border: 1px solid $color-gold;
		padding: rem(2) 0;
		text-transform: capitalize;
	}
}

@media (max-width: 840px) {
	.towns {
		&__list {
			margin: rem(20) 0;
			grid-template-columns: repeat(1, 1fr);
		}
	}
}

@media (max-height: 800px) {
	.towns {
		&__list {
			margin: 0 rem(20);
			grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
		}
	}
}
</style>
