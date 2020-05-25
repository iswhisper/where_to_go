<template>
	<div>
		<div class="header-fixed">
			<a  v-on:click="navigate()" class="header-fixed-back">
				<div class="iconfont header-abs-back">&#xe610;</div>
			</a>
			{{this.sightName}}
		</div>
	</div>
</template>

<script>
export default{
	name:'ActivityHeader',
	props:{
		sightName:String
	},
	methods:{
		navigate(){
			this.$router.go(-1);
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-fixed
 z-index:99
 position:fixed
 top:0
 left:0
 right:0
 height:$headerHeight
 line-height:$headerHeight
 text-align:center
 background:#fff
 color:$darkTextColor
 font-size:.32rem
 .header-fixed-back
  position:absolute
  top:0
  left:0
  right:0
  width:.64rem
  color:$darkTextColor
  font-size:.4rem
</style>
