<template>
<div class=" relative h-screen w-screen z-0" id="video-container">
    <video autoplay playsinline muted loop class=" fixed h-full w-full z-0 p-0 m-0 object-cover pointer-events-none">
        <source src="../assets/video/bg.webm" type="video/wemb">
        <source src="../assets/video/bg.mp4" type="video/mp4">
    </video>
    
    <div id="overlay" class="flex fixed h-screen min-h-full w-screen z-40 items-center justify-center">
      <div class="circle m-auto">
            <vue-typed-js class="w-full h-full flex m-auto px-1 mt-0 xs:mt-6 sm:mt-4 md:mt-1 lg:-mt-4 xl:mt-0" :showCursor="false" :typeSpeed="0.01" :strings="['<p><strong>ZETTER MEDIA</strong><br> är en mediabyrå som skapar effektfullt innehåll.^400 Från film och ljud^200 till webb och design^200 skapar vi content^200 att dela med världen.</p>']" :contentType="'html'">
                <span class="typing w-full h-56 mx-3"></span>
            </vue-typed-js>
        </div>
    </div>
    
    <a href="#services" v-smooth-scroll>
        <div id="scroll_down" class=" bg-no-repeat fixed z-50 text-white whitespace-nowrap">
            <p class="transform -rotate-90 relative text-base">SCROLLA</p>
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
    letter-spacing: 0.3em;
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

.circle{
  @apply hidden;
  font-family: steelfishregular;
  @apply items-center;
  @apply justify-center;
}

@screen xs {
  .circle {
    display: flex;
    position: relative;
    display: block;
    width: 64%;
    height: 0;
    padding: 32% 0;
    border-radius: 50%;
    
    @shadow: rgba(0, 0, 0, .1);
    background: #00000049;
    border-color: gray;
    border: 10px;
    color: white;
    text-align: center;
    @apply text-2xl
  }
}

@screen sm {
  .circle {
    display: flex;
    position: relative;
    display: block;
    width: 64%;
    height: 0;
    padding: 32% 0;
    border-radius: 50%;
    
    @shadow: rgba(0, 0, 0, .1);
    background: #00000049;
    border-color: gray;
    border: 10px;
    color: white;
    text-align: center;
    @apply text-3xl
  }
}

@screen md {
  .circle {
    display: flex;
    position: relative;
    display: block;
    width: 44%;
    height: 0;
    padding: 22% 0;
    border-radius: 50%;
    
    @shadow: rgba(0, 0, 0, .1);
    background: #00000049;
    border-color: gray;
    border: 10px;
    color: white;
    text-align: center;
    font-size: 1.8rem;
  }
}

@screen lg {
  .circle {
    display: flex;
    position: relative;
    display: block;
    width: 40%;
    height: 0;
    padding: 20% 0;
    border-radius: 50%;
    
    @shadow: rgba(0, 0, 0, .1);
    background: #00000049;
    border-color: gray;
    border: 10px;
    color: white;
    text-align: center;
    @apply text-4xl
  }
} 

@screen xl {
  .circle {
    display: flex;
    position: relative;
    display: block;
    width: 24%;
    height: 0;
    padding: 12% 0;
    border-radius: 50%;
    
    @shadow: rgba(0, 0, 0, .1);
    background: #00000049;
    border-color: gray;
    border: 10px;
    color: white;
    text-align: center;
    font-size: 1.8rem;
  }
}

@screen xxl {
  .circle {
    display: flex;
    position: relative;
    display: block;
    width: 20%;
    height: 0;
    padding: 10% 0;
    border-radius: 50%;
    
    @shadow: rgba(0, 0, 0, .1);
    background: #00000049;
    border-color: gray;
    border: 10px;
    color: white;
    text-align: center;
    font-size: 1.95rem;
  }
}

@media (max-height: 414px) {
  .circle {
    @apply hidden;
  }
}

</style>