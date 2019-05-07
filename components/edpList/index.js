/*
 * @Author:  
 * @Email:  
 * @Date: 2019-04-28 18:00:00 
 * @Last Modified by: 
 * @Last Modified time: 
 * @Description: 
 */
// 导入组件
import edpList from './edpList.vue'

// 为组件提供 install 安装方法，供按需引入
edpList.install = function (Vue) {
  Vue.component(edpList.name, edpList)
}

// 默认导出组件
export default edpList
