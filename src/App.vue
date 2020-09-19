<template>
	<div id="app" class="container">
		<Navbar/>
		<router-view class="py-4"/>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue'

	export default {
		components: {
			Navbar
		},
		mounted(){
// localStorage.removeItem("StoreData")
			if(localStorage.getItem("StoreData") === null){
				const data = { "pengajars" : [], "totalJam" : 0 }
				localStorage.setItem("StoreData", JSON.stringify(data))
			}

			const data = JSON.parse(localStorage.getItem("StoreData"))

			console.log(this.$checkId(data.pengajars))
		}
	}
</script>

<style>
</style>
