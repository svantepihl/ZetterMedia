<template>
	<div class="w-screen min-h-screen m-0 p-0">
		<Navbar></Navbar>
		<div id="body-container">
			<Video></Video>
			<!-- <AboutUs></AboutUs> -->
			<Services></Services>
			<Form></Form>
			<!-- <Portfolio></Portfolio> -->
			<Footer></Footer>
		</div>		
	</div>
</template>

<script>
	import Navbar from '../components/Navbar.vue';
	import Video from '../components/Video.vue';
	import Form from '../components/Form.vue'
	import AboutUs from '../components/AboutUs.vue';
	import Services from '../components/Services.vue'
	import Portfolio from '../components/Portfolio.vue'
	import Footer from '../components/Footer.vue'

  	export default {
		components: {Navbar,Video,Form,AboutUs,Services,Portfolio, Footer},
	}
</script>

<style>
@font-face {
font-family: 'steelfishregular';
src: 	url('../assets/font/steelfish_rg-webfont.woff2') format('woff2'),
		url('../assets/font/steelfish_rg-webfont.woff') format('woff');
font-weight: normal;
font-style: normal;
}

@font-face {
    font-family: 'archivo_blackregular';
    src: url('../assets/font/archivoblack-webfont.woff') format('woff2'),
          url('../assets/font/archivoblack-webfont.woff2') format('woff');
    font-weight: normal;
    font-style: normal;
  }

@font-face {
	font-family: "AvantGarde-Medium";

	src: url("../assets/font/ITCAvantGardeGothicMedium.woff") format("woff"),
		url("../assets/font/ITCAvantGardeGothicMedium.woff2") format("woff2"); 
	font-weight: normal;
	font-style: normal;
}

body{
	scroll-behavior: smooth !important;
	font-family: AvantGarde-Medium;
}


</style>

