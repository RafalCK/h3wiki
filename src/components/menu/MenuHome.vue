<template>
	<div class="menu">
		<ul class="menu__list">
			<template
				v-for="item in menu"
				:key="item.id">
				<li
					class="menu__item"
					:style="{ backgroundImage: `url(${imageUrl(item.img)})` }">
					<router-link
						:to="{ path: item.url }"
						class="menu__link">
						<span class="menu__text">{{ item.name }}</span>
					</router-link>
				</li>
			</template>
		</ul>
	</div>
</template>

<script setup>
const imageUrl = (item) => {
	return new URL(`/src/assets/images/menu/${item}`, import.meta.url).href;
};
const menu = [
	{
		id: 0,
		name: "Units",
		url: "/towns",
		img: "units.png",
	},
	{
		id: 1,
		name: "Locations",
		url: "/locations",
		img: "location.png",
	},
	{
		id: 2,
		name: "Artifacts",
		url: "/artifacts",
		img: "artefact.png",
	},
	{
		id: 3,
		name: "Magics",
		url: "/magics",
		img: "magic.png",
	},
];
</script>

<style lang="scss" scoped>
.menu {
	height: 100%;

	&__list {
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	&__item {
		display: flex;
		align-items: center;
		justify-content: center;

		height: rem(100);
		background-size: rem(100);
		background-position: center center;
		background-repeat: no-repeat;

		&:hover {
			filter: drop-shadow(0px 0px 25px rgba(244, 247, 249, 1));
		}
	}

	&__link {
		display: flex;
		align-items: center;
		justify-content: center;

		text-decoration: none;

		height: 100%;
	}

	&__text {
		background-image: repeating-linear-gradient(#eee 0px, #ebc622 15px, #eee 30px);
		font-size: rem(30);
		font-weight: 700;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		filter: drop-shadow(0 1px 3px black) drop-shadow(0 1px 2px black) drop-shadow(0 1px 1px black);
	}
}

@media (max-width: 840px) {
	.menu {
		margin-right: 0;

		&__item {
			margin: rem(15) 0;
		}

		&__list {
			padding: 0;
		}
	}
}
</style>
