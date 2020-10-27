<template>
    <div class="w-screen h-auto min-h-screen bg-black block relative z-30">
        <div class="grid grid-cols-6 gap-1 w-full h-auto min-h-screen p-1">
            <div class="portfolio-item h-auto row-span-1 col-span-2 bg-gray-500">

            </div>
            <div class="portfolio-item h-auto row-span-1 col-span-4 bg-gray-300">

            </div>
            <div class="portfolio-item h-auto row-span-1 col-span-3 bg-gray-600">

            </div>
            <div class="portfolio-item h-auto row-span-1 col-span-3 bg-gray-500">

            </div>
            <div class="portfolio-item h-auto row-span-1 col-span-2 bg-gray-300">

            </div>
            <div class="portfolio-item h-auto row-span-1 col-span-4 bg-gray-600">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Portfolio'
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
    transform:scale(1.1);
    -webkit-box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.1);
-moz-box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.1);
box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.1);
  }
}

@keyframes scaledown{
  0%{
    transform:scale(1.1);
  }
   100%{
    transform:scale(1.0);
  }
}

</style>