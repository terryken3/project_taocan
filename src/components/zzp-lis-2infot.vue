<template>
	<div class="list">
		<div class="container">
			<!--左侧部分-->
			<span class="img-left"><slot name="nameL-img" ></slot></span>
			<div class="right">
				<p><span class="text">{{text}}</span><span class="time">{{time}}</span></p>
				<p v-if="flag"><span class="info">{{info}}</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
//				flag:true//computed里定义过了
			}
		},
		computed:{
			flag() {
				if(this.info == '') {
					return true;
				}
				return false;
			}
		},
		props: ["text", "info","time"]
	}
</script>

<style scoped lang="less">
	.list {
		width: 100%;
		height: 90px;
		padding-left: 30px;
		box-sizing: border-box;
		.container {
			padding: 10px;
			box-sizing: border-box;
			border-bottom: 1px #aaa solid;
			text-align: left;
			height: 90px;
			line-height: 24px;
			.img-left{
				float:left;
				padding:0 5px;
			}
			div.right{
				height: 80px;
				display:flex;
				flex-direction:column;
				justify-content:space-around;
				align-items:space-around;;
				p{
					display:inline-block;
					padding-left:20px;
					width:90%;
					/*line-height:35px;*/
					.text{
						font-size: 20px;
						font-weight:900;
					}
					.time{
						font-size:18px;
						float:right;
						color:#9e9e9e;
					}
					.info{
						font-size:18px;
						padding:0;
						/*background:red;*/
						/*float:left;*/
						color:#9e9e9e;
					}
				}
			}
			
		}
	}
</style>