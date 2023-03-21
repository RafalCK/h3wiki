<template>
	<div class="header">
		<div class="header__top">
			<menu-top />
		</div>
		<div class="header__menu-mobile">
			<button
				class="header__menu-mobile__btn"
				@click="openMenu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24">
					<rect
						x="2"
						y="4"
						width="20"
						height="3"
						rx="1"
						ry="1"
						fill="#fff" />
					<rect
						x="2"
						y="11"
						width="20"
						height="3"
						rx="1"
						ry="1"
						fill="#fff" />
					<rect
						x="2"
						y="18"
						width="20"
						height="3"
						rx="1"
						ry="1"
						fill="#fff" />
				</svg>
			</button>
			<menu-mobile v-if="mobileNavMenu" />
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import MenuTop from "../../components/menu/MenuTop.vue";
import MenuMobile from "../../components/menu/MenuMobile.vue";

const mobileNavMenu = ref(false);

const route = useRoute();
console.log(route);

const openMenu = () => {
	mobileNavMenu.value = !mobileNavMenu.value;
};

watch(route, () => {
	if ((mobileNavMenu.value = true)) {
		mobileNavMenu.value = false;
	}
});
</script>

<style scoped lang="scss">
.header {
	&__menu-mobile {
		display: flex;
		justify-content: center;

		&__btn {
			display: none;
			position: fixed;
			top: 0%;
			right: rem(12);
			width: rem(36);
			height: rem(36);
			border: 1px solid $color-gold;
			background: $color-gold;
			cursor: pointer;
			z-index: 9;
		}
	}
}

@media (max-width: 480px) {
	.header {
		&__menu-mobile {
			&__btn {
				display: block;
			}
		}
	}
}
</style>
