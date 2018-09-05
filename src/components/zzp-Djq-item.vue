<template>
	<!--、、、￥-->
	<div class="container">
		<div class="top">
			<span class="leftimg"><slot name="leftimg"></slot></span>
			<div class="centerC">
				<span class="title">{{txt}}</span>
				<img src="../assets/libs/zzp-img/daijinquan 1.png" alt="" />
				<span class="time">{{time}}</span>
			</div>
			<div class="rightC">
				<span class="red"> {{price}}</span>
				<span class="use">{{price2}} </span>
			</div>
		</div>
		
		<div class="bottom">
			<span class="b-top">........................................................</span>
			<p class="b-des">
				<span>不可与满减、折扣商品、第二份半价活动优惠同时享受.在线支付专享</span>
				<a href="#">去 使 用 > </a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		deta: function() {
			return {

			}
		},
		props: ["txt","time","price","price2"]
	}
</script>

<style lang="less">
	.container {
		background:#fff;
		border:1px solid #aaa;
		box-shadow:0 0 5px 5px #ccc;
		width: 80%;
		margin: 15px auto;
		padding: 10px;
		/*			上面部分			*/
		.top {
			height:133px;
			&:after{
				content:"";
				display:block;
				clear:both;
			}
			.leftimg {
				float: left;
			}
			.centerC {
				height:100%;
				width: 50%;
				float: left;
				display: flex;
				flex-direction:column;
				align-items: flex-start;
				justify-content:space-around;
				padding-left:20px;
				box-sizing:border-box;
				span.title{
					font-size:30px;
					font-weight:900;
					font-family:"黑体";
				}
				img{
					width:25%;
				}
				span.time{
					font-size:20px;
				}
			}
			.rightC {
				/*background: orange;*/
				width: 20%;
				padding:15px;
				display: inline-block;
				float: right;
				.red{
					font-size:46px;
					font-weight:bold;
					color: red;
				}
				.use{
					font-size:26px;
				}
			}
		}
		/*    下面部分  		*/
		.bottom{
			span.b-top{
				color:#9e9e9e;
				font-size:36px;
				
			}
			p.b-des{
				span{
					color:#aaa;
					font-size:16px;
					display:inline-block;
					text-align:left;
					width:80%;
				}
				a{
					padding-right:20px;
					color:red;
					font-size:16px;
					float:right;
				}
			}
		}
	}
</style>