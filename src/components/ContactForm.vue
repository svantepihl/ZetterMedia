<template>
<div class="rounded-sm p-6 w-full max-w-lg mt-7">
    <div class="grid gap-8">
      <div class="bg-gray-300 focus-within:border-2 transition-all duration-500 relative rounded-sm p-1 font-bold">
        <div class="-mt-7 absolute px-1 text-base col-span-2">
          <p>
            <label for="name" class="text-black -ml-2 px-1 text-lg uppercase">Namn</label>
          </p>
        </div>
        <p>
          <input id="name" autocomplete="false" tabindex="0" type="text" class="bg-gray-300 py-1 px-1 text-gray-900 outline-none block h-full w-full">
        </p>
      </div>

      <div class="bg-gray-300 focus-within:border-2 transition-all duration-500 relative rounded-sm p-1 font-bold">
        <div class="-mt-7 absolute px-1 text-base col-span-2">
          <p>
            <label for="email" class="text-black -ml-2 px-1 text-lg uppercase">Email</label>
          </p>
        </div>
        <p>
          <input id="email" autocomplete="false" tabindex="0" type="text" class="bg-gray-300 py-1 px-1 text-gray-900 outline-none block h-full w-full">
        </p>
      </div>

      <div class="bg-gray-300 focus-within:border-2 transition-all duration-500 relative rounded-sm p-1 font-bold">
        <div class="-mt-7 absolute px-1 text-base col-span-2">
          <p>
            <label for="message" class="text-black -ml-2 px-1 text-lg uppercase">Meddelande</label>
          </p>
        </div>
        <p>
          <textarea id="message" autocomplete="false" tabindex="0" type="text" class="bg-gray-300 py-1 px-1 text-gray-900 outline-none block h-full w-full resize-y"/>
        </p>
      </div>
      <div>
        <button class="w-full rounded-sm text-white px-3 py-1 bg-black outline-none hover:shadow-lg hover:bg-orange transition-all duration-500">
          SKICKA
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ContactForm"
}
</script>

<style>

</style>