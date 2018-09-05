<template>
	<div class="s-score">
		<span class="rate">
			<span class="rate-inner" :style="{width:shopScore*10+'%'}"></span>
		</span>
	</div>
</template>

<script>
	export default {
		props:{
			shopScore:{
				default:8
			}
		}
	};
</script>

<style lang="less" scoped>
	/* 评分栏宽度设置	 */
	@scoreWidth:152px;
	@scoreHeight:24px;

	.s-score {
		display:inline-block;
	  width: @scoreWidth;
	  font-size: 12px;/*px*/
	  color: gray;
	}
	.s-score .rate {
	  background: url(../../static/img/rate_5stars.png) no-repeat scroll transparent;
	  color: #F70600;
	  display: inline-block;
	  font-weight: 700;
	  height: @scoreHeight;
	  overflow: hidden;
	  width: @scoreWidth;
	  background-size:@scoreWidth auto;
	}
	.s-score .rate .rate-inner {
	  background: url(../../static/img/inner_5stars.png) no-repeat scroll transparent;
	  display: inline-block;
	  height:@scoreHeight;
	  vertical-align: top;
	  background-size:@scoreWidth auto;
	}
</style>