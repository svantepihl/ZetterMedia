<template>
<div id="contact" class="w-full bg-black z-50 relative">
  <div class="flex flex-wrap text-center text-white">

    <!-- ABOUT COLUMN -->

    <div class="w-full md:w-1/3 p-5 md:text-left">
      <div class="my-6 ml-3 text-xl font-semibold">Om oss</div>
      <p class="p-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa. Donec
        eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at convallis.</p>
      <p class="p-3 text-gray-400">Morbi tristique massa nec massa auctor, at scelerisque felis consectetur. Morbi
        tempus et odio sit amet feugiat. Maecenas dignissim a turpis in molestie. Fusce tincidunt vestibulum iaculis.
      </p>
    </div>

    <!-- CONTACTS COLUMN -->

    <div class="w-full md:w-1/3 p-5">
      <div class="my-6 text-xl font-semibold">Kontaktuppgifter</div>
      <p class="mt-8 text-gray-400">
        Klostergatan 1 <br>
        753 21 Uppsala <br>
        Sverige <br>
        <strong>Telefon:</strong> +46 070 000 000 <br>
        <strong>Email:</strong> info@zettermedia.com
      </p>
    </div>

    <!-- FORM COLUMN -->

    <div class="w-full md:w-1/3 p-5">
      <div class="mt-6 text-xl font-semibold">SÄG HALLÅ!</div>
      <form class="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded" data-netlify="true" name="contact" method="POST">
        <div class="flex items-center mb-4">
          <input class="w-full h-10 p-2 border-b border-gray-800 bg-gray-900 text-white" type="text" name="name"
            placeholder="Namn">
        </div>
        <div class="flex items-center mb-4">
          <input class="w-full h-10 p-2 border-b border-gray-800 bg-gray-900 text-white" type="email" name="email"
            placeholder="Email">
        </div>
        <div class="mb-6">
          <textarea class="w-full h-24 px-2 pt-2 border-b-2 border-gray-800 bg-gray-900 text-white"
            placeholder="Meddelande"></textarea>
        </div>
        <div class="flex justify-between items-center">
          <button class="w-full py-2 px-4 rounded bg-gray-800 hover:bg-gray-900 text-white font-bold"
            type="submit">Skicka</button>
        </div>
      </form>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style>

</style>