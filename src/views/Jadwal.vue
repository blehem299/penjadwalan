<template>
    <div id="jadwal">
        <div class="row">
            <div class="container">
                <h2 class="col-12 mb-4">Jadwal <strong>Mengajar</strong></h2>
                <div class="table-responsive">
                    <table class="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">Jadwal</th>
                                <th scope="col">Senin</th>
                                <th scope="col">Selasa</th>
                                <th scope="col">Rabu</th>
                                <th scope="col">Kamis</th>
                                <th scope="col">Jumat</th>
                                <th scope="col">Sabtu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>08.00 - 09.00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>09.00 - 10.00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>10.00 - 11.00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>11.00 - 12.00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>12.00 - 13.00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>13.00 - 14.00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>15.00 - 16.00</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Jadwal'
        // mounted(){
        //     const data = JSON.parse(localStorage.getItem("StoreData"))

        //     var tempObj = {}, parentObj = { jadwalHari: [] }, idStore = []

        //     data.pengajars.forEach((pengajar) => {
        //         tempObj.nama = pengajar.nama
        //         tempObj.waktu = pengajar.waktu

        //         pengajar.hari.map((val) => {
        //             val = val.map(num => parseInt(num))
        //             switch(val){
        //                 case 1 :
        //                     if(!Object.prototype.hasOwnProperty.call(parentObj, 'senin1')){
        //                         parentObj.senin1 = tempObj.waktu
        //                         tempObj.tipe = 'senin1'
        //                         tempObj.id = 0

        //                         parentObj.jadwalHari.push(tempObj)
        //                     } else {
        //                         if(parentObj.senin1 <= 8){
        //                             idStore = []
        //                             parentObj.senin1 += tempObj.waktu
        //                             tempObj.tipe = 'senin1'

        //                             parentObj.jadwalHari.map(valHari => {
        //                                 (tempObj.tipe === valHari.tipe? idStore.push(valHari): '')
        //                             })
        //                             tempObj.id = Math.max.apply(Math, idStore) + 1

        //                             parentObj.jadwalHari.push(tempObj)
        //                         }
        //                     }

        //                     break;
        //                 case 2 :
        //                     if(!Object.prototype.hasOwnProperty.call(parentObj, 'selasa1')){
        //                         parentObj.selasa1 = tempObj.waktu
        //                         tempObj.tipe = 'selasa1'
        //                         tempObj.id = 0

        //                         parentObj.jadwalHari.push(tempObj)
        //                     } else {
        //                         if(parentObj.selasa1 <= 8){
        //                             idStore = []
        //                             parentObj.selasa1 += tempObj.waktu
        //                             tempObj.tipe = 'selasa1'

        //                             parentObj.jadwalHari.map(valHari => {
        //                                 (tempObj.tipe === valHari.tipe? idStore.push(valHari): '')
        //                             })
        //                             tempObj.id = Math.max.apply(Math, idStore) + 1

        //                             parentObj.jadwalHari.push(tempObj)
        //                         }
        //                     }

        //                     break;
        //                 case 3 :
        //                     if(!Object.prototype.hasOwnProperty.call(parentObj, 'rabu1')){
        //                         parentObj.rabu1 = tempObj.waktu
        //                         tempObj.tipe = 'rabu1'
        //                         tempObj.id = 0

        //                         parentObj.jadwalHari.push(tempObj)
        //                     } else {
        //                         if(parentObj.rabu1 <= 8){
        //                             idStore = []
        //                             parentObj.rabu1 += tempObj.waktu
        //                             tempObj.tipe = 'rabu1'

        //                             parentObj.jadwalHari.map(valHari => {
        //                                 (tempObj.tipe === valHari.tipe? idStore.push(valHari): '')
        //                             })
        //                             tempObj.id = Math.max.apply(Math, idStore) + 1

        //                             parentObj.jadwalHari.push(tempObj)
        //                         }
        //                     }

        //                     break;
        //                 case 4 :
        //                     if(!Object.prototype.hasOwnProperty.call(parentObj, 'kamis1')){
        //                         parentObj.kamis1 = tempObj.waktu
        //                         tempObj.tipe = 'kamis1'
        //                         tempObj.id = 0

        //                         parentObj.jadwalHari.push(tempObj)
        //                     } else {
        //                         if(parentObj.kamis1 <= 8){
        //                             idStore = []
        //                             parentObj.kamis1 += tempObj.waktu
        //                             tempObj.tipe = 'kamis1'

        //                             parentObj.jadwalHari.map(valHari => {
        //                                 (tempObj.tipe === valHari.tipe? idStore.push(valHari): '')
        //                             })
        //                             tempObj.id = Math.max.apply(Math, idStore) + 1

        //                             parentObj.jadwalHari.push(tempObj)
        //                         }
        //                     }
                            
        //                     break;
        //                 case 5 :
        //                     if(!Object.prototype.hasOwnProperty.call(parentObj, 'jumat1')){
        //                         parentObj.jumat1 = tempObj.waktu
        //                         tempObj.tipe = 'jumat1'
        //                         tempObj.id = 0

        //                         parentObj.jadwalHari.push(tempObj)
        //                     } else {
        //                         if(parentObj.jumat1 <= 8){
        //                             idStore = []
        //                             parentObj.jumat1 += tempObj.waktu
        //                             tempObj.tipe = 'jumat1'

        //                             parentObj.jadwalHari.map(valHari => {
        //                                 (tempObj.tipe === valHari.tipe? idStore.push(valHari): '')
        //                             })
        //                             tempObj.id = Math.max.apply(Math, idStore) + 1

        //                             parentObj.jadwalHari.push(tempObj)
        //                         }
        //                     }
                            
        //                     break;
        //                 case 6 :
        //                     if(!Object.prototype.hasOwnProperty.call(parentObj, 'sabtu1')){
        //                         parentObj.sabtu1 = tempObj.waktu
        //                         tempObj.tipe = 'sabtu1'
        //                         tempObj.id = 0

        //                         parentObj.jadwalHari.push(tempObj)
        //                     } else {
        //                         if(parentObj.sabtu1 <= 8){
        //                             idStore = []
        //                             parentObj.sabtu1 += tempObj.waktu
        //                             tempObj.tipe = 'sabtu1'

        //                             parentObj.jadwalHari.map(valHari => {
        //                                 (tempObj.tipe === valHari.tipe? idStore.push(valHari): '')
        //                             })
        //                             tempObj.id = Math.max.apply(Math, idStore) + 1

        //                             parentObj.jadwalHari.push(tempObj)
        //                         }
        //                     }

        //                     break;
        //             }
        //         })
        //     })

        //     console.log(data)
        // }
    }
</script>