<template>
	<div class="menu">
		<ul class="menu__list">
			<li class="menu__item">
				<router-link
					:to="{ name: 'Home' }"
					class="menu__link">
					<svg
						width="34"
						height="34"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
							fill="#B7A553" />
					</svg>
				</router-link>
			</li>
			<template
				v-for="item in menu"
				:key="item.id">
				<li class="menu__item">
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
import router from "../../router";

const goBack = () => router.back();

const menu = [
	{
		id: 0,
		name: "Towns",
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
	{
		id: 4,
		name: "Back",
		url: "/",
		action: goBack,
	},
];
</script>

<style lang="scss" scoped>
.menu {
	height: auto;
	background: url("/assets/images/bg.gif");
	border-bottom: 1px solid $color-gold;
	filter: drop-shadow(0px 3px 10px rgba(244, 247, 249, 1));

	&__list {
		list-style: none;
		min-height: rem(70);

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		max-width: $wrapper-width;
		margin: 0 auto;

		padding: 0 rem(10);
		text-decoration: none;
	}

	&__item {
		cursor: pointer;
		&:hover {
			filter: drop-shadow(0px 0px 25px rgba(244, 247, 249, 1));
		}
	}

	&__link {
		display: flex;
		text-decoration: none;

		&.active {
			filter: drop-shadow(0px 0px 25px rgba(244, 247, 249, 1));
		}
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
			padding: 0 rem(10);
		}

		&__text {
			font-size: rem(14);
		}
	}
}

@media (max-width: 480px) {
	.menu {
		display: none;
	}
}
</style>
