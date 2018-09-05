<template>
	<div class="item">
		{{txt}}
	</div>
</template>

<script>
	export default {
		props:["txt","mark","sel"]

	}
</script>

<style scoped>
	
	.item{
		/*flex:1;*/
		text-align: center;
	}
	
</style>