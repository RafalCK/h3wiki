<template>
	<the-header/>
	<div class="default-layout">
		<div class="default-layout__wrapper">
			<slot/>
</div>
</div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'

</script>

<style lang="scss" scoped>
	.default-layout {
		&__wrapper {
			max-width: rem(960);

			margin: rem(10) auto;

			padding: rem(10) rem(10);

			background: white;
			border-radius: rem(4);

			background: url('/assets/images/bg.gif');

			color: white;
		}
	}
</style>