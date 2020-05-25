<template>
	<div>
		<activity-header :sightName="sightName"></activity-header>
		<full-calendar></full-calendar>
	</div>	
</template>

<script>
import ActivityHeader from './aComponents/Header'
import FullCalendar from './components/Canlendar'

export default{
	name:'DateList',
	components:{
		FullCalendar,
		ActivityHeader
	},
	data () {
		return {
			 sightName:'Calendar',
		}
	},
}
</script>

<style lang="stylus" scoped>

</style>
