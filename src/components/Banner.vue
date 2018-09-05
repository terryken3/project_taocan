<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<div :style="{'text-align':paginationPositon}" :class="{'swiper-pagination':paginationshow}"></div>
		</div>
	</div>
</template>

<script>
	//引入js插件
	import "../assets/libs/swiper/js/swiper.js"
	export default {
		props:{
			paginationshow:{
				type:Boolean,
				default:true
			},
			paginationClickable:{
				type:Boolean,
				default:true
			},
			autoplay:{
				type:Number,
				default:2000
			},
			loop:{
				type:Boolean,
				default:true
			},
			paginationPositon:{
				type:String,
				default:"center"
			},
			paginationType:{
				type:String,
				default:"bullets"
			}
		},
		mounted(){
			new Swiper(".swiper-container",{
				pagination:".swiper-pagination",
				loop:this.loop,
				autoplay:this.autoplay,
				autoplayDisableOnInteraction:true,//用户操作完轮播图之后，继续轮播
				paginationType:this.paginationType,
				paginationClickable:this.paginationClickable
			});
		}
	};
</script>

<style>
	/*引入css样式 后面必须加分号*/
	@import "../assets/libs/swiper/css/swiper.css";
	.banner{
		height: 272px;
		overflow:hidden;
	}
	.banner img{
		/*height:100%;*/
		width:100%;
	}
	.swiper-pagination-bullet-active{
		background: #fff;
	}
</style>