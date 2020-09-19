<template>
	<div id="daftar" class="py-5">
		<div class="row">
			<div :class="colDaftar">
				<img :src="img" alt="" :class="classImg">
				<h3 class="col-12 text-center mt-4" v-html="textCaption"></h3>
			</div>
			<FormDaftar v-if="isRender" class="col-12 col-lg-6" @renderIt="forceRender"/>
		</div>
	</div>
</template>

<script>
	import FormDaftar from '@/components/FormDaftar.vue'

	export default {
		name: 'Daftar',
		components: {
			FormDaftar
		},
		data() {
			return {
				isRender: true,
				colDaftar: "col-12 col-lg-6",
				classImg: "img-fluid",
				img: "../assets/teacher.svg",
				textCaption: `Silahkan daftarkan diri anda sebagai <strong>pengajar</strong>.`
			}
		},
		methods: {
			forceRender() {
				this.isRender = false

				this.$nextTick().then(() => {
					const data = JSON.parse(localStorage.getItem("StoreData"))
					
					if((data.totalJam >= 60 && data.totalJam <= 62) || data.totalJam > 63){
						this.colDaftar = "col-12 row"
						this.classImg = "col-6 mx-auto"
						this.img = "../assets/cancel.svg"
						this.textCaption = `Pendaftaran ditutup pengajar sudah penuh.`
						this.isRender = false
					} else {
						this.isRender = true
					}
				})
			}
		},
		mounted() {
			this.forceRender()
		}
	}
</script>