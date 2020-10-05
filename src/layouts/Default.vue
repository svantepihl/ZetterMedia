<template>
	<div class="w-screen h-screen m-0 p-0">
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
body{
	scroll-behavior: smooth !important;
}


</style>