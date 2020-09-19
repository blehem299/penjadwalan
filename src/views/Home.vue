<template>
	<div id="home">
		<div class="row">
			<img src="@/assets/teaching.svg" alt="" class="col-12 d-block d-lg-none">
			<div class="col-12 col-lg-6">
				<div class="d-flex h-100">
					<div class="justify-content-center align-self-center">
						<h1>Selamat Datang di <strong>Ekoji Academy</strong></h1>
						<p>Bergabunglah bersama kami sebagai tim pengajar professional.</p>
						<router-link to="/daftar" class="btn btn-success col-12">
							<b-icon-arrow-right></b-icon-arrow-right>
							Daftar Sekarang
						</router-link>
					</div>
				</div>
			</div>
			<img src="@/assets/teaching.svg" alt="" class="col-6 d-none d-lg-block">
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Home'
	}
</script>
