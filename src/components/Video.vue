<template>
<div class=" relative h-screen w-screen z-0 font-sans" id="video-container">
    <video autoplay muted loop class=" fixed h-full w-full z-0 p-0 m-0 object-fill">
        <source src="../assets/video/bg.mp4" type="video/mp4">
    </video>
    
    <div id="overlay" class="fixed flex h-screen w-screen z-40">
    <div class="m-auto text-white text-4xl">
        <vue-typed-js :strings="['FIRST TEXT', 'SECOND TEXT']">
            <h1 class="typing"></h1>
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

</style>