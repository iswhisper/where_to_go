<template>
	<div class="m-hdinfo">
		<div class="self-support"><span class="tag tag-solid">去哪儿出境旗舰店</span><span class="tag tag-blue">自营</span><span class="desc">官方推荐，聪明旅行</span></div>
		<div class="title">{{this.sightName}} </div>
		<div class="price">
			<div class="g-flexbox">
				<div class="flex g-flexbox"><span class="cont"><span class="yen">¥</span><span class="num">6780</span><span class="per">起/人</span></span></div>
				<div class="status">24小时前有预订</div>
			</div>
		</div>
		<div class="tag-list g-flexbox">
			<div class="flex tag-wraper"><span class="g-tag"><span class="txt">现金红包</span></span><span class="g-tag"><span class="txt">专享红包</span></span><span
				 class="g-tag"><span class="txt">代金券</span></span></div>
			<router-link tag="div" :to="{ name: 'Activity', params: { id: '001' }}" class="iconfont yo-ico ico-arrow">&#xe701;</router-link>
		</div>
		<div class="properties g-flexbox" data-sk-eid="hy_ptag">
			<div class="flex"><span class=""><i class="iconfont ico yo-ico">&#xe601;</i><span class="ico-text">舒适游</span></span><span class=""><i
					 class="iconfont ico yo-ico">&#xe601;</i><span class="ico-text">二次确认</span></span><span class=""><i class="iconfont ico yo-ico">&#xe601;</i><span
					 class="ico-text">无购物</span></span></div>
			<router-link tag="div" :to="{ name: 'Activity', params: { id:'002' }}" class="iconfont yo-ico ico-arrow">&#xe701;</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailMhdinfo',
		props:{
			sightName:String,
		}
	}
</script>

<style lang="stylus" scoped>
.g-tag
	height: 15px;
	line-height: 1;
	display: inline-block;
	margin-right: 8px;
	padding: 2px 3px 1px;
	text-align: center;
	color: #ff8300;
	font-weight: 500;
	position: relative;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	 .txt
		vertical-align: top;
		display: inline-block;
		font-size: 12px;
		-webkit-transform: scale(0.83333);
		-moz-transform: scale(0.83333);
		-ms-transform: scale(0.83333);
		-o-transform: scale(0.83333);
		transform: scale(0.83333);
		white-space: nowrap;
	&::after
		width: 300%;
		height: 300%;
		-webkit-transform: scale(0.3333);
		-moz-transform: scale(0.3333);
		-ms-transform: scale(0.3333);
		-o-transform: scale(0.3333);
		transform: scale(0.3333);
		-webkit-border-radius: 6px;
		border-radius: 6px;
		pointer-events: none;
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		content: " ";
		border-color: #ff8300;
		border-style: solid;
		border-width: 1px;
		-webkit-transform-origin: 0 0;
		-moz-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		-o-transform-origin: 0 0;
		transform-origin: 0 0;
.m-hdinfo 
	position: relative;
	z-index: 2;
	margin: -10px 0 10px;
	padding: 15px 15px 0;
	background-color: #fff;
	-webkit-border-radius: 12px 12px 0 0;
	border-radius: 12px 12px 0 0;
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	transform: translateZ(0);
	.self-support
		margin-bottom: 10px;
		font-size: 0;
		.tag
			padding: 2px 4px;
			line-height: 12px;
			font-size: 10px;
			color: #00bcd4;
			font-weight: 500;
		.tag-solid
			padding-left: 5px;
			background-color: #10cce5;
			color: #fff;
			font-weight: bold;
			-webkit-border-radius: 2px 0 0 2px;
			border-radius: 2px 0 0 2px;
		.tag-blue
			position: relative;
		.desc
			margin-left: .5em;
			font-size: 12px;
			color: #9e9e9e;
	.tag-wraper
		height: 15px;
		overflow: hidden;
		.g-tag 
			margin-bottom: 10px;
	.self-support 
		margin-bottom: 10px;
		font-size: 0;
	.title
		margin-bottom: 5px;
		font-size: 18px;
	.price
		margin-right: -15px;
		padding: 0 15px 6px 0;
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
			font-size: 22px;
			font-weight: 500;
		.per,.status
			font-size: 12px;
			color: #9e9e9e;
	.tag-list
		position: relative;
		padding: 1px 10px 1px 15px;
		margin-right: -15px;
		margin-left: -15px;
		font-size: 0;
		overflow: hidden;
		color: #666;
	.properties
		margin: 0 -15px;
		padding: 2px 10px 2px 15px;
		color: #616161;
		font-size: 0;
		position: relative;
		.flex>span
			display: inline-block;
		.ico 
			font-size: 16px;
			color: #00bcd4;
			margin-right: 1px;
			background-position: 0 0;
		.ico-text
			padding-right: 10px;
			font-size: 12px;
.g-flexbox, .g-flexbox-start, .g-flexbox-column
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
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
		flex: 1;
		width: 100%;
		height: auto;
		display: block;
</style>
