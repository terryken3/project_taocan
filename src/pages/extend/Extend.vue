<template>
	<section class="extend">
		<My-header title="扩展">
			<span class="iconfont icon-sousuo1" slot="h-left"></span>
			<span class="iconfont icon-wode_" slot="h-right"></span>
		</My-header>
		<ShopInfo></ShopInfo>
		
	</section>
</template>

<script>
	import MyHeader from "@/components/MyHeader";
	import ShopInfo from "@/components/ShopInfo";
	export default{
		components:{
			MyHeader,
			ShopInfo
		}
	};
</script>

<style>
	
</style>