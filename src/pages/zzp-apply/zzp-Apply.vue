<template>
	<div>
		<My-head text="关闭" righttext="美团外卖-开店申请-商商商商商商商">
			<a href="#" slot="left-icon">
				<!--<a  class=" icon iconfont icon-mute"></a>-->
				<img slot="left-icon" src="../../assets/libs/zzp-img/ic_bar_back_green.png" alt="" />
			</a>
		</My-head>

		<div class="navWrap">
			<a><Item  txt="开店流程" ></Item></a>
			<a><Item  txt="开店要求" ></Item></a>
			<a><Item  txt="资费查询" ></Item></a>
			<a><Item  txt="常见问题"></Item></a>
		</div>

	</div>
</template>

<script scoped>
	import MyHead from "@/components/zzp-Myhead2"
	import Item from "@/components/zzp-applyItem"
	export default {
		components: {
			MyHead,
			Item
		}
	}
</script>

<style scoped lang="less">
	/*@import "../../assets/libs/font_zzp/iconfont.css";*/
	
	img {
		width: 30px;
		height: 30px;
	}
	
	.navWrap {
		width: 100%;
		height: 50px;
		background: red;
		a{
			background:#fff;
			width:20%;
			height:50px;
			box-sizing:border-box;
			display:inline-block;
			font-size:16px;
			
		} 
	}
</style>