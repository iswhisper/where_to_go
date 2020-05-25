<template>
	<div>
		<activity-header :sightName="sightName"></activity-header>
		<activity-list :list="mhListChildern"></activity-list>
	</div>	
</template>

<script>
import axios from 'axios'
import ActivityHeader from './aComponents/Header'
import ActivityList from './aComponents/aListInfo'

export default{
	name:'Activity',
	data () {
		return {
			 sightName:'',
			 mhListChildern:[],
			 id:'',
			 lastId:''
		}
	},
	components:{
		ActivityHeader,
		ActivityList,
	},
	methods:{
		getActivityDetailInfo() {
			this.id=this.$route.params.id
			axios.get('/api/activity.json',{
				params:{
					id: this.$route.params.id
				}
			}).then(this.handleGetDataSuc)
		},
		handleGetDataSuc(res){
			res=res.data
			if(res.ret&&res.data){
				const data=res.data
				data.forEach((item) => {
					if(item.id==this.id){
						this.mhListChildern=item.List
						this.sightName=item.title
					}
				})
				// for(let i in data){
				// 	if(data[i].id==this.id){
				// 		this.mhListChildern=data[i].List
				// 		this.sightName=data[i].title
				// 	}
				// }				
			}
		}
	},
	activated (){
		this.getActivityDetailInfo()
	}
}
</script>

<style lang="stylus" scoped>

</style>
