<template>
	<div>
		<My-head text="商家代金券">
			<a href="#" slot="left-icon">
				<!--<span  class=" icon iconfont icon-mute"></span>-->
				<img slot="left-icon" src="../../assets/libs/zzp-img/ic_bar_back_green.png" alt="" />
			</a>
		</My-head>
		<div class="info-center">
			<span class="test"><img src="../../assets/libs/zzp-img/ic_failed.png"  alt="" />
			美团红包、商家代金劵使用说明</span>
		</div>
		
		<!--每一个time项-->
		
		<Djq txt="乐凯撒披萨(欢..." time="有效期至2018.09.02" price="￥40" price2="满90可用">
			<img class="leftimg" src="../../assets/libs/zzp-img/daijinquan 2.png" slot="leftimg" alt="" />
		</Djq>
		<Djq txt="遇见牛堡回(当..." time="有效期至2018.08.31" price="￥23" price2="满30可用">
			<img class="leftimg" src="../../assets/libs/zzp-img/daijinquan 3.png" slot="leftimg" alt="" />
		</Djq>
		<Djq txt="老上海混沌铺(..." time="有效期至2018.09.01" price="￥23" price2="满30可用">
			<img class="leftimg" src="../../assets/libs/zzp-img/daijinquan 4.png" slot="leftimg" alt="" />
		</Djq>
		<Djq txt="皇家炸鸡拌饭(..." time="有效期至2018.09.02" price="￥23" price2="满30可用">
			<img class="leftimg" src="../../assets/libs/zzp-img/daijinquan 5.png" slot="leftimg" alt="" />
		</Djq>
		
	</div>
</template>

<script>
	import MyHead from "@/components/zzp-Myhead"
	import Djq from "@/components/zzp-Djq-item"
	export default {
		components: {
			MyHead,
			Djq
		}
	}
</script>

<style scoped lang="less">
	/*@import "../../assets/libs/font_zzp/iconfont.css";*/
	
	.info-center {
		height: 40px;
		line-height: 40px;
		color: #9e9e9e;
		background: #ffffcc;
		.test {
			img {
				width: 40px;
				height: 40px;
				vertical-align: middle;
			}
			font-size:18px;
		}
	}
	.leftimg{
		height:120px;
		width:120px;
		padding:10px 0 0 10px;
	}
	
</style>