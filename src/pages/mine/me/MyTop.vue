<template>
	<div class="mytop">
		<span><slot name="returnImg"></slot></span>
		<span><slot name="keys">{{keys}}</slot></span>
		<span><slot name="title">{{title}}</slot></span>
		<span><slot name="header-r">{{rtitle}}</slot></span>
		
	</div>
</template>

<script>
	export default{
		props:["title","keys","rtitle"]
	}
</script>

<style scoped>
	.mytop{
		height: 100px;
		line-height: 100px;
		background: #e9e9e9;
		box-sizing: border-box;
		width: 100%;
		margin-bottom: 20px;
	}
	.mytop span{
		float: left;
		padding-left:5%;
	}
	.mytop span:nth-of-type(3){
		float: none;
	}
	.mytop span:last-of-type{
		float: right;
		padding-right:5%;
	}
</style>