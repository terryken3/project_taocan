import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);
// const state = {
// 	flag: 0
// }
// const mutations = {
// 	clickItem: state => {state.flag = this.mark;console.log(state.flag)}
// }
const store = new Vuex.Store({
	state: {
		flag:"home"
	},
	getters: {
		
	},
	mutations: {
		clickItem: ( state, mark ) => {
			state.flag = mark || 0;
			console.log(state.flag);
		}
	},
	actions: {

	},
	modules: {

	}
});
export default store;