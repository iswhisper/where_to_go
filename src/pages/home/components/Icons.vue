<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide  v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl"/>
					</div>
					<p class="icon-decs">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
  name: 'HomeIcons',
	data () {
		return {
			 swiperOption: {
			    pagination: '.swiper-pagination',
			  },
			iconList:[{
				id:'0001',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/hotel.png',
				desc:'酒店'
			},
			{
				id:'0002',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
				desc:'机票'
			},
			{
				id:'0003',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
				desc:'度假'
			},
			{
				id:'0004',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
				desc:'火车票'
			},
			{
				id:'0005',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
				desc:'景点门票'
			},
			{
				id:'0006',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/hotel.png',
				desc:'酒店'
			},
			{
				id:'0007',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
				desc:'景点门票'
			},
			{
				id:'0008',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/package.png',
				desc:'度假'
			},
			{
				id:'0009',
				imgUrl:'//s.qunarzz.com/homenode/images/touchheader/flight.png',
				desc:'机票'
			}]
		}
	},
	props:{
		  list:Array
	},
	computed: {
		pages () {
			//一页显示8个功能组件
			const pages=[]
			this.list.forEach((item,index)=>{
				const page= Math.floor(index/8)  //计算每个组件在那一页
				if(!pages[page]){
					pages[page]=[]
				}
				pages[page].push(item)       //填充数据
			})
			return pages;
		}
	}
}
</script>

<style lang="stylus" scoped>
	 @import '~styles/varibles.styl'
	 @import '~styles/mixins.styl'
	.icons
	 overflow:hidden
	 height:0
	 padding-bottom:48%
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			margin-top:.24rem
			padding-bottom:20%
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				.icon-img-content
					display:block
					margin:0 auto
					height:100%
			.icon-decs
				position:absolute
				left:0
				right:0
				bottom:0
				height:.44rem
				line-height:.44rem
				text-align: center
				color: $darkTextColor
				ellipsis()
				

</style>

