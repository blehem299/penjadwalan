<template>
	<div id="formInput" class="col-12 p-4">
		<form id="FormInput" @submit.stop.prevent="handleSubmit">
            <b-form-group
            :state="namaState"
            label-for="name-input"
            invalid-feedback="Tidak boleh kosong"
			class="my-4"
            >
				<b-form-label class="font-weight-bold">Nama Anda :</b-form-label>
                <b-form-input
                    id="name-input"
                    v-model="nama"
                    :state="namaState"
                    
                ></b-form-input>
            </b-form-group>
			<b-form-group 
				:state="waktuState"
				invalid-feedback="Tidak boleh kosong"
				class="my-4"
			>
				<b-form-label class="font-weight-bold">Waktu Mengajar :</b-form-label>
				<b-form-radio-group 
					id="radio-group-2" 
					v-model="waktu"
					:state="waktuState"
					
				>
					<b-form-radio value="1" selected>1 Jam</b-form-radio>
					<b-form-radio value="2">2 Jam</b-form-radio>
					<b-form-radio value="3">3 Jam</b-form-radio>
				</b-form-radio-group>
			</b-form-group>
            <b-form-group
				:state="hariState"
				invalid-feedback="Tidak Boleh Kosong"
				class="my-4"
			>
				<b-form-label class="font-weight-bold">Pilih Hari (bisa lebih dari 1) :</b-form-label>
				<b-form-checkbox-group 
					id="checkbox-group-2" 
					v-model="hari"
					:state="hariState"
					
				>
					<b-form-checkbox value="1">Senin</b-form-checkbox>
					<b-form-checkbox value="2">Selasa</b-form-checkbox>
					<b-form-checkbox value="3">Rabu</b-form-checkbox>
					<b-form-checkbox value="4">Kamis</b-form-checkbox>
					<b-form-checkbox value="5">Jumat</b-form-checkbox>
					<b-form-checkbox value="6">Sabtu</b-form-checkbox>
				</b-form-checkbox-group>
			</b-form-group>
        </form>
		<button class="btn btn-success col-12" @click="handleSubmit()">Daftar Sekarang</button>
	</div>
</template>

<script>
	export default {
		name: 'FormDaftar',
		data(){
			return {
				namaState: null,
				waktuState: null,
				hariState: null,
				nama: '',
				waktu: '',
				hari: [],
				storeData: {}
			}
		},
		methods: {
			resetData() { 
				this.$emit("renderIt")
			},
			handleSubmit(){
				if(this.namaState !== null && this.waktuState !== null && this.hariState !== null){
					this.fixSubmit()
				} else {
					this.namaState = this.cekValid(this.namaState)
					this.waktuState = this.cekValid(this.waktuState)
					this.hariState = this.cekValid(this.hariState)
				}
			},
			cekValid(data){
				if(data !== null){
					if(Array.isArray(data)){
						return (data.length !== 0? true: false)
					} else {
						return (data !== ''? true: false)
					}
				} else {
					return false
				}
			},
			fixSubmit(){
				const data = JSON.parse(localStorage.getItem("StoreData"))

				this.storeData = {
					id: this.$checkId(data.pengajars),
					nama: this.nama,
					waktu: parseInt(this.waktu),
					hari: this.hari
				}
				data.pengajars.push(this.storeData)
				data.totalJam = data.pengajars.reduce((val, pengajar) => val + pengajar.waktu, 0)

				localStorage.setItem("StoreData", JSON.stringify(data))

				this.$toast.success('Berhasil Masuk Data', {
                    position: "top-right"
				})

				this.resetData()
			}
		},
		watch: {
			nama() { this.namaState = (this.nama !== ''? true: false) },
			waktu() { this.waktuState = (this.waktu !== ''? true: false) },
			hari() { this.hariState = (this.hari.length !== 0? true: false) }
		}
	}
</script>