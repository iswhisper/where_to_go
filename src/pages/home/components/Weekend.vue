<template>
	<div>
		<div class="title">周末去哪儿</div>
		<router-link 
			tag='div' 
			class="item border-bottom" 
			:key="item.id"
			:to="'/weekend/'+ item.id " 
			v-for="item of list" >
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props:{
  	  list:Array
  },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .6rem
    background: #eee
    text-indent: .2rem
    text-align:left
    font-weight:700
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    text-align:left
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
