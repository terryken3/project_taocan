<template>
	<div class="small-box">
		<h4 class="title">{{title}}</h4>
		<p class="des">{{des}}</p>
		<div class="img"><slot name="img"></slot></div>
	</div>
</template>

<script>
export default {
	props:["title","des"]
};
</script>

<style lang="less">
@iwidth:170px;
@iheight:170px;
.small-box{
	width:@iwidth;
	.title{
		font-size:38px;
		font-weight:bold;
	}
	.des{
		font-size:30px;
		color:#aaa;
	}
}
.img{
	position:relative;
	width:@iwidth;
	height:@iheight;
	overflow:hidden;
	text-align:center;
	img{
		width:@iwidth;
		height:@iheight;
	}
}
</style>