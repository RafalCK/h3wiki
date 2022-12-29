<template>
	<div class="units">
		<div class="units__list">
			<li class="units__item" v-for="unit in units" :key="unit.id">
				<div class="units__name">
					{{ unit.name }}
				</div>
				<div class="units__level">
					Level: {{ unit.level }}
				</div>
				<div class="units__attack">
					Attack: {{ unit.attack }}
				</div>
				<div class="units__defense">
					Defense: {{ unit.defense }}
				</div>
				<div class="units__damage">
					Damage: {{ unit.damage }}
				</div>
				<div class="units_health">
					Health: {{ unit.health }}
				</div>
				<div class="units_speed">
					Speed: {{ unit.speed }}
				</div>
				<div class="units__growth">
					Growth: {{ unit.growth }}
				</div>
				<div class="units_value-money">
					ValueMoney: {{ unit.valueMoney }}
				</div>
			</li>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const units = ref(null);

onMounted(() => {
	let link = '../src/assets/data/' + route.params.name + '.json'
	fetch(link).then(res => res.json()).then(data => units.value = data).catch(err => console.log(err.message))
}
);

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

		display: grid;
		grid-template-columns: repeat(2, 1fr);
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
	}
}
</style>