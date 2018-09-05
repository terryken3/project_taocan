<template>
	<div class="slide">
		<ul>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
			<li><a href="#">APP优惠套餐</a></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'slide',
  data () {
    return {
    	
    }
  }
};
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	ul,li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.slide{
		position: absolute;
		left: 0;
		top: 60px;
		width: 80px;
		height: 667px;
		border: 1px solid #ccc;
		box-sizing: border-box;
		overflow: scroll;
	}
	.slide ul {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.slide ul li{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height:80px ;
		padding-left: 5px;
		border-bottom: 1px solid #ccc;
	}
	.slide ul li:last-of-type{
		border: none;
	}
	/*滚动条样式*/
	::-webkit-scrollbar{
		width: 1px;
		height: 1px;
		background: transparent!important;
		color: transparent!important;
	}
</style>
