/*
 * @Author:  
 * @Email:  
 * @Date: 2019-04-28 18:00:00 
 * @Last Modified by: 
 * @Last Modified time: 
 * @Description: 
 */
// 导入组件
import edpColorpicker from './edpColorpicker'
import edpList from './edpList'
import edpSwitch from './edpSwitch'

// 存储组件列表
const components = [
  edpColorpicker,
  edpList,
  edpSwitch
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件 支持使用标签的方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  edpColorpicker,
  edpList,
  edpSwitch
}