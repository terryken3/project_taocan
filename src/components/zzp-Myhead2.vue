<template>
	<div class="MyHead">
		<slot name="left-icon"></slot>
		<span class="centerName">{{text}}</span>
		<span class="rightName">{{righttext}}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: ''
			}
		},
		props: ["text","righttext"]
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.MyHead {
		padding:10px;
		height: 40px;
		line-height: 40px;
		background: #FF800011;
		text-align: center;
		font-size: 26px;
		a {
			float: left;
			padding-left: 10px;
			img {
				width: 40px;
				height: 40px;
			}
		}
		.rightName{
			float:right;
			padding-right:40px;
			font-size:36px;
			letter-spacing: 8px;
			
			width:69%;
			/*溢出隐藏*/
			white-space:nowrap;
			overflow:hidden;
			text-overflow:ellipsis;
		}
	}
	
</style>