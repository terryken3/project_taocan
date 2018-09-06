<template>
	<div class="subtn">
		<button><slot name="title">{{title}}</slot></button>
	</div>
</template>

<script>
	export default{
		props:["title"]
	}
</script>

<style scoped>
	.subtn button{
		background: #ff3636;
		color: #fff;
		padding: 10px 20px;
		width: 90%;
		height: 60px;
		margin: 0px auto;
		font-size: .35rem;
		border: 1px solid transparent;
	}
</style>