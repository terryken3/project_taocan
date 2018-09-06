<template>
	<div class="k-body">
		<span>你好，请问有什么需要帮忙的吗</span>
		<p>说得对</p>
	</div>
</template>

<script>
//	import {mapGetters} from "vuex"
	export default{
//		computed:mapGetters({
//			msg:"GET_MSG"
//		})
	}
</script>

<style scoped>
	.k-body{
		border: 1px solid #ccc;
		background: #ccc;
		height: 1058px;
	}
	.k-body span{
		text-align: left;
		display: block;
		margin: 30px 20px;
		border: 1px solid #fff;
		padding: 20px;
		border-radius: 0px 30%;
		background: #fff;
	}
	.k-body p{
		text-align: right;
		margin: 30px 20px;
		border: 1px solid #fff;
		padding: 20px;
		border-radius:30% 0px;
		background: #fff;
	}
</style>