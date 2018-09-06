<template>
	<div class="tabbar">
		<Item txt="首页" mark="home" :selec="selected">
			<span slot="fontImg" class="iconfont icon-spoon_fork_F"></span>
		</Item>
		<Item txt="闪购" mark="find" :selec="selected">
			<span slot="fontImg" class="iconfont icon-flashlight_fill"></span>
		</Item>
		<Item txt="订单" mark="orders" :selec="selected">
			<span slot="fontImg" class="iconfont icon-meishi"></span>
		</Item>
		<Item txt="我的" mark="mine" :selec="selected">
			<span slot="fontImg" class="iconfont icon-guanliyuan"></span>
		</Item>
	</div>
</template>

<script>
	import Item from "./Item.vue"
	export default {
		components:{
			Item
		},
		data() {
			return {
				// selected:"home"
			}
		},
		computed:{
			selected() {
				return this.$store.state.flag;
			}
		},
		methods:{
			// getVal(val) {
			// 	this.selected = val;
			// }
		}
	};
</script>

<style scoped>
	@import "../assets/libs/font_icon/iconfont.css";
	.tabbar{
		display:flex;
		position:fixed;
		width:750px;
		border-top:1px solid #ccc;
		background-color: #fff;
		padding-top:3px;
		margin:0 auto;
		bottom:0;
	}
	.tabbar .iconfont{
		font-size:60px;
	}
</style>