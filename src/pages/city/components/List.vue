<template>
	<div class="list" ref='wrapper'>
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for='item of hot'  :key="item.id">
						<div class="button" @click="handleClickCity(item.name)">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item,key) of cities" :key='key' :ref='key'>
				<div class="title border-topbottom">{{key}}</div>
				<ul class="item-list">
					<li class="item border-bottom" v-for='inneritem of item' :key="inneritem.id"  @click="handleClickCity(inneritem.name)">
						{{inneritem.name}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
	name:'CityList',
	props: {
	  hot: Array,
	  cities: Object,
	  letter: String
	},
	computed:{
		  ...mapState({
			  currentCity:'city'
		  })
	},
	mounted () {
	 this.scroll = new Bscroll(this.$refs.wrapper)
	},
	watch: {
		letter () {
			if(this.letter){
				//获取到对应的dom元素
				const element =this.$refs[this.letter][0]
				//定位到对应的列表出
				this.scroll.scrollToElement(element)
			}
		}
	},
	methods:{
		handleClickCity(city){
			this.changeCity(city);
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-topbottom
	 &:before
	  border-bottom:1px solid #ccc;
	 &:after
	  border-color: #ccc
	.border-bottom
	 &:before
	  border-color: #ccc
	.list
	 position:absolute
	 top:1.58rem
	 left:0
	 bottom:0
	 right:0
	 overflow:hidden
	 .title
	  background:#eee
	  color:#666
	  line-height:.54rem
	  font-size:.26rem
	  padding-left:.26rem
	 .button-list
	  overflow:hidden
	  padding: .1rem .6rem .1rem .1rem
	 .button-wrapper
	  float: left
	  width: 33.33%
	  .button
	   border-radius:.06rem
	   border:.02rem solid #ccc
	   text-align:center
	   padding:.1rem 0
	   margin:.1rem
	 .item-list
	  width:100%
	  .item
	   line-height:.76rem
	   padding-left:.2rem
	  
</style>
