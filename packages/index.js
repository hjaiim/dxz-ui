// 引入组件
import Button from './button'

// 引入组件列表
const components = [
    Button
]

// 定义 install 方法，接收 Vue 作为参数
const install = Vue => {
    // 是否安装   
    if (install.installed) return
    install.installed = true
    // 遍历注册所有组件    
    components.map(component => {
        if (typeof component === 'undefined' || !component.name) return;
        Vue.component(component.name, component)
    })
}

// 挂载了Vue 才执行
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default { install, ...components }