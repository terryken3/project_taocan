// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex状态管理仓库

import store from "./store/store.js"
// 若运行的浏览器为IE，不支持promise语法的话，可以加载插件
// npm install es6-promise --save # npm
// import 'es6-promise/auto'

// 引入reset.css样式文件
import "./assets/libs/css/reset.css"

// 引入淘宝lib-flexible.js插件
import "lib-flexible"

// 引入字体图标文件
import "./assets/libs/font_icon/iconfont.css"

// 引入mint-ui插件
import { Picker, Popup, Button } from "mint-ui";
Vue.component(Picker.name,Picker);
Vue.component(Popup.name,Popup);
Vue.component(Button.name,Button);
import "mint-ui/lib/style.css";

// 引入高德地图vue-amap 插件
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '7a5cd4f67dfd27c2813f806e47aa5ee9',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
// 引入高德地图vue-amap 插件end

Vue.config.productionTip = false

// 用到axios模块进行数据的请求
// 引入axios vue-axios文件
import Axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios,Axios);
// 引入axios vue-axios文件end

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
