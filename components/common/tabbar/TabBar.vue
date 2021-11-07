<template>
  <div id="tab-bar" :class="{ 'tab-bar': !changeClass, 'tab-bar-down': changeClass }">
    <slot></slot>
  </div>
</template>

<script>
export default{
  name: 'TabBar',
  props:{
  	
  	changeClass:{
  		
  	},
  },
}
</script>

<style scoped="scoped">

  .tab-bar{
    display: flex;
    justify-content: space-around;
    
	color: #FFFFFF;
	
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    
	z-index: 99;
	
	}
	.tab-bar-down{
		display: flex;
		justify-content: space-around;
		background:#ffffff;
		
		color: #000000;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		box-shadow: 0 1px 1px rgba(204, 204, 204, 0.6);
		z-index: 99;
	}
</style>
