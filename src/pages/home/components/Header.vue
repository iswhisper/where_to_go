<template>
 <div class="header">
	 <div class="header-left">
		 <span class="iconfont back-icon">&#xe610;</span>
	 </div>
	 <div class="header-input"><span class="iconfont">&#xe60b;</span>请输入城市/景点/游戏主题</div>
	<router-link to="/city">
		 <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe6aa;</span></div>
	</router-link>
 </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed:{
	  ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display:flex
		background:$bgColor
		color:#fff
		line-height:$headerHeight
		.header-left
			width:.64rem
			float:left
			.back-icon
				text-align:center
				font-size:.4rem
		.header-input
			flex:1;
			margin-top:.12rem
			margin-left:.2rem
			color:#666
			height:.64rem
			text-align:left
			padding-left:.2rem
			line-height:.64rem
			background:#fff
			border-radius:.1rem
		.header-right
			float:right
			touch-action: none; 
			min-width:1.04rem
			padding:0 .1rem
			text-align:center
			color:#fff;
			.arrow-icon
				font-size:.3rem
</style>
