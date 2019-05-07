/*
 * @Author:  
 * @Email:  
 * @Date: 2019-04-28 18:00:00 
 * @Last Modified by: 
 * @Last Modified time: 
 * @Description: 
 */
// 导入组件
import edpSwitch from './edpSwitch';
// 为组件提供 install 安装方法，供按需引入
edpSwitch.install = Vue => Vue.component(edpSwitch.name, edpSwitch);
// 默认导出组件
export default edpSwitch;