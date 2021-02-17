<template>
<div class="rounded-sm p-6 w-full max-w-lg -mt-6">
    <div class="grid gap-6">
      <div class="bg-gray-300 focus-within:border-2 transition-all duration-500 relative rounded-sm p-1 font-bold">
        <div class="-mt-6 absolute px-1 text-base col-span-2">
          <p>
            <label for="name" class="text-black px-1 text-lg uppercase">Namn</label>
          </p>
        </div>
        <p>
          <input id="name" autocomplete="false" tabindex="0" type="text" class="bg-gray-300 py-1 px-1 text-gray-900 outline-none block h-full w-full">
        </p>
      </div>
      
      <!--<div class="focus-within:border-1 transition-all duration-500 relative rounded-sm p-1">
        <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label for="email" class="bg-white text-gray-600 px-1">E-POST</label>
          </p>
        </div>
        <p>
          <input id="email" autocomplete="true" tabindex="0" type="email" class="py-1 px-1 outline-none block h-full w-full">
        </p>
      </div> -->
      <!--<div class="border focus-within:border-black transition-all duration-500 relative rounded-sm p-1">
        <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
          <p>
            <label for="message" class="bg-white text-gray-600 px-1">MEDDELANDE</label>
          </p>
        </div>
        <p>
          <textarea id="message" autocomplete="false" tabindex="0" type="text" class="py-1 px-1 outline-none block h-full w-full"></textarea>
        </p>
      </div> -->
    </div>
    <!--
    <div class="mt-4 pt-3">
      <button class="w-full rounded-sm text-white px-3 py-1 bg-gray-600 hover:shadow-inner hover:bg-bggrey transition-all duration-300">
        SKICKA
      </button>
    </div>-->
  </div>
</template>

<script>
export default {
    name:"ContactForm"
}
</script>

<style>

</style>