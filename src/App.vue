<template>
	<main>
		<component :is="layout">
		<router-view/>
		</component>
	</main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import Default from './layouts/Default.vue';

const defaultLayout = Default
const route = useRoute();

 const layout = computed(() => {
	console.log(route.meta.layout);
	return (route.meta.layout || defaultLayout)
 });
</script>

<style lang="scss">
</style>