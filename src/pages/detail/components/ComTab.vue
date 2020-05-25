<template>
	<div>
		<ly-tab v-model="selectedId" v-if="productList.length" :items="productList" :options="options" @change="handleChange" class='border-top'>
		</ly-tab>
		<div class="m-multiple-date">
			<div :class="[activeIndex==index?'item item-on':'item']" v-if="dateList.length" v-for="(item,index) in dateList" :key="index" @click="handleDate(index)">
				<div class="tit">{{item.title}}</div>
				<div class="price"><span><span class="yen">¥</span><span>5399</span></span></div>
			</div>
			<router-link tag="div" :to="{ name: 'DateList', params: { id: '001' }}" class="item">
				<div class="iconfont tit yo-ico">&#xe603;</div>
				<div class="desc">更多日期</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailTab',
		data() {
			return {
				dateList:[],
				selectedId:0,
				activeIndex:'',
				options: {
					activeColor: '#ff9800',
				},
			}
		},
		props:{
			productList:Array
		},
		methods: {
			handleChange(itemObj, i) {
				this.selectedId = i
				this.dateList = this.productList[i].List;
				this.activeIndex=0
			},
			loaderData(){
				this.dateList = this.productList[0].List;
			},
			handleDate(index){
				this.activeIndex=index
			}
		},
		watch:{
			productList(){
				this.dateList = this.productList[0].List;
			}
		},
	}
</script>

<style lang="stylus" scoped>
.ly-tab>>>.ly-tabbar 
	box-shadow:none 
.ly-tab>>>.ly-tab-item 
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
	line-height: 30px;
.ly-tab-item-label 
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
.ly-tab>>>.ly-tab-active-bar
	background: #ff9800;
	color: #fff;
	bottom:12px;
	&::before
		content: '';
		position: absolute;
		font-size: 0;
		line-height: 0;
		bottom: -6px;
		left: 50%;
		margin-left: -7px;
		z-index: 1000;
		border-left: 7px solid transparent;
		border-right: 7px solid transparent;
		border-top: 7px solid #ff9800;
.border-top 
	border-top: 10px solid #eee
.m-multiple-date
	padding: 5px .15rem 10px;
	background: #fff;
	margin-bottom: 10px;
	font-size: 0;
	.item
		/* text-align: center; */
		padding: 6px;
		font-size: 0;
		display: inline-block;
		width: 1.2rem;
		margin-right: .1rem;
		height: 0.5rem;
		margin-bottom: 7px;
		position: relative;
		-webkit-border-radius: 4px;
		border-radius: 4px;
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
			-webkit-border-radius: 8px;
			border-radius: 8px;
		.tit
			font-size: 12px;
			color: #212121;
			line-height: .25rem;
		.price
			font-size: 12px;
			color: #ff9800;
			.yen
				margin-top: -2px;
				display: inline-block;
		.desc
			font-size: 10px;
			color: #212121;
	.item-on
		background: #ff9800;
		.price,.yen,.tit
			color: #fff;
</style>
