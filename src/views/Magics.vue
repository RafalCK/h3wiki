<template>
	<div class="magics">
		<div class="magics__list">
			<li
				class="magics__item"
				v-for="magic in magics"
				:key="magic.id">
				<router-link
					class="magics__link"
					:to="`/spells/${magic.name}`">
					<img
						class="magics__img"
						:src="`/assets/images/magics/${magic.src}`"
						:alt="magic.name" />
					<span class="magics__name">{{ magic.name }}</span>
				</router-link>
			</li>
		</div>
	</div>
</template>

<script setup>
import magicsData from "../assets/data/magicsData.json";

const magics = magicsData;
</script>

<style lang="scss" scoped>
.magics {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	&__list {
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
		list-style: none;
	}

	&__item {
		display: flex;
		flex-direction: column;
		align-self: center;
		justify-self: center;

		border: 1px solid $color-gold;

		width: 50%;
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
	.magics {
		&__list {
			margin: rem(20) 0;
			grid-template-columns: repeat(1, 1fr);
			gap: rem(50);
		}
	}
}
</style>
