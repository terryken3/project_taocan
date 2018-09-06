<template>
	<div class="ImportContent">
		<slot name="content"></slot>
		<p><slot name="info">{{info}}</slot></p>
	</div>
</template>

<script>
	export default{
		props:["info","content"]
	}
</script>

<style scoped>
	.ImportContent{
		margin: 15px auto;
	}
	.ImportContent input{
		width: 90%;
		margin: 0px auto;
		overflow: hidden;
		height: 60px;
		padding: 20px 20px;
		border: 1px solid #ccc;
		border-radius: 5px ;
	}
	input::-webkit-input-placeholder{
		color: #ccc;
		font-size: .35rem;
	}
	.ImportContent p{
		margin: 10px;
		text-align: left;
		text-indent: 1em;
		line-height: 40px;
		color: #ccc;
	}
</style>