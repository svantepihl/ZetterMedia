<template>
    <div class="flex justify-items-center place-content-start items-center h-full w-full text-xs sm:text-lg flex-col lg:mt-4">
        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectService', 'audio')" class="button-base">
                    <img src="../../assets/icons/sound-waves.svg" class="mx-auto invert">
                    <p> Ljudproduktion </p>
                </button>

                <button v-on:click="$store.commit('selectService', 'video')" class="button-base">
                    <img src="../../assets/icons/video-camera-with-play-button.svg" class="mx-auto invert">
                    <p> Videoproduktion </p>
                </button>

                <button v-on:click="$store.commit('selectService','stream')" class="button-base hidden lg:block landscape:block">
                    <img src="../../assets/icons/live-streaming.svg" class="mx-auto invert">
                    <p> Streaming <br> </p>
                </button>
        </div>

        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectService','social')" class="button-base">
                    <img src="../../assets/icons/social-media-marketing.svg" class="mx-auto invert">
                    <p>Social Media</p>
                </button>

                <button v-on:click="$store.commit('selectService','web')" class="button-base">
                    <img src="../../assets/icons/globe.svg" class="mx-auto invert">
                    <p> Webb + SEO <br> </p>
                </button>
        </div>

        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectService','stream')" class="button-base landscape:hidden lg:hidden">
                    <img src="../../assets/icons/live-streaming.svg" class="mx-auto invert">
                    <p> Streaming <br> </p>
                </button>
        </div>
    </div>
</template> 

<script>
import { mapState } from 'vuex';
import VideoOffers from '../Form/VideoOffers';
export default {
    name: "ServiceOffers",
    computed: mapState(['serviceNeeded','currentStep']),
}
</script>

<style>
/* .button-base {
    @apply bg-transparent;
    @apply font-semibold;
    @apply border;
    @apply border-gray-400;
    @apply rounded;
    height: 7rem;
    width: 7rem;
    font-size: 10px;
    @apply mx-2;
    margin-top: 9px;
}

.button-xs{
    height: 12rem;
    width: 12rem;
    font-size: 11px;
    @apply mx-2;
    margin-top: 9px;
}

.button-hover {
    @apply text-black; 
    @apply border-orange;
} */

.button-row {
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
}

</style>>