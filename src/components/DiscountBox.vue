<template>
	<div class="discount-box" :style="{'background-image':'url('+bg+')'}">
		<span class="flag" :style="{'background-color':flagBg}">{{flag}}</span>
		<h4>{{title}}</h4>
		<span class="des">{{des}}</span>
	</div>
</template>

<script>
	export default {
		props:["bg","title","flag","flagBg","des"]
	};
</script>

<style lang="less">
.discount-box{
	display:inline-block;
	position:relative;
	width:350px;
	height:220px;
	background-size:cover;
	.flag,.des{
		display:inline-block;
		height:30px;
		line-height:30px;
		color:#fff;
		padding:0 12px;
		border-bottom-right-radius:20px;
		background:#fb505f;
	}
	h4{
		background:rgba(0,0,0,.6);
		height:50px;
		line-height:50px;
		font-size:36px;
		color:#fff;
		text-align:center;
		width:220px;
		margin-top:50px;

	}
	.des{
		display:inline-block;
		background:#fcd25c;
		color:#6a463a;
		border-radius:0;
	}
}
</style>