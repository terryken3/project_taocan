<template>
	<div :class="{red:flag,item:true}" @click="clickItem()">
		<slot name="fontImg"></slot>
		<p>{{txt}}</p>
	</div>
</template>

<script>
	import { mapMutations} from "vuex";
	export default {
		props:["txt","mark","selec"],
		computed:{
			flag() {
				// console.log(this.$store.state.flag = this.mark);
				if(this.mark == this.selec) {
					return true;
				}
				return false;
			}
		},
		methods:{
			clickItem() {
				// 改变store中flag为当前mark值
				this.$store.state.flag = this.mark;
				// this.$emit("iChange",this.mark);
				// // 改变路由指向对应组件
				// this.$router.push("/"+this.mark);
			}
		}
	};
</script>

<style>
	.item{
		flex:1;
	}
	.red{
		color:red;
	}
</style>