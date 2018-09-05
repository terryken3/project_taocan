<template>
	<div>
		<My-head text="消息中心">
			<a href="#" slot="left-icon">
				<!--<span  class=" icon iconfont icon-mute"></span>-->
				<img slot="left-icon" src="../../assets/libs/zzp-img/ic_bar_back_green.png" alt="" />
			</a>
		</My-head>
		<List text="商家代金劵" info="'YASO沙拉 (新安店)'送您一张'4元'代金劵" time="2018.8.21">
			<img slot="nameL-img" class="arrow" src="../../assets/libs/zzp-img/info (1).png" alt="" />
		</List>
		<List text="李鹏" info="您的电话一直无法接通,请尽快与我联系" time="2018.8.11">
			<img slot="nameL-img" class="arrow" src="../../assets/libs/zzp-img/info (2).png" alt="" />
		</List>
		<List text="系统通知">
			<img slot="nameL-img" class="arrow" src="../../assets/libs/zzp-img/info (3).png" alt="" />
		</List>
		<List text="售后通知">
			<img slot="nameL-img" class="arrow" src="../../assets/libs/zzp-img/info (4).png" alt="" />
		</List>
		<List text="客服消息">
			<img slot="nameL-img" class="arrow" src="../../assets/libs/zzp-img/info (5).png" alt="" />
		</List>

	</div>
</template>

<script scoped>
	import MyHead from "@/components/zzp-Myhead"
	import List from "@/components/zzp-lis-2infot"
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
		width: 70px;
		height: 70px;
	}
</style>