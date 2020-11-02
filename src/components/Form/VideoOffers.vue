<template>
    <div class="flex justify-items-center place-content-start items-center sm:mt-5 h-full w-full text-xs sm:text-lg flex-col lg:mt-4">
        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectServiceType', 'commercial')" class="button-base">
                    <img src="../../assets/icons/video-camera-with-play-button.svg" class="m-auto invert">
                    <p> Reklamfilm </p>
                </button>

                <button v-on:click="$store.commit('selectServiceType', 'businessvideo')" class="button-base">
                    <img src="../../assets/icons/video-camera-with-play-button.svg" class="m-auto invert">
                    <p> Företagsfilm </p>
                </button>
        </div>

        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectServiceType', 'musicvideo')" class="button-base">
                    <img src="../../assets/icons/video-camera-with-play-button.svg" class="m-auto invert">
                    <p> Musikvideo </p>
                </button>

                <button v-on:click="$store.commit('selectServiceType', 'other')" class="button-base">
                    <img src="../../assets/icons/video-camera-with-play-button.svg" class="m-auto invert">
                    <p> Annat </p>
                </button>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "VideoOffers",
    computed: mapState(['serviceNeeded','serviceType'])
}
</script>

<style>

</style>