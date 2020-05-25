let defaultCity='北京'
try{
	if(localStorage.city){
		defaultCity=localStorage.city
	}
}catch(e){
	//TODO handle the exception
}
export default{
	city:defaultCity,
}