<template>
	<div>
		<div class='banner' @click="handleBannerClick">
			<img :src="bannerImg" alt="" class="banner-img">
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe64a;</span>
					{{this.gallaryImgs.length}}
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary :imgs='gallaryImgs' v-show='showGallary' @close='handleBannerClose'></common-gallary>
		</fade-animation>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
import FadeAnimation from 'common/fade/Fade.vue'
export default{
	name:'DetailBanner',
	components:{
		CommonGallary,
		FadeAnimation
	},
	props:{
		gallaryImgs:Array,
		sightName:String,
		bannerImg:String,
	},
	data () {
		return {
			showGallary:false,
		}
	},
	methods:{
		handleBannerClick () {
			this.showGallary=true
		},
		handleBannerClose () {
			this.showGallary=false
		}
	}
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 10px
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
