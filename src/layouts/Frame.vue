<template>
	<div class="frame-layout">
		<div class="frame-layout__wrapper">
			<slot/>
		</div>
</div>
</template>

<script setup>

</script>


<style lang="scss" scoped>
.frame-layout {
	display: flex;
    justify-content: center;
    align-items: center;

	height: 100vh;

	&__wrapper {
	display: flex;

	width: 70%;
	height: 80%;

	border: 4px solid $color-gold;
	}
}

@media (max-width: 840px) {
	.frame-layout {
			height: 100%;
		}
}
</style>