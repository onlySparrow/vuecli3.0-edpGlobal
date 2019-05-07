<template>
  <div class="about">
    <h1>这是拾色板</h1>
    <div class="page-content">
			<edp-colorpicker v-model="color" v-on:change="headleChangeColor"></edp-colorpicker>
		</div>
  </div>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				color: "#ff0000"
			};
		},
		methods: {
			headleChangeColor(color) {
		      console.log(`颜色值改变事件：${color}`);
		    }
		}
	};
</script>

<style scoped lang="sass">
</style>