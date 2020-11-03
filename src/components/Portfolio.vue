<template>
    <div class="w-screen h-auto min-h-screen bg-black block relative z-30 m-0 p-0">
      <transition name="fade">
        <div v-if="showOverlay" v-on:click="showOverlay = false" class="overlay">
          
        </div>
      </transition>
      
        <div class="grid md:grid-cols-6 w-full gap-y-0 gap-x-0 h-auto min-h-screen p-0 m-0">
            <div v-on:click="showOverlay = true" class="portfolio-item h-64 md:h-auto md:col-span-2 bg-gray-500">
              <h1 class="text-4xl ml-1">
                Case ett
              </h1>

            </div>
            <div v-on:click="showOverlay = true" class="portfolio-item h-64 md:h-auto md:col-span-4 bg-gray-300">
              <h1 class="text-4xl ml-1">
                Case två
              </h1>
            </div>
            <div v-on:click="showOverlay = true" class="portfolio-item h-64 md:h-auto md:col-span-3 bg-gray-600">
              <h1 class="text-4xl ml-1">
                Case tre
              </h1>
            </div>
            <div v-on:click="showOverlay = true" class="portfolio-item h-64 md:h-auto md:col-span-3 bg-gray-500">
              <h1 class="text-4xl ml-1">
                Case fyra
              </h1>
            </div>
            <div v-on:click="showOverlay = true" class="portfolio-item h-64 md:h-auto md:col-span-4 bg-gray-300">
              <h1 class="text-4xl ml-1">
                Case fem
              </h1>
            </div>
            <div v-on:click="showOverlay = true" class="portfolio-item h-64 md:h-auto md:col-span-2 bg-gray-600">
              <h1 class="text-4xl ml-1">
                Case sex
              </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Portfolio',
    data () {
			return {
			showOverlay: false,
			}
		},
}
</script>

<style>
.portfolio-item{
  -webkit-animation:scaledown .3s linear;
  -moz-animation:scaledown .3s linear;
  animation:scaledown .3s linear;
  transform-origin:50% 50%;
  animation-fill-mode: forwards;
}

.portfolio-item:hover {
   z-index:100;
  -webkit-animation:scale .3s linear;
  -moz-animation:scale 0.3s linear;
  animation:scale .3s linear;
  transform-origin:50% 50%;
  animation-fill-mode: forwards;
}

@keyframes scale{
  0%{
    transform:scale(1.0);
  }
  100%{
    transform:scale(1.01);
    -webkit-box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.1);
    -moz-box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.1);
    box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.1);
  }
}

@keyframes scaledown{
  0%{
    transform:scale(1.01);
  }
   100%{
    transform:scale(1.0);
  }
}

.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 110;
  filter: blur(4px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>