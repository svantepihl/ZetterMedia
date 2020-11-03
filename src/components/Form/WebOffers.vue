<template>
    <div class="flex justify-items-center place-content-start items-center sm:mt-5 h-full w-full text-xs sm:text-lg flex-col lg:mt-4">
        <div class="flex button-row xs:mt-4">
            <button v-on:click="$store.commit('selectServiceType','web')" class="button-base xs:button-xs hover:button-hover">
                <img src="../../assets/icons/globe.svg" class="mx-auto invert">
                Webb + SEO <br>
            </button>

            <button v-on:click="$store.commit('selectServiceType','web')" class="button-base xs:button-xs hover:button-hover">
                <img src="../../assets/icons/globe.svg" class="mx-auto invert">
                Webb + SEO <br>
            </button>
        </div>

        <div class="flex button-row xs:mt-4">
            <button v-on:click="$store.commit('selectServiceType','web')" class="button-base xs:button-xs hover:button-hover">
                <img src="../../assets/icons/globe.svg" class="mx-auto invert">
                Webb + SEO <br>
            </button>

            <button v-on:click="$store.commit('selectServiceType','web')" class="button-base xs:button-xs hover:button-hover">
                <img src="../../assets/icons/globe.svg" class="mx-auto invert">
                Webb + SEO <br>
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "WebOffers",
    computed: mapState(['serviceNeeded','serviceType'])
}
</script>

<style>

</style>