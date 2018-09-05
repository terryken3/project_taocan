import Vue from 'vue'
import Router from 'vue-router'

// 引入页面组件
import Home from "@/pages/home/Home"
import Find from "@/pages/find/Find"
import Extend from "@/pages/extend/Extend"
import Mine from "@/pages/mine/Mine"
import Orders from "@/pages/orders/Orders"
import Account from "@/pages/zzp-account/zzp-Account"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
    	path: "/home",
    	component: Home
    },
    {
    	path: "/find",
    	component: Find
    },
    {
    	path: "/extend",
    	component: Extend
    },
    {
    	path: "/orders",
    	component: Orders
    },
    {
    	path: "/mine",
    	component: Mine
    },
    {
        path: "/account",
        component: Account
    }
  ]
})