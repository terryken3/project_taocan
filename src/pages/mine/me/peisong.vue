<template>
	<!--dispatching.vue-->
	<div class="peisong" @blur="outBlur()">
		<slot name="mark">{{mark}}</slot>
		<span><slot name="title">{{title}}</slot></span>
		<slot name="iconStyle"></slot>
		<slot name="id"></slot>
		<slot name="Import"></slot>
	</div>
</template>

<script>
	export default{
		props:["mark","title","id"],
		methods:{
			outBlur:function(){
				var id = this.id;
				var reg=new RegExp();
				var val=document.getElementsByTagName("input")[id];
				switch(id){
					case "0":
						//姓名判断
						reg=/^[\u4e00-\u9fa5]{2,4}$/;
						if(val.value==""){
							console.log("不能为空！0")
						}else if(!reg.test(val.value)){
							console.log("长度不正确或者包含非法字符")
						}
						break;
					case "1":
						//手机号码判断
						reg=/^1[3|4|5|7|8]\d{9}$/;
						if(val.value==""){
							console.log("不能为空！1")
						}else if(val.value.length!=11){
							console.log("长度不正确")
						}else if(!reg.test(val.value)){
							console.log("长度不正确或者包含非法字符")
						}
						break;
					case "2":
						//邮箱判断
						reg=/^(\w)+@(\w)+(\.)(\w)+/;
						if(val.value==""){
							console.log("不能为空！2")
						}else if(!reg.test(val.value)){
							console.log("长度不正确或者包含非法字符")
						}
						break;
					case "3":
						//金额判断
						reg=/^1\d$/;
						if(val.value==""){
							console.log("不能为空！3")
						}else if(!reg.test(val.value)){
							console.log("包含非法字符")
						}
						break;
				}
			}
		}
	}
</script>

<style scoped>
	.peisong{
		width:90%;
		height: 100px;
		line-height: 100px;
		border-bottom: 1px solid #ccc;
		margin: 5px auto;
	}
	.peisong span{
		height: 100px;
		line-height: 100px;
		margin-right: 10px;
		float: left;
	}
	.peisong span:nth-of-type(1){
		
	}
	.peisong span:nth-of-type(3){
		float: right;
		color: #ccc;
		padding-right: 5%;
	}
	.peisong input{
		width: 60%;
		box-sizing: border-box;
		float: right;
		margin-top: 20px;
		border: 1px solid transparent;
		color: #ccc;
		padding: 15px 10px;
		outline: none;
	}
	input::-webkit-input-placeholder{
		color: #ccc;
		font-size: .32rem;
	}
</style>