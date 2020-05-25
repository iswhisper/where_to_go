<template>
	<div class="activity">
		<div class="item"
		v-for="(item,index) of list"
		:key="index">
			<div class="">
				<span class="item-title">{{item.title}} </span>
			</div>
			<div class="item-chilren">
				{{item.desc}}
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'ActivityList',
	props:{
	  list:Array
	}
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .activity
   padding:0 .3rem
   padding-top:$headerHeight
   margin-top:.3rem
  .item-title
    display: inline-block;
    padding: 1px 10px;
    font-size: 12px;
    margin-bottom: 10px;
    line-height: 20px;
    height: 20px;
    position: relative;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border-radius: 3px;
    font-weight: 500;
    &::after
     width: 300%;
     height: 300%;
     -webkit-transform: scale(0.3333);
     -moz-transform: scale(0.3333);
     -ms-transform: scale(0.3333);
     -o-transform: scale(0.3333);
     transform: scale(0.3333);
     -webkit-border-radius: 9px;
     border-radius: 9px
     pointer-events: none;
     position: absolute;
     z-index: 999;
     top: 0;
     left: 0;
     content: " ";
     border-color: #888;
     border-style: solid;
     border-width: 1px;
     -webkit-transform-origin: 0 0;
     -moz-transform-origin: 0 0;
     -ms-transform-origin: 0 0;
     -o-transform-origin: 0 0;
     transform-origin: 0 0;
  .item-chilren
     margin-bottom: .5rem;
</style>
