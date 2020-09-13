<template>
<div class=" relative h-screen w-screen" id="video-container">
    <video autoplay muted loop class=" fixed h-full w-full z-0 p-0 m-0 object-fill">
        <source src="../assets/video/bg.mp4" type="video/mp4">
    </video>
    <div id="scroll_down" class="tra05">
        <p>SKROLLA</p>
    </div>
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
    position: fixed;
    bottom: 30px;
    left: 45px;
    z-index: 300;
    color: #fff;
    font-size: 11px;
    line-height: 11px;
    font-weight: 400;
    letter-spacing: 0.19em;
    padding-bottom: 33px;
    white-space: nowrap;
}

#scroll_down p {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: center left;
    transform-origin: center left;
    position: relative;
    left: 5px;
}

</style>