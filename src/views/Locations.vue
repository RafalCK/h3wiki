<template>
	<div class="locations">
		<div class="locations__list">
			<li
				class="locations__item"
				v-for="location in locations"
				:key="location.id">
				<router-link
					class="locations__link"
					:to="{ path: `/locations/${location.name}` }">
					<div class="locations__image">
						<img
							class="locations__image__img"
							:src="`/assets/images/locations/${location.src}`"
							:alt="location.name" />
					</div>
					<span class="locations__name">{{ location.label }}</span>
				</router-link>
			</li>
		</div>
	</div>
</template>

<script setup>
import locationsData from "../assets/data/locationsData.json";

const locations = locationsData;
</script>

<style lang="scss" scoped>
.locations {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;

	&__list {
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
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

	&__image {
		width: rem(150);
		height: rem(80);
		&__img {
			width: 100%;
			height: 100%;
			object-fit: contain;
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
		text-transform: capitalize;
	}
}

@media (min-width: 320px) and (max-width: 450px) {
	.locations {
		&__list {
			grid-template-columns: repeat(1, 1fr);
			padding: rem(10) 0;
		}
	}
}

@media (min-width: 451px) and (max-width: 600px) {
	.locations {
		&__list {
			grid-template-columns: repeat(2, 1fr);
			padding: rem(10) 0;
		}
	}
}

@media (min-width: 601px) and (max-width: 950px) {
	.locations {
		&__list {
			grid-template-columns: repeat(3, 1fr);
			padding: rem(10) 0;
		}
	}
}
</style>
