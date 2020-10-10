<template>
	<div class="w-screen min-h-screen m-0 p-0">
		<Navbar></Navbar>
		<div id="body-container">
			<Video></Video>
			<Services></Services>
		</div>		
	</div>
</template>

<script>
	import Navbar from '../components/Navbar.vue';
	import Video from '../components/Video.vue';
	import Services from '../components/Services.vue'

  	export default {
		components: {Navbar,Video,Services},
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

body{
	scroll-behavior: smooth !important;
	font-family: steelfishregular;
}
</style>

