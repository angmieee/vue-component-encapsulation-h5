import Vue from 'vue';
import App from './App.vue';
import { PullRefresh, List, Image, Cell, Tab, Tabs } from 'vant';
import 'vant/lib/index.css';

// 方式一. 通过 Vue.use 注册
// 注册完成后，在模板中通过 <van-button> 或 <VanButton> 标签来使用按钮组件
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Image);
Vue.use(Cell);
Vue.use(Tab);
Vue.use(Tabs);

new Vue({
    el: '#app',
    render: (h) => h(App),
});
