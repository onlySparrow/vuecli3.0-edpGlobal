<template>
	<div class="home">
		<h1>这是列表页</h1>
		<!--<HelloWorld msg="Welcome to HelloWorld" />-->
		<edp-list :styleObject="styleObject" :listData="listData"></edp-list>

	</div>
</template>

<script>
//	import HelloWorld from "@/components/HelloWorld.vue";

	export default {
		name: "home",
//		components: {
//			HelloWorld
//		},
		data() {
			return {
				styleObject: {
					color: 'grey',
					fontSize: '28px',
					width: '100%',

				},
				listData: [{
						id: 1,
						title: '1111111111 listData',
					},
					{
						id: 2,
						title: '2 listData',
					},
					{
						id: 3,
						title: '3 listData'
					}
				]
			}
		}
	};
</script>