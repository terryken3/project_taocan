<template>
	<div class="chebox">
		<label>{{sex}}</label>
		<input type="radio" name="xb" />
	</div>
</template>

<script>
	export default{
		props:["sex"]
	}
</script>

<style scoped>
	.chebox{
		height: 80px;
		line-height: 80px;
	}
	.chebox input{
		line-height: 80px;
		margin-left:-10%;
	}
	.chebox input[type="radio"]+label::after{
		content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="40" cy="40" r="40" fill="none" stroke="#ededed" stroke-width="3"/></svg>'); 
		display: inline-block;
		vertical-align: middle;
		position: absolute;
		left: 37%;
		top: 17.4%;
	}
	
	.chebox input[type="radio"]+label:checked:after{
	  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="40" cy="40" r="40" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
	}
	.chebox input[type="radio"]{
		position: absolute;
		clip: rect(0,0,0,0);
	}
	

	
</style>

<!---->
	<!--url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')-->
