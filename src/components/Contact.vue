<template>
<div id="about" class="min-h-screen w-screen relative bg-white flex items-center justify-center z-50">
  <PageTitle class="text-black" title="kontakt."></PageTitle>
  <div class="container mx-auto my-40" v-scroll-reveal="{ delay: 100, distance:'15rem'}">
      <div class="grid px-6 grid-cols-1 md:grid-cols-5 gap-x-12 gap-y-32 mx-auto">
        <div class=" md:col-span-3 md:col-start-2">
            <div class="container w-auto h-auto flex items-center justify-center">
                <iframe src="https://snazzymaps.com/embed/291961" width="80%" height="250px" style="border:none;"></iframe>
            </div>
        </div>

        <div class="col-span-1 md:col-span-2 md:col-start-1 flex items-center justify-start h-full text-center">
            <div class="container flex flex-col items-start justify-start">
                <div class="mx-auto">
                    <h1 class="text-3xl uppercase font-bold border-b-2 border-black">
                        Address
                    </h1>
                    <p class="text-xl font-semibold">
                        Klostergatan 1 <br/>
                        753 21 Uppsala <br/>
                    </p>
                </div>
                <div class="mx-auto mt-4">
                    <h1 class="text-3xl uppercase font-bold border-b-2 border-black">
                        Telefon
                    </h1>
                    <p class="text-xl font-semibold">
                        +46 070 000 000
                    </p>
                </div>
                                <div class="mx-auto mt-4">
                    <h1 class="text-3xl uppercase font-bold border-b-2 border-black">
                        Email
                    </h1>
                    <p class="text-xl font-semibold">
                        info@zettermedia.com
                    </p>
                </div>
            </div>
        </div>
        <div class="border-white col-span-1 md:col-span-2 md:col-start-4 flex justify-start items-center flex-col">
            <div class="container h-full max-w-2xl flex justify-start items-start flex-col">
                <ContactForm></ContactForm>
            </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
export default {
    name: "Contact",
    components: {PageTitle,ContactForm}
}
</script>

<style>

</style>