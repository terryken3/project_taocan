<template>
	<div>
		<My-head text="常见问题">
			<a href="#" slot="left-icon">
				<!--<span  class=" icon iconfont icon-mute"></span>-->
				<img slot="left-icon" src="../../assets/libs/zzp-img/ic_bar_back_green.png" alt="" />
			</a>
		</My-head>
		<List text="支付问题">
			<img slot="nameL-img" src="../../assets/libs/zzp-img/abc_btn_check_to_on_mtrl_015.png" alt="" />
			<img slot="rightimg"  class="arrow2" src="../../assets/libs/zzp-img/ic_arrow_subject_tag_green_down.png" alt="" />
		</List>
		<List text="订单问题">
			<img slot="nameL-img" src="../../assets/libs/zzp-img/ic_failed.png" alt="" />
			<img slot="rightimg"  class="arrow2" src="../../assets/libs/zzp-img/ic_arrow_subject_tag_green_down.png" alt="" />
		</List>
		<List text="优惠问题" >
			<img slot="nameL-img" src="../../assets/libs/zzp-img/ic_feedback.png" alt="" />
			<img slot="rightimg"  class="arrow2" src="../../assets/libs/zzp-img/ic_arrow_subject_tag_green_down.png" alt="" />
		</List>
		<List text="其他问题" >
			<img slot="nameL-img" src="../../assets/libs/zzp-img/ic_action_overflow_icon_green.png" alt="" />
			<img slot="rightimg"  class="arrow2" src="../../assets/libs/zzp-img/ic_arrow_subject_tag_green_down.png" alt="" />
		</List>
	</div>
</template>

<script scoped>
	import MyHead from "@/components/zzp-Myhead"
	import List from "@/components/zzp-list"
	export default {
		components: {
			MyHead,
			List
		}
	}
</script>

<style scoped lang="less">
	/*@import "../../assets/libs/font_zzp/iconfont.css";*/
	
	img {
		width: 30px;
		height: 30px;
	}
	
</style>