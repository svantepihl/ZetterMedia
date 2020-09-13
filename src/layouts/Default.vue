<template>
	<div class="min-w-screen min-h-screen m-0 p-0">
		<Navbar></Navbar>
		<Video></Video>
		<Services></Services>
	</div>
</template>

<script>
	import Navbar from '../components/Navbar.vue';
	import Video from '../components/Video.vue';
	import Services from '../components/Services.vue'
  	export default {
		  components: {Navbar,Video,Services}
	}
</script>

<style>
body{
	background-color: gray;
}


</style>