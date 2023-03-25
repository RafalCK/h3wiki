<template>
	<div class="menu-mobile">
		<ul class="menu-mobile__list">
			<template
				v-for="item in menu"
				:key="item.id">
				<li class="menu-mobile__list__item">
					<router-link
						:to="{ path: item.url }"
						class="menu-mobile__list__item__link">
						<span class="menu-mobile__list__item__link__text">{{ item.name }}</span>
					</router-link>
				</li>
			</template>
		</ul>
	</div>
</template>

<script setup>
const menu = [
	{
		id: 0,
		name: "Home",
		url: "/",
	},
	{
		id: 0,
		name: "Towns",
		url: "/towns",
	},
	{
		id: 1,
		name: "Locations",
		url: "/locations",
	},
	{
		id: 2,
		name: "Artifacts",
		url: "/artifacts",
	},
	{
		id: 3,
		name: "Magics",
		url: "/magics",
	},
];
</script>

<style lang="scss" scoped>
.menu-mobile {
	background: url("@/assets/images/bg.gif");
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	z-index: 1;
	&__list {
		width: 100%;
		height: 100%;

		list-style: none;
		margin-top: rem(80);
		padding-left: 0;
		&__item {
			text-align: center;
			font-size: rem(32);
			margin: rem(25) 0;
			&__link {
				text-decoration: none;
				&__text {
					color: $color-white;
					text-transform: uppercase;
					line-height: 40px;
				}

				&:hover {
					filter: drop-shadow(0px 0px 25px rgba(244, 247, 249, 1));
				}
			}
		}
	}
}
</style>
