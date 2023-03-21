<template>
	<main
		@fixed="addClass($event)"
		:class="{ fixed: fixedMode }">
		<component :is="layout">
			<router-view />
		</component>
	</main>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import Default from "./layouts/Default.vue";

const defaultLayout = Default;
const route = useRoute();
const fixedMode = ref(false);

const layout = computed(() => {
	return route.meta.layout || defaultLayout;
});

const addClass = (event) => {
	fixedMode.value = event;
};
</script>

<style lang="scss"></style>
