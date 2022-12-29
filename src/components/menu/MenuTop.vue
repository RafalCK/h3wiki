<template>
	<div class="menu">
		<ul class="menu__list">
			<template v-for="(item, index) in menu">
				<li class="menu__item">
					<a class="menu__link" :href="item.url" @click="item.action">
						<span class="menu__text">{{item.name}}</span>
					</a>
				</li>
			</template>
		</ul>
	</div>
	</template>
	
	
	<script setup>
	
	const menu = [
		{
			name : "Jednostki",
			url: "/towns",
			img: "units.png"
		},
		{
			name : "Lokacje",
			url: "/location",
			img: "location.png"
		},
		{
			name : "Artefakty",
			url: "/artefact",
			img: "artefact.png"
		},
		{
			name : "Magia",
			url: "/magic",
			img: "magic.png"
		},
		]

	
	</script>
	
	
	<style lang="scss" scoped>
	
	.menu {
		height: rem(70);
		background: url('/assets/images/bg.gif');
		border-bottom: 1px solid $color-gold;
		filter: drop-shadow(0px 3px 10px rgba(244, 247, 249, 1));

	
		&__list {
			list-style: none;
			height: 100%;

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			max-width: $wrapper-width;
			margin: 0 auto;

			padding: 0 rem(10);
			text-decoration: none;
		}

		&__item {
			&:hover {
    		filter: drop-shadow(0px 0px 25px rgba(244, 247, 249, 1));
		}
		}

		&__link {
			text-decoration: none;
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