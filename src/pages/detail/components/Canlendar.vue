<template>
<div>
   <full-calendar :events="monthData" class="calendar"
                     first-day='1'
					 locale="zh-cn"
                     @changeMonth="changeMonth"
                     @eventClick="eventClick"
                     @dayClick="dayClick"
                     @moreClick="moreClick"></full-calendar>
</div>
</template>
<script>
import moment from 'moment'
export default {
  name:'FullCalendar',
  data() {
      return {
        monthData: [{
		  title : 'eeeeeeeee',  // 事件内容
		  start : '2020-1-11', // 事件开始时间
		  end : '2020-1-30',   // 事件结束时间
		  cssClass: 'red',       // 事件的样式   class名（由后台返回数据）  red为自己定义的class名
		},
		{
		  title : 'sssss',
		  start : '2020-3-25',
		  end : '2020-3-30',
		  cssClass: 'blue',
		},
		{
		  title : 'dddddddd',
		  start : '2020-3-09',
		  end : '2020-3-30',
		  cssClass: 'blue',
		},
		{
		  title : 'cccccc',
		  start : '2020-3-20',
		  end : '2020-3-30',
		  cssClass: 'red',
		},
		{
		  title : 'aaaaaa',
		  start : '2020-3-01',
		  end : '2020-3-30',
		  cssClass: 'red',
		},
		{
		  title : 'bbbbbb',
		  start : '2020-3-05',
		  end : '2019-1-10',
		  cssClass: 'blue',
		}]
      }
  },
  methods: {
     // 选择月份
      changeMonth (start, end, current) {
       console.log('changeMonth', moment(start).format('YYYY-MM-DD HH:mm:ss'), moment(end).format('YYYY-MM-DD HH:mm:ss'), moment(current).format('YYYY-MM-DD HH:mm:ss'))
      },
      // 点击事件
      eventClick (event, jsEvent, pos) {
        console.log('eventClick', event, jsEvent, pos)
      },
      // 点击当天
      dayClick (day, jsEvent) {
         console.log('dayClick', day, jsEvent)
      },
      // 查看更多
      moreClick (day, events, jsEvent) {
        console.log('moreCLick', day, events, jsEvent)
      },
  },
  components: {
      'full-calendar': require('vue-fullcalendar'),
  },
 }
</script>
<style lang="stylus" scoped>
.calendar
	height:500px;
	position:relative
.calendar >>> .full-calendar-body .dates .week-row .day-cell
	min-height: 60px;
.calendar >>> .full-calendar-body .dates .dates-events .events-week .events-day
	min-height: 69px;
</style>