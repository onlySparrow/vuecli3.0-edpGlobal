<template>
	<div id="app">
		<div>
			<div id="nav">
				<router-link to="/">拾色板</router-link>|
				<router-link to="/edpList">列表</router-link> |
				<router-link to="/edpSwitch">按钮</router-link> 
			</div>
			<router-view />
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

<style lang="less">
	/*@import "assets/style.scss";*/
	#app{
		margin: 20px;
		text-align: center;
	}
</style>