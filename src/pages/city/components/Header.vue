<template>
	<div class="header">
		城市选择
		<router-link to='/'>
			<div class="iconfont header-back"> &#xe610;</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'CityHeader'
}
</script>

<style lang="stylus" scoped="">
	@import '~styles/varibles.styl'
	.header
	 touch-action: none; 
	 position:relative
	 height:$headerHeight
	 overflow:hidden
	 line-height:$headerHeight
	 text-align:center
	 background:$bgColor
	 color:#fff
	 font-size:.32rem
	 .header-back
	  position:absolute
	  top:0
	  left:0
	  width:.64rem
	  text-align:center
	  font-size:.4rem
	  color:#fff
</style>
