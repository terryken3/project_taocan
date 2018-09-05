<template>
	<div class="list">
		<div class="container">
			<!--左侧部分-->
			<span class="img-left"><slot name="nameL-img" ></slot></span>
			<span class="text">{{text}}</span>
			
			<!--右侧部分-->
			<div class="content">
				<span class="imgtext">
					<slot name="nameL" ></slot>
					{{textRight}}
				</span> 
				<a href="#">
					<slot name="rightimg"></slot>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ["text", "text-right"]
	}
</script>

<style scoped lang="less">
	.list {
		width: 100%;
		height: 60px;
		padding-left: 30px;
		box-sizing: border-box;
		.container {
			padding: 10px;
			box-sizing: border-box;
			border-bottom: 1px #aaa solid;
			text-align: left;
			height: 50px;
			line-height: 24px;
			.img-left{
				float:left;
				padding:0 5px;
			}
			.text {
				font-size: 20px;
				font-weight:900;
			}
			div.content {
				display: inline-block;
				float: right;
				padding-right: 10px;
				.imgtext {
				font-size: 18px;
					padding-right: 10px;
				}
				/*我的评论插槽*/
				.arrow {
					float: right;
					padding:0 10px 0 20px;
					width:15px;
					height:30px;
				}
				/*常见问题的插槽*/
				.arrow2{
					float: right;
					padding:0 10px 0 20px;
					width:30px;
					height:15px;
				}
			}
		}
	}
</style>