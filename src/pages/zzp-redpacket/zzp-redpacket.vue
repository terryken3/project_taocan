<template>
	<div>
		<My-head text="美团红包" righttext="兑换">
			<a href="#" slot="left-icon">
				<!--<span  class=" icon iconfont icon-mute"></span>-->
				<img slot="left-icon" src="../../assets/libs/zzp-img/ic_bar_back_green.png" alt="" />
			</a>
		</My-head>
		<div class="info-center">
			<span class="test"><img src="../../assets/libs/zzp-img/ic_failed.png"  alt="" />
			美团红包、商家代金劵使用说明</span>
		</div>
		
		<div class="info-content">
			<p class="header">
				<span class="left">美食红包</span>
				<span class="right">￥5</span>
			</p>
			<p class="time">
				<span class="left">有效期至2018.08.29</span>
				<span class="right">满28可用</span>
			</p>
			<br />
			<span class="bg"></span>
			<br />
			<span>限非到店自取订单，下午茶、夜宵、美食频道使用。仅限13825256724使用。</span>
		</div>
		
		<p class="end">没有更多有效劵了 | 查看无效劵<a href="#"> >> </a></p>
		
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
	
	.info-content {
		width: 82%;
		height: 280px;
		margin: 20px auto;
		background: #eef;
		font-size:22px;
		box-shadow:15px 15px 15px #aaa;
		/*span.left{
			float:left;
		}
		span.right{
			float:right;
		}*/
		p{
			width:90%;
			padding:20px;
			/*background:#eee;*/
			/*margin:20px 0;*/
			span.left{
				float:left;
			}
			span.right{
				float:right;
			}
		}
		p.header{
			height:30px;
			line-height:30px;
			span{
				font-size:30px;
			}
			span.left{
				font-weight: 900;
				font-size:30px;
				font-family:"宋体";
			}
			span.right{
				font-size:40px;
				color:red;
			}
		}

		p.time{
			
		}
		span.bg{
			display:inline-block;
			background:red;
			height:1px;
			width:90%;
			margin:20px 0;
		}
	}
	
	p.end{
		font-size:20px;
		padding:20px 0;
	}
</style>