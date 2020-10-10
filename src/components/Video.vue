<template>
<div class=" relative h-screen w-screen z-0" id="video-container">
    <video autoplay playsinline muted loop class=" fixed h-full w-full z-0 p-0 m-0 object-cover pointer-events-none">
        <source src="../assets/video/bg.webm" type="video/wemb">
        <source src="../assets/video/bg.mp4" type="video/mp4">
    </video>
    
    <div id="overlay" class="flex fixed h-screen w-screen z-40">
        <div class="circle m-auto">
            <vue-typed-js class="w-full h-full flex content-start items-start mt-4 xs:mt-10" :showCursor="false" :typeSpeed="85" :strings="['<p><strong>ZETTER MEDIA</strong><br> är en contentbyrå som fokuserar på att skapa effektfullt innehåll.^600 Från film och ljud^400 till webb och design^500 skapar vi content att dela med världen.</p>']" :contentType="'html'">
                <span class="typing w-full h-56 mx-3"></span>
            </vue-typed-js>
        </div>
    </div>
    
    <a href="#services" v-smooth-scroll>
        <div id="scroll_down" class=" bg-no-repeat fixed z-50 text-white whitespace-no-wrap">
            <p class="transform -rotate-90 relative">SKROLLA</p>
        </div>
    </a>
    </div>
</template>

<script>
	export default {
		name: "Video",
	}
</script>

<style scoped>
#scroll_down {
    width: 11px;
    background-image: url("../assets/img/arrow_down.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 7px 19px;
    bottom: 30px;
    left: 45px;
    font-size: 11px;
    line-height: 11px;
    font-weight: 400;
    letter-spacing: 0.19em;
    padding-bottom: 33px;
}

#scroll_down p {
    -webkit-transform-origin: center left;
    transform-origin: center left;
    left: 5px;
}

#center-logo {
    margin-left: 10%;
}

</style>