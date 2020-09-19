<template>
    <div id="pengajar">
        <div class="row">
            <div class="container">
                <h2 class="col-12 mb-4">Daftar <strong>Pengajar</strong></h2>
                <div class="table-responsive">
                    <p>Total Waktu : <strong>{{ data.totalJam }} Jam</strong></p>
                    <table class="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Pengajar</th>
                                <th scope="col">Jumlah Jam</th>
                                <th scope="col">Senin</th>
                                <th scope="col">Selasa</th>
                                <th scope="col">Rabu</th>
                                <th scope="col">Kamis</th>
                                <th scope="col">Jumat</th>
                                <th scope="col">Sabtu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(pengajar, index) in data.pengajars" :key="index">
                                <td scope="row">{{ index + 1 }}.</td>
                                <th>{{ pengajar.nama }}</th>
                                <td>{{ pengajar.waktu }}</td>
                                <th>{{ setHari(1, pengajar.hari) }}</th>
                                <th>{{ setHari(2, pengajar.hari) }}</th>
                                <th>{{ setHari(3, pengajar.hari) }}</th>
                                <th>{{ setHari(4, pengajar.hari) }}</th>
                                <th>{{ setHari(5, pengajar.hari) }}</th>
                                <th>{{ setHari(6, pengajar.hari) }}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <router-link to="/mengajar" class="btn btn-success col-12 mt-3">Jadwal Mengajar</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pengajar',
        data() {
            return {
                data: {}
            }
        },
        methods: {
            setPengajars() { this.data = JSON.parse(localStorage.getItem("StoreData")) },
            setHari(hari, data) {
                data = data.map(x => parseInt(x))
                let set = data.find(elm => elm === hari)

                return (set !== undefined? "X": "")
            }
        },
        mounted(){
            this.setPengajars()
        }
    }
</script>