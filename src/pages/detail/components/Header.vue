<template>
	<div>
		<router-link tag='div' to='/' class="header-abs" v-show='showAbs'>
			<div class="iconfont header-abs-back">&#xe610;</div>
		</router-link>
		<div class="header-fixed"  :style='opacityStyle'>
			<router-link to='/' class="header-fixed-back">
				<div class="iconfont header-abs-back">&#xe610;</div>
			</router-link>
			{{this.sightName}}
		</div>
	</div>
</template>

<script>
export default{
	name:'DetailHeader',
	props:{
		sightName:String
	},
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opacity:0
			}
		}
	},
	methods:{
		//处理头部滚动渐隐渐显事件
		handleScroll(){
			const top= document.documentElement.scrollTop
			
			if(top>60){
				//向下滚动距离大于60显示蓝色导航栏，隐藏黑色返回图标
				let opacity=top/140
				opacity= opacity>1?1:opacity
				this.opacityStyle={ opacity }
				this.showAbs=false
			}else{
				let opacity=0
				this.opacityStyle={ opacity };
				this.showAbs=true
				console.log(top)
			}
		}
	},
	mounted() {
		window.addEventListener('scroll',this.handleScroll);
	},
	activated () {
		window.addEventListener('scroll',this.handleScroll)
	},
	deactivated() {
		window.removeEventListener('scroll',this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
 position:absolute
 left:.2rem
 top:.2rem
 width:.8rem
 height:.8rem
 line-height:.8rem
 background:rgba(0,0,0,.8)
 border-radius:.4rem
 text-align:center
 .header-abs-back
  color:#fff
  font-size:.4rem
.header-fixed
 z-index:99
 position:fixed
 top:0
 left:0
 right:0
 height:$headerHeight
 line-height:$headerHeight
 text-align:center
 background:$bgColor
 color:#fff
 font-size:.32rem
 .header-fixed-back
  position:absolute
  top:0
  left:0
  right:0
  width:.64rem
  color:#fff
  font-size:.4rem
</style>
