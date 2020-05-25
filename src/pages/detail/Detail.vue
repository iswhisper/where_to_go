<template>
	<div>
		<detail-banner 
		:bannerImg='bannerImg'
		:sightName='sightName'
		:gallaryImgs='gallaryImgs'></detail-banner>
		<detail-header :sightName="sightName"></detail-header>
		<detail-mhdinfo :sightName='sightName' :mhList='mhList'></detail-mhdinfo>
		<detail-tab :productList="productList"></detail-tab>
		<div class="container border-top">
			<detail-list :list='categoryList'>
			</detail-list>
		</div>
	</div>	
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailMhdinfo from './components/Mhdinfo'
import DetailTab from './components/ComTab'
import axios from 'axios'
export default{
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList,
		DetailMhdinfo,
		DetailTab
	},
	data () {
		return {
			 sightName:'',
			 bannerImg:'',
			 gallaryImgs:[],
			 categoryList:[],
			 mhList:[],
			 productList:[],
		}
	},
	methods:{
		getDetailInfo() {
			axios.get('/api/detail.json',{
				params:{
					id: this.$route.params.id
				}
			}).then(this.handleGetDataSuc)
		},
		handleGetDataSuc(res){
			res=res.data
			if(res.ret&&res.data){
				const data=res.data
				this.sightName=data.sightName
				this.bannerImg=data.bannerImg
				this.gallaryImgs=data.gallaryImgs
				this.categoryList=data.categoryList
				this.mhList=data.mhList
				this.productList=data.productList
			}
		},
	},
	mounted (){
		this.getDetailInfo()
	}
}
</script>

<style lang="stylus" scoped>
.ly-tab >>> .ly-tabbar
	box-shadow:none
.ly-tab >>> .ly-tab-item
	background: #f5f5f5;
	margin-right: 10px;
	display: inline-block;
	text-align: center;
	width: 158px;
	height: 30px;
	padding: 7px;
	vertical-align: top;
	position: relative;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	.ly-tab-item-label
		line-height: 30px;
	&::after
		pointer-events: none;
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		content: " ";
		border-color: #e0e0e0;
		border-style: solid;
		border-width: 1px;
		-webkit-transform-origin: 0 0;
		-moz-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		-o-transform-origin: 0 0;
		transform-origin: 0 0;
		width: 200%;
		height: 200%;
		-webkit-transform: scale(0.5);
		-moz-transform: scale(0.5);
		-ms-transform: scale(0.5);
		-o-transform: scale(0.5);
		transform: scale(0.5);
		-webkit-border-radius: 10px;
		border-radius: 10px
.ly-tab >>> .ly-tab-active-bar
	background: #ff9800;
	color: #fff;
	bottom:12px;
.container
	height:50rem
	margin-top: 15px
.border-top
	border-top: 10px solid #eee
</style>
