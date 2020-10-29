<template>
    <div class="flex justify-items-center place-content-start xs:place-content-evenly items-center h-full w-full text-xs sm:text-lg flex-col">
        <!-- FÖRSTA RADEN -->
        <div class="flex button-row w-full">

                <!-- SYNS HELA TIDEN -->
                <button v-on:click="$store.commit('selectServiceType', 'small')" class="mx-auto text-button w-5/6 lg:w-1/3 h-auto">
                    <div class="px-2">
                        <h1 class="text-base xs:text-lg md:text-2xl lg:text-4xl">Paket litet</h1>
                        <ul class="text-xxs xs:text-xs md:text-lg lg:text-2xl">
                            <li>
                                1 st Blackmagic Kameror + Stativ
                            </li>
                            <li>
                                Blackmagic Bildmixer
                            </li>
                            <li>
                                2 st Led paneler ink stativ
                            </li>
                            <li>
                                Ljud för max 2 personer
                            </li>
                            <li>
                                Dator för streaming 
                            </li>
                            <li>
                                <br class="hidden lg:block">
                            </li>
                            <li>
                                <br class="hidden lg:block">
                            </li>
                        </ul>
                        <h2 class="text-xxs xs:text-xs md:text-lg lg:text-3xl">Pris: 10 000 SEK ex. moms</h2>
                    </div>
                </button>

                <!-- SYNS PÅ STORA SKÄRMAR -->
                <button v-on:click="$store.commit('selectServiceType', 'large')" class="mx-auto text-button w-5/6 lg:w-1/3 h-auto hidden lg:block">
                    <div class="p-2">
                        <h1 class="lg:text-4xl ">Paket stort</h1>
                        <ul class="lg:text-2xl">
                            <li>
                                2 st Blackmagic Kameror + Stativ
                            </li>
                            <li>
                                Blackmagic Bildmixer
                            </li>
                            <li>
                                2 st Led paneler ink stativ
                            </li>
                            <li>
                                Miljöbelysning i färg
                            </li>
                            <li>
                                Ljud för max 4 personer
                            </li>
                            <li>
                                Enklare grafik
                            </li>
                            <li>
                                Dator för streaming
                            </li>
                        </ul>
                        <h2 class="lg:text-3xl">Pris: 20 000 SEK ex. moms</h2>
                    </div>
                </button>
            </div>

            <!-- ANDRA RADEN -->
            <!-- SYNS PÅ STORA SKÄRMAR -->
            <div class="flex button-row w-full h-auto mt-2 xs:m-0">
                <button v-on:click="$store.commit('selectServiceType', 'offer')" class="mx-auto text-button w-5/6 lg:w-1/3 h-full hidden lg:block">
                <div class="p-2">
                    <h1 class="lg:text-3xl">Offert</h1>
                    <ul class="lg:text-2xl">
                        <li>
                            Har du specika önskemål eller behov? 
                        </li>
                        <li>
                            Låt oss diskutera hur vi kan hjälpa er! 
                        </li>
                    </ul>
                </div>
                </button>

                <!-- SYNS PÅ SMÅ SKÄRMAR -->
                <button v-on:click="$store.commit('selectServiceType', 'large')" class="mx-auto text-button w-5/6 lg:w-1/3 h-full lg:hidden">
                    <div class="px-2">
                        <h1 class="text-base xs:text-lg md:text-2xl">Paket stort</h1>
                        <ul class="text-xxs xs:text-xs md:text-lg">
                            <li>
                                2 st Blackmagic Kameror + Stativ
                            </li>
                            <li>
                                Blackmagic Bildmixer
                            </li>
                            <li>
                                2 st Led paneler ink stativ
                            </li>
                            <li>
                                Miljöbelysning i färg
                            </li>
                            <li>
                                Ljud för max 4 personer
                            </li>
                            <li>
                                Enklare grafik
                            </li>
                            <li>
                                Dator för streaming
                            </li>
                        </ul>
                        <h2 class="text-xxs xs:text-xs md:text-lg">Pris: 20 000 SEK</h2>
                    </div>
                </button>
        </div>

        <!-- TREDJE RADEN -->
        <div class="flex button-row w-full h-auto mt-4 xs:m-0 xs:mb-10">
                <button v-on:click="$store.commit('selectServiceType', 'offer')" class="mx-auto text-button w-5/6 lg:w-1/3 h-full lg:hidden">
                    <div class="px-2">
                        <h1 class="text-base xs:text-lg md:text-2xl">Offert</h1>
                        <ul class="text-xxs sm:text-xs md:text-lg">
                            <li>
                                Har du specika önskemål och behov? 
                            </li>
                            <li>
                                Låt oss diskutera hur vi kan hjälpa er! 
                            </li>
                        </ul>
                    </div>
                </button>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "StreamingOffers",
    computed: mapState(['serviceNeeded','serviceType'])
}
</script>

<style>

.description {
    font-size: 0.5rem;
}

.text-button {
  @apply bg-transparent;
  @apply font-semibold;
  @apply border-4;
  @apply border-white;
  @apply text-white;
  border-radius: 1rem;
  transition: all .5s;
  box-sizing:content-box;
}

.text-button:hover{
    @apply border-8;
}


</style>