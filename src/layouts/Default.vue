<template>
	<div class="w-screen min-h-screen m-0 p-0">
		<slot/>
		<Contact></Contact>
	</div>
</template>

<script>
	import Contact from '../components/Contact.vue'

  	export default {
		components: {Contact},
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

