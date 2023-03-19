<template>
	<the-header v-if="showMenu" />
	<div
		class="frame-layout"
		:class="{ frame__main: !showMenu }">
		<div class="frame-layout__wrapper">
			<slot />
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

const route = useRoute();

const showMenu = computed(() => {
	if (route.name == "Home") {
		return false;
	} else {
		return true;
	}
});
</script>

<style lang="scss" scoped>
.frame-layout {
	display: flex;
	justify-content: center;
	align-items: center;

	height: calc(100vh - rem(71));

	&.frame__main {
		height: 100vh;
	}

	&__wrapper {
		display: flex;

		width: 70%;
		height: 85%;

		border: 4px solid $color-gold;
	}
}

@media (max-width: 840px) {
	.frame-layout {
		height: 100%;

		&__wrapper {
			margin: rem(20) 0;
			width: 95%;
		}
	}
}

@media (max-height: 800px) {
	.frame-layout {
		&__wrapper {
			height: auto;
		}
	}
}
</style>
