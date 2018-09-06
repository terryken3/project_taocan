<template>
	<div class="ress">
		<span><slot name="title">{{title}}</slot></span>
		<p><slot name="ma">{{ma}}</slot></p>
		<p><slot name="mar">{{mar}}</slot></p>
		<p><slot name="mark">{{mark}}</slot></p>
	</div>
</template>

<script>
	export default{
		props:["title","ma","mar","mark"],
		methods:{
			clickP:function(){
				var pDom=document.getElementsByTagName("p");
				
			}
		}
	}
</script>

<style scoped>
	.ress{
		width:90%;
		height: 100px;
		line-height: 100px;
		border-bottom: 1px solid #ccc;
		margin: 5px auto;
	}
	.ress span{
		float: left;
	}
	.ress p{
		border: 1px solid #ccc;
		float: left;
		margin-left: 5%;
		line-height: 40px;
		margin-top: 28px;
		padding: 0px 20px;
	}
</style>

<!--https://www.cnblogs.com/xinjie-just/p/5911086.html-->
	
	
	<!--对象-->
	<!--https://www.cnblogs.com/gaoya666/p/9071129.html-->
