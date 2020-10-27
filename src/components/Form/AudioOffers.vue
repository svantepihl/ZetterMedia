<template>
    <div class="flex justify-items-center place-content-start items-center h-full w-full text-xs sm:text-lg flex-col lg:mt-4">
        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectServiceType', 'podcast')" class="button-base">
                    <img src="../../assets/icons/sound-waves.svg" class="m-auto invert">
                    Podcast
                </button>

                <button v-on:click="$store.commit('selectServiceType', 'voiceover')" class="button-base">
                    <img src="../../assets/icons/sound-waves.svg" class="m-auto invert">
                    Voice over
                </button>
        </div>

        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectServiceType', 'audiodesign')" class="button-base">
                    <img src="../../assets/icons/sound-waves.svg" class="m-auto invert">
                    Ljuddesign
                </button>

                <button v-on:click="$store.commit('selectServiceType', 'other')" class="button-base">
                    <img src="../../assets/icons/sound-waves.svg" class="m-auto invert">
                    Annat
                </button>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "AudioOffers",
    computed: mapState(['serviceNeeded','serviceType'])
}
</script>

<style>

</style>