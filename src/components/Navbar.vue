<template>
    <div>
        <b-navbar toggleable="lg" type="light">
            <router-link class="navbar-brand" to="/">Ekoji Academy</router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/daftar" class="nav-link">Daftar</router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/pengajar" class="nav-link">Daftar Pengajar</router-link>
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <router-link to="/mengajar" class="nav-link">
                            Jadwal Mengajar
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

export default {
    name: 'Navbar',
    data(){
        return {
            pesanan: []
        }
    }
}
// console.log(router.path)
</script>