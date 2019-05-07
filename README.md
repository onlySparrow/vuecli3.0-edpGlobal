## vue cli3.0 创建组建发布到npm

------------
## 一,开发组件
1, down下代码地址:

2, 执行命令安装依赖 npm install

3, package.json配置说明
	
	{
		"name": "edpGlobal",// npm包的名字,在npm中是唯一的,可在 NPM 上测试搜索
		"version": "0.1.0",//版本号，默认是 0.1.0 ，之后每次发布，都要修改版本号
		"description": "edp模块汇总",//对组件库的描述
		"main": "./dist/edpGlobal-module.min.js",,//入口文件，指向我们打包好的 js 文件
		"private": false,//设置为 false 才能发布
		"keywords": [],        //关键字,方便别人搜索
		"author": "",         //用户名 需要跟npm注册的用户名一致
		"scripts": {
			"serve": "vue-cli-service serve",
		    "build": "vue-cli-service build",
		    "lint": "vue-cli-service lint",
		    "lib": "vue-cli-service build --target lib --name vcolorpicker --dest lib components/index.js"
		}
	}
	```

**备注**

+ --target: 构建目标，默认为应用模式。这里修改为 lib 启用库模式。
+ --dest : 输出目录，默认 dist。这里我们改成 lib
+ [entry]: 最后一个参数为入口文件，默认为 src/App.vue。这里我们指定编译 packages/ 组件库目录。


4, vue.config.js配置说明

   ```javascript
    const path = require('path');
	function resolve(dir) {
		return path.join(__dirname, dir)
	}
	module.exports = {
		// 修改 src 为 examples
		pages: {
			index: {
				entry: 'examples/main.js',
				template: 'public/index.html',
				filename: 'index.html'
			}
		},
		lintOnSave: false,//禁止eslint
		// 强制内联CSS
		css: {
			extract: false
		},
		// 扩展 webpack 配置，使 components 加入编译
		chainWebpack: config => {
			config.module
				.rule('js')
				.include
				.add('components')//添加components
				.end()
				.use('babel')
				.loader('babel-loader')
				.tap(options => {
					// 修改它的选项...
					return options
				})
			config.resolve.alias
				.set('@', resolve('examples'))
		}
	}
```

5, 增加组件步骤
  + 在 components 创建新的文件夹并添加.vue和index.js  (需填写组建的name值)
  + 并在 components/index. js文件下加载组件

6, 打包组件 npm run lib

7,添加 .npmignore 文件，设置忽略发布文件
我们发布到 npm 中，只有编译后的 lib 目录、package.json、README.md才是需要被发布的。所以我们需要设置忽略目录和文件。

## 二, 上传组件
1,npm config set registry http://registry.npmjs.org   (如果配置了淘宝镜像，先设置回npm镜像)
2,npm login (登录账号信息,如果无账号需要自行注册)
3,npm publish (发布到npm上,登录npm官网即可查到)


## 三, 组建使用说明
## Install
```shell
npm install edpglobal -S
```

## Quick Start
在 `main.js` 文件中引入插件并注册
``` javascript
import Vue from 'vue'
import edpglobal from 'edpglobal'
Vue.use(edpglobal);
```

## Simple usage

```vue
<template>
	<div>
		<div class="edpglobal-item">
			<label>Switch: </label>
			<edp-switch v-model="lightSwitch">开关(开):</edp-switch>
			<edp-switch v-model="switchLight">开关(关):</edp-switch>
		</div>
		<edp-list :styleObject="styleObject" :listData="listData"></edp-list>
		<div class="page-content">
			<edp-colorpicker v-model="color" v-on:change="headleChangeColor"></edp-colorpicker>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				color: "#ff0000",
				lightSwitch: false,
				switchLight: true,
				styleObject:{
                    color: 'blue',
    				fontSize: '28px',
    				width:'100%'
                },
				listData: [{
						id: 1,
						title: 'one the dishes',
					},
					{
						id: 2,
						title: 'two the dishes',
					},
					{
						id: 3,
						title: 'three the dishes'
					},
					{
						id: 4,
						title: 'four the dishes'
					},
					{
						id: 5,
						title: 'five the dishes'
					}
				]
			}
		}
	}
</script>
```
