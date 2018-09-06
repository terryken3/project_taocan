<template>
	<div class="ZhExit">
		<button><slot name="title">{{title}}</slot></button>
	</div>
</template>

<script>
	export default{
		props:["title"]
	}
</script>

<style scoped>
	.ZhExit{
		width: 100%;
		line-height: 100px;
		background: #fff;
		box-sizing: border-box;
		position: absolute;
		bottom: 0px;
		padding: 10px;
		left: 0px;
		border-top: 1px solid #ccc;
	}
	.ZhExit button{
		display: block;
		padding: 10px 20px;
		background: #fff;
		border: 1px solid transparent;
		margin: 0 auto;
		color: red;
		font-size: 36px;
	}
</style>
