<template>
	<div class="header">
		<slot name="h-left"></slot>
		<slot name="title">{{title}}</slot>
		<slot name="h-right"></slot>
	</div>
</template>

<script>
	export default{
		props:["title"]
	};
</script>

<style>
	/*@import "../assets/libs/font_icon/iconfont.css";*/
	.header{
		width:750px;
		height:100px;
		line-height:100px;
		position:relative;
		z-index:888;
		top:0;
		background:#2395ff;
		font-size:36px;
		color:#fff;
	}
	.header .iconfont{
		font-size:50px;
	}
	.header span{
		cursor:pointer;
	}
	.header>span:first-child{
		font-weight:500;
		position:absolute;
		left:20px;
	}
	.header>a:last-child{
		position:absolute;
		right:20px;
		color:#fff;
	}
</style>