<template>
	<div class="k-footer" @keyup="clickUp()">
		<span class="icon icon-caipin"></span>
		<input type="text" placeholder="请描述您的问题"/>
		<button @click="clickContent" v-if="flag">发送</button>
	</div>
</template>

<script>
//	import {mapState} from "vuex"
	export default{
		data(){
			return {
				flag:false,
//				msg:state=>state.msg
			}
		},
		methods:{
			clickUp:function(){
				var inputVal=document.getElementsByTagName("input")[0].value;
				if(inputVal.length>0){
					this.flag=true;
				}else if(inputVal.length<=0){
					this.flag=false;
				}
			},
			clickContent:function(){
//				var inputDom=document.getElementsByTagName("input")[0].value;
//				this.msg=inputDom;
//				this.$store.commit("SET_MSG",this.msg)
			}
		}
	}
</script>

<style scoped>
	.k-footer{
		height: 75px;
		box-sizing: border-box;
		line-height: 75px;
		display: flex;
	}
	.k-footer span{
		float: left;
		width: 10%;
		box-sizing: border-box;
	}
	.k-footer input{
		width: 80%;
		box-sizing: border-box;
		padding-left: 20px;
		font-size: .3rem;
		border: 1px solid transparent;
		outline: none;
	}
	.k-footer button{
		box-sizing: border-box;
		float: right;
		width: 10%;
		font-size: .3rem;
		border-radius: 50%;
	}
	input::-webkit-input-placeholder{
		color: #ccc;
		font-size: .35rem;
	}
	.active{
		display: block!important;
	}
</style>