<template>
	<div class="shopItem clearfix">
		<!-- 左边缩略图 -->
		<div class="s-left fl">
			<slot name="smallImg"></slot>
		</div>
		<!-- 右边信息 -->
		<div class="s-right fl">
			<div class="s-title">
				<h4>{{shopName}}</h4>
				<span class="cert-icon">
					<img src="../../static/img/certificated-icon.png" alt="证">
				</span>
			</div>
			<div class="s-info">
				<!-- 评分模块 -->
				<Score :shopScore="shopScore"></Score>
				<!-- 评分模块end -->
				<p class="shop-sold">
					<span>月售</span><em>{{shopSold}}</em>
				</p>
				
			</div>
			<p class="shop-line">
				<span>起送价:￥</span><em>{{startPrice}}</em>
				<span class="txt-split">|</span>
				<span>配送:￥</span><em>{{dFee}}</em>
				<span class="txt-split">|</span>
				<em class="d-time">{{dTime}}</em>
			</p>

		</div>
	</div>
</template>

<script>
import Score from "@/components/Score"
	export default {
		components:{
			Score
		},
		props:["shopName","shopScore","shopSold","startPrice","dFee","dTime"],
		mounted() {
			// 挂载结束测试先关数据用
			// console.log(this.shopScore);
		}
	};
</script>

<style lang="less" scoped>
/*字体颜色*/
@fontColor:#656565;
/*小字体*/
.smFont{
	font-size:24px;
	color:#656565;
}
/*文字隔断*/
.txt-split{
	color:#dcdcdc;
	position:relative;
	bottom:2px;
}

.shopItem {
	width:750px;
	padding:10px;
	padding-bottom:15px;
	border-bottom:1px solid #ccc;/*no*/
}
.s-left {
	width:168px;
	height:126px;
	border:1px solid #ccc;/*no*/
}
.s-right {
	width:552px;
	height:126px;
	margin-left:20px;
	text-align:left;
	h4{
		display:inline-block;
		width:480px;
		font-size:36px;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.cert-icon{
		img{
			width:35px;
			height:35px;
			margin-bottom:4px;
		}
	}
	.s-info{
		padding-top:8px;
		padding-left:4px;
	}
	.shop-sold{
		display:inline-block;
		position:relative;
		.smFont;
		bottom:4px;
	}
	.d-time{
		color:#ff455f;
	}
	.shop-line{
		.smFont;
		padding-top:8px;
	}
}
</style>