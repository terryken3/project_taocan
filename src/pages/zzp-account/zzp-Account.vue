<template>
	<div>
		<My-head text="我的账号">
			<router-link to="/" slot="left-icon">
				<!-- <span  class=" icon iconfont icon-angle-double-left"></span> -->
				<img src="../../assets/libs/zzp-img/ic_bar_back_green.png" alt="" />
			</router-link>
		</My-head>
		<List text="头像">
			<img slot="nameL" src="../../assets/libs/zzp-img/kf.png" alt="" />
			<img slot="rightimg"  class="arrow" src="../../assets/libs/zzp-img/ic_arrow_green_right.png" alt="" />
		</List>
		<List text="用户名" text-right="RGW324509">
			<img slot="rightimg"  class="arrow" src="../../assets/libs/zzp-img/ic_arrow_green_right.png" alt="" />
		</List>
		<List text="密码账号" text-right="修改">
			<img slot="rightimg"  class="arrow" src="../../assets/libs/zzp-img/ic_arrow_green_right.png" alt="" />
		</List>
		<List text="手机号" text-right="138****4509">
			<img slot="rightimg"  class="arrow" src="../../assets/libs/zzp-img/ic_arrow_green_right.png" alt="" />
		</List>
		<List text="微信账号" text-right="解绑">
			<img slot="rightimg"  class="arrow" src="../../assets/libs/zzp-img/ic_arrow_green_right.png" alt="" />
		</List>
		<List text="注销账号" text-right="注销后无法恢复,请谨慎操作">
			<img slot="rightimg"  class="arrow" src="../../assets/libs/zzp-img/ic_arrow_green_right.png" alt="" />
		</List>
		<div class="exit">
			<a href="#">退出当前账号</a>
		</div>
	</div>
</template>

<script>
	import MyHead from "@/components/zzp-Myhead"
	import List from "@/components/zzp-list"
	export default {
		components: {
			MyHead,
			List
		}
	};
</script>

<style scoped lang="less">
	
	img {
		width: 30px;
		height: 30px;
	}
	
	.exit {
		line-height: 80px;
		width: 750px;
		height: 80px;
		position: fixed;
		bottom: 110px;
		background: #aaa;
		font-size: 25px;
		a {
			color: red;
		}
	}
</style>