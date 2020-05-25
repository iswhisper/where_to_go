<template>
	<div>
		<div class="item" v-for="(item,index) of list" :key="index">
			<div class="item-title border-bottom">
				<span class="item-title-icon"></span>
				{{item.title}}
			</div>
			<div v-if="item.children" v-for='inneritem of item.children' class="item-chilren border-bottom">
				<div class="flex g-flexbox">
					<h5>{{inneritem.title}}</h5>
					<p class="item-desc">{{inneritem.desc}}</p>
				</div>
				<div class="price">
					<span class="cont">
					<span class="yen">¥</span>
					<span class="num">{{inneritem.price}}</span>
					<span data-v-1c9d56e8="" class="per">起</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailList',
		props: {
			list: Array
		}
	}
</script>

<style lang="stylus" scoped>
	.item
	 padding:.1rem
	 .item-title-icon
	  position: relative 
	  left: .06rem 
	  top: .06rem 
	  display: inline-block 
	  width: .36rem 
	  height: .36rem 
	  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat 
	  margin-right: .1rem 
	  background-size: .4rem 3rem 
	 .item-title 
	   line-height: .7rem 
	   font-size: .32rem 
	   padding: 0 .2rem 
	 .item-chilren
	   padding:.2rem .3rem
	   display:flex
	  .g-flexbox
	   	-webkit-box-align: center;
	   	-webkit-align-items: center;
	   	-moz-box-align: center;
	   	-ms-flex-align: center;
	   	align-items: center;
	  .flex
	   -webkit-box-flex: 1;
	   -webkit-flex: 1;
	   -moz-box-flex: 1;
	   -ms-flex: 1;
	   width: 100%;
	   height: auto;
	   display: block;
	   .item-desc
	    font-size:12px
	    color:#ccc
	    line-height:.5rem
	  .price
	   margin-right: -15px;
	   font-size: 0;
	   .yen,.num
	     color: #ff8300;
	   .status
	   	 padding-top: 7px;
	   .cont
	   	 padding-right: 10px;
	   .yen
	   	 font-size: 14px;
	   	 font-weight: 500;
	   	.num
	   	 padding-right: 1px;
	   	 font-size: 18px;
	   	 font-weight: 500;
	   	.per
	   	 font-size: 12px;
	   	 color: #9e9e9e;
</style>
