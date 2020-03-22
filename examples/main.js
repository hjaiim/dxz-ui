import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 通用css
import './assets/css/reset.css';

// 引入组件库
import dxzUi from '../packages'
Vue.use(dxzUi)

// demo块组件注册全局
import BlockDemo from './components/BlockDemo.vue';
Vue.component('DemoBlock', BlockDemo)

// demo代码高亮
import 'highlight.js/styles/color-brewer.css';

// 测试 scss
// import '../packages/dxz-styles/index.scss'

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");