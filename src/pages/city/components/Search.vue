<template>
	<div>
		<div class="search">
			 <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名称">
		</div>
		<div  class="search-content" ref="search" v-show="keyword">
			 <ul>
			  <li
			    class="search-item border-bottom"
			    v-for="item of list"
			    :key="item.id"
			    @click="handleClickCity(item.name)"
			  >
			    {{item.name}}
			  </li>
			  <li class="search-item border-bottom" v-show="hasNoData">
			    没有找到匹配数据
			  </li>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
	name: 'CitySearch',
	props:{
		cities:Object
	},
	data () {
		return {
			keyword: '',
			timer:null,
			list:[]
		}
	},
	methods:{
		handleClickCity(city){
			this.changeCity(city);
			this.keyword=''
			//跳回到首页
			this.$router.push('/')
		},
		...mapMutations(['changeCity'])
		
	},
	computed:{
		hasNoData () {
			return !this.list.length
		}
	},
	watch:{
		keyword () {
			if(this.timer){
				clearInterval(this.timer)
			}
			//如果输入框没有输入字符，清空遍历数组
			if(!this.keyword){
				this.list=[]
				return
			}
			this.timer=setInterval(()=>{
				const result=[];
				for(let i in this.cities){
					this.cities[i].forEach((value)=>{
						if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
						  result.push(value)
						}
					})
				}
				this.list=result;
			},100)
		}
	},
	mounted () {
		this.scroll=new Bscroll(this.$refs.search)
	}
}
</script>

<style lang="stylus" scoped="">
	@import '~styles/varibles.styl'
	.search
	 height:.72rem
	 background: $bgColor
	 padding:0 .1rem
	 .search-input
	  box-sizing:border-box
	  height:.62rem
	  padding:0 .1rem
	  width:100%
	  text-align:center
	  border-radius:.06rem
	.search-content
	  z-index: 1
	  overflow: hidden
	  position: absolute
	  top: 1.58rem
	  left: 0
	  right: 0
	  bottom: 0
	  background: #eee
	  .search-item
	    line-height: .62rem
	    padding-left: .2rem
	    background: #fff
	    color: #666
</style>
