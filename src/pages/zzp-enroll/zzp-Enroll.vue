<template>
	<div>
		<My-head text="快速报名通道">
			<a href="#" slot="left-icon">
				<!--<span  class=" icon iconfont icon-mute"></span>-->
				<img slot="left-icon" src="../../assets/libs/zzp-img/ic_bar_back_green.png" alt="" />
			</a>
		</My-head>
		<img src="../../assets/libs/zzp-img/kuais.png" alt="" />
		<div class="info">
			<input type="text" placeholder="手机号码" />
			<input type="button" value="我要去美团" />
			<p>留下电话,3个工作日内获得面试安排</p>			
		</div>
	</div>
</template>

<script scoped>
	import MyHead from "@/components/zzp-Myhead"
	export default {
		components: {
			MyHead
		}
	}
</script>

<style scoped lang="less">
	/*@import "../../assets/libs/font_zzp/iconfont.css";*/
	
	img {
		width: 750px;
		height: 650px;
	}
	.info{
		border:#aaa 1px solid;
		height:200px;
		margin-bottom:100px;
		display:flex;
		justify-content:space-around;
		flex-direction:column;
		font-size:19px;
		input{
			font-size:22px;
			height:40px;
		}
	}
	
</style>