<template>
<div>
 <home-header></home-header>
 <home-swiper :list='swiperList'></home-swiper>
 <home-icons :list='iconList'></home-icons>
 <home-recommend :list='recommendList'></home-recommend>
 <home-weekend :list='weekendList'></home-weekend>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
		HomeIcons,
		HomeSwiper,
		HomeRecommend,
		HomeWeekend
  },
	data () {
		return {
			lastCity:'',
			swiperList:[],
			iconList:[],
			recommendList:[],
			weekendList:[]
		}
	},
	computed:{
		  ...mapState(['city'])
	},
	methods: {
		getHomeInfo () {
			axios.get('/api/index.json?city='+this.city)
			.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			res= res.data
			if(res.ret && res.data){
				const data =res.data
				for(let i in data){
					if(data[i].city==this.city){
						this.swiperList= data[i].swiperList
						this.iconList=data[i].iconList
						this.recommendList=data[i].recommendList
						this.weekendList=data[i].weekendList
					}
				}
			}
		}
  },
	mounted () {
		this.getHomeInfo()
	},
	activated() {
		if(this.lastCity !== this.city){
			this.lastCity=this.city
			this.getHomeInfo()
		}
		
	}
}
</script>

<style>
</style>
