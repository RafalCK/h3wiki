<template>
	<div class="bank">
		<div class="bank__table">
			<table>
				<tbody>
					<tr>
						<th
							width="50%"
							colspan="2">
							{{ banks.name }}
						</th>
						<th
							width="50%"
							colspan="2">
							Map
						</th>
					</tr>
					<tr>
						<td colspan="2">
							<img
								class="bank__table__map"
								:src="`${imageMapUrl(banks.map)}`" />
						</td>
						<td colspan="2">
							<img
								class="bank__table__image"
								:src="`${imageUrl(banks.image)}`" />
						</td>
					</tr>
					<tr>
						<th>%</th>
						<th width="70%">Guards</th>
						<th>Awards</th>
						<th>XP</th>
					</tr>
					<tr
						v-for="bank in banks.info"
						:key="bank.id">
						<td>{{ bank.percent }}</td>
						<td class="bank__table__guard">
							<tr class="bank__table__guard__tr">
								<template v-for="guard in bank.guards">
									<th
										class="bank__table__guard__tr__th"
										:class="`bank__table__guard__tr__th--${bank.guards.length}`">
										Hex {{ guard.hex }}
									</th>
								</template>
							</tr>
							<template v-for="guard in bank.guards">
								<td class="bank__table__guard__tr__td">
									<img
										class="bank__table__guard__portrait"
										:src="`${imagePortraitUrl(guard.image)}`" />
									{{ guard.name }} {{ guard.count }}x
								</td>
							</template>
						</td>
						<td>
							<span class="bank__table__awards">
								<template v-if="bank.content">
									{{ bank.content }}
									<img src="@/assets/images/gold.gif" />
								</template>
								<template v-if="bank.creature">
									{{ bank.creature.count }} {{ bank.creature.name }}
									<img
										class="bank__table__awards__creature"
										:src="`${imagePortraitUrl(bank.creature.img)}`" />
								</template>
								<template v-if="bank.artifact"> Artifact ({{ bank.artifact }}) </template>
								<template v-if="bank.wood">
									{{ bank.wood }}
									<img src="@/assets/images/wood.png" />
								</template>
								<template v-if="bank.mercury">
									{{ bank.mercury }}
									<img src="@/assets/images/mercury.png" />
								</template>
								<template v-if="bank.ore">
									{{ bank.ore }}
									<img src="@/assets/images/ore.png" />
								</template>
								<template v-if="bank.sulfur">
									{{ bank.sulfur }}
									<img src="@/assets/images/sulfur.png" />
								</template>
								<template v-if="bank.crystal">
									{{ bank.crystal }}
									<img src="@/assets/images/crystal.png" />
								</template>
								<template v-if="bank.gem">
									{{ bank.gem }}
									<img src="@/assets/images/gem.png" />
								</template>
							</span>
						</td>
						<td>
							<img src="@/assets/images/exp.jpg" />
							{{ bank.xp }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const banks = ref({});

onMounted(async () => {
	const response = await fetch("../assets/data/banks/" + route.params.name + ".json");
	banks.value = await response.json();
	console.log(banks.value);
});

const imageUrl = (item) => {
	return new URL(`../assets/images/locations/${item}`, import.meta.url).href;
};

const imageMapUrl = (item) => {
	return new URL(`../assets/images/locations/map/${item}`, import.meta.url).href;
};

const imagePortraitUrl = (item) => {
	return new URL(`../assets/images/portrait/${item}`, import.meta.url).href;
};

console.log(imageUrl("angel.gif"));
</script>

<style lang="scss" scoped>
.bank {
	overflow-x: auto;
	width: 100%;
	height: 100%;
	background: url("@/assets/images/bg.gif");
	color: $color-white;
	&__table {
		display: block;
		width: 100%;
		height: 100%;
		table,
		th,
		td {
			border: 1px solid $color-gold;
			text-align: center;
		}

		table {
			height: 100%;
		}

		th {
			background: $color-gold;
		}

		&__image {
			filter: drop-shadow(0px 0px 25px rgb(244, 247, 249));
		}

		&__map {
			margin: rem(10) 0;
			background: $color-white;
			height: rem(150);
		}

		&__guard {
			&__tr {
				height: 100%;
				&__th {
					width: 20%;
					height: 100%;
					&--1 {
						width: 18%;
					}
					&--6 {
						width: 15%;
					}
				}
			}
			&__td__td {
				height: 100%;
			}
			&__portrait {
				margin-left: rem(5);
			}
		}

		&__awards {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
			gap: rem(4);

			img {
				width: rem(14);
				height: rem(14);
				margin-right: rem(2);
			}

			img.bank__table__awards__creature {
				width: rem(27);
				height: rem(30);
			}
		}
	}
}

::-webkit-scrollbar {
	width: rem(2);
}

::-webkit-scrollbar-track {
	background: $color-gold;
}
::-webkit-scrollbar-thumb {
	background: $color-gold;
}

::-webkit-scrollbar-thumb:hover {
	background: $color-gold;
}

@media (max-width: 500px) {
	.bank {
		&__table {
			display: block;
		}
	}
}
</style>
