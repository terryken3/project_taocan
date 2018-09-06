<template>
	<div class="hezuo">
		<slot name="iconStyle"></slot>
		<p>{{title}}</p>
		<br />
		<p>{{info}}</p>
		<button>{{btnName}}</button>
	</div>
</template>

<script>
	export default {
		props:["title","info","btnName"]
	}
</script>

<style scoped>
	.hezuo{
		width:100%;
		border-bottom: 1px solid #ccc;
		padding: 12px 0;
		height: 80px;
	}
	.hezuo span{
		width: 80px;
		float: left;
		line-height: 80px;
		border: 1px solid #ccc;
		border-radius: 50%;
		margin-left: 5%;
	}
	.hezuo p{
		width: 60%;
		float: left;
		margin-top: 10px;
		margin-left:15px;
		text-align: left;
	}
	.hezuo p:nth-of-type(2){
		color: #ccc;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.hezuo button{
		float: right;
		padding-right: 5%;
		border: 1px solid yellow;
		background: yellow;
		color: #000000;
		font-size: 16px;
		padding: 20px;
		margin-top: -32px;
		margin-right: 5%;
	}
</style>