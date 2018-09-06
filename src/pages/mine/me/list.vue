<!---->
<template>
	<div class="list">
		<span><slot name="title">{{title}}</slot></span>
		<span><span><slot name="info">{{info}}</slot></span><slot name="return"></slot></span>
	</div>
</template>

<script>
	export default {
		props:["title","info"],
		
	}
</script>

<style scoped>
	.list{
		width: 90%;
		height: 80px;
		line-height: 80px;
		padding: 10px 0;
		margin: 0 auto;
		border-bottom: 1px solid #ccc;
	}
	.list span{
		float: left;
		height: 80px;
		line-height: 80px;
	}
	.list span:nth-of-type(2){
		float: right;
	}
	.list span span:nth-of-type(1){
		float: left;
		color: #ccc;
	}
</style>