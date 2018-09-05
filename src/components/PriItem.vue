<template>
	<div class="primary-item fl">
		<span :class="['bg-icon', bgStyle]">
			<span v-if="iconTxt" class="icon-txt">{{iconTxt}}</span>
			<span :class="{'icon-inner':iconTxt,'icon-inner-center':!iconTxt}">
				<slot name="icon-inner"></slot>
			</span>
		</span>
		<br/>
		<h5 class="title">{{title}}</h5>
	</div>
</template>

<script>
	export default{
		props:["iconTxt","title","bgStyle"]
	};
</script>

<style lang="less" scoped>
.grad(@startColor,@endColor){
  background: -webkit-linear-gradient(left top, @startColor, @endColor); /* Safari */
  background: -o-linear-gradient(left top, @startColor, @endColor); /* Opera 11.6 to 12.0 */
  background: -moz-linear-gradient(left top, @startColor, @endColor); /* Firefox 3.6 to 15 */
  background: linear-gradient(left top, @startColor, @endColor); /* 标准语法 */
}
.grad-red{
	.grad(#ffb27a,#ff5f49);
}
.grad-blue{
	.grad(#5dc1f6,#137cdc);
}
.grad-green{
	.grad(#a0e531,#4fcb1c);
}
.grad-orange{
	.grad(#ffc162,#ff8f21);
}
.grad-yellow{
	.grad(#fcdf74,#feb222);
}
.grad-pink{
	.grad(#fd96b9,#f9598b);
}
.grad-skyblue{
	.grad(#79e4d3,#45bfd6);
}
.grad-purple{
	.grad(#e484ed,#a24ae0);
}

.primary-item{
	position:relative;
	margin-top:28px;
	width:186px;
	.bg-icon{
		position:relative;
		display:inline-block;
		overflow:hidden;
		width:100px;
		height:100px;
		border-radius:50%;
		.icon-txt{
			position:absolute;
			white-space:nowrap;
			color:#feefef;
			font-family:"微软雅黑";
			font-size:30px;
			top:0;
			left:50%;
			transform: translate(-50%,50%);
		}
		.icon-inner{
			position:absolute;
			color:#feefef;
			font-size:50px;
			bottom:0;
			left:50%;
			transform: translate(-50%,25%);
		}
		.icon-inner-center{
			position:absolute;
			color:#feefef;
			font-size:50px;
			left:50%;
			transform: translate(-50%,40%);
		}
	}
	.title{
		font-size:26px;
		text-align:center;
	}

}
</style>