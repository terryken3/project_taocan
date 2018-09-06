<template>
	<div class="k-header">
		<span class="icon icon--xiaochao"></span>
		<img src="../../../../static/img/100e04c5926882e11e6b87c0242ac110003_638w_640h.jpg" width="90" height="90"/>
		<span class="icon icon-dangao"></span>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.k-header{
		height: 80px;
		line-height: 80px;
		text-align: center;
		border: 1px solid #ccc;
		overflow: hidden;
		padding: 10px 0;
	}
	.k-header img{
		border: 1px solid #ccc;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 30px;
		margin-left: -45px;
	}
	.k-header span{
		float: left;
		margin: 5px 5%;
		width: 40px;
	}
	.k-header span:nth-of-type(2){
		float: right;
	}
</style>