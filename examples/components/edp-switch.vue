<template>
	<div class="home">
		<h1>这是按钮</h1>
		<div class="edpglobal-item">
			<label>Switch: </label>
			<edp-switch v-model="lightSwitch">开关(开):</edp-switch>
			<edp-switch v-model="switchLight">开关(关):</edp-switch>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lightSwitch: false,
				switchLight: true,
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