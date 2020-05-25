<template>
	<div>
		<div class="title">热门推荐</div>
		<ul>
			<router-link
			tag='li' 
			class="item border-bottom" 
			v-for="item of list"
			:key="item.id"
			:to="'/detail/'+ item.id ">
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
	props:{
		  list:Array
	},
  data () {
	  return{
	  }
  }
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
	  margin-top: .2rem
	  line-height: .6rem
	  background: #eee
	  text-indent: .2rem
	  text-align: left
	  font-weight:700
	 .item
	   overflow: hidden
	   display: flex
	   height: 1.9rem
	   .item-img
	     width: 1.9rem
	     height: 1.5rem
	     padding: .2rem
	   .item-info
	     flex: 1
	     padding: .1rem
	     min-width: 0
	     text-align: left
	     .item-title
	       line-height: .54rem
	       font-size: .32rem
	       ellipsis()
	     .item-desc
	       line-height: .4rem
	       color: #ccc
	       ellipsis()
	     .item-button
	       line-height: .44rem
	       margin-top: .16rem
	       background: #ff9300
	       padding: 0 .2rem
	       font-size: .24rem
	       border-radius: .06rem
	       color: #fff
</style>
