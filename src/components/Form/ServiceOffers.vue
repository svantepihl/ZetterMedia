<template>
    <div class="flex justify-items-center place-content-start items-center sm:mt-5 h-full w-full text-xs sm:text-lg flex-col lg:mt-24">
        <div class="flex button-row">
                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'audio', 'border-orange' : serviceNeeded == 'audio' }" v-on:click="$store.commit('selectService', 'audio')" class="button-base">
                    <font-awesome :icon="['fas', 'volume-up']" size="2x"/> <br>
                    Ljudproduktion
                </button>

                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'video', 'border-orange' : serviceNeeded == 'video' }" v-on:click="$store.commit('selectService', 'video')" class="button-base xs:button-xs hover:button-hover">
                    <font-awesome :icon="['fas', 'video']" size="2x"/> <br>
                    Videoproduktion
                </button>

                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'stream', 'border-orange' : serviceNeeded == 'stream' }" v-on:click="$store.commit('selectService','stream')" class="button-base xs:button-xs hover:button-hover hidden lg:block landscape:block">
                    <font-awesome :icon="['fas', 'rss']" size="2x" /> <br>
                    Streaming <br>
                </button>
        </div>

        <div class="flex button-row">
                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'social', 'border-orange' : serviceNeeded == 'social' }" v-on:click="$store.commit('selectService','social')" class="button-base xs:button-xs hover:button-hover">
                    <font-awesome :icon="['fas', 'hashtag']" size="2x"/> <br>
                    Social Media
                </button>

                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'web', 'border-orange' : serviceNeeded == 'web' }" v-on:click="$store.commit('selectService','web')" class="button-base xs:button-xs hover:button-hover">
                    <font-awesome :icon="['fas', 'sitemap']" size="2x" /> <br>
                    Webb + SEO <br>
                </button>
        </div>

        <div class="flex button-row">
                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'stream', 'border-orange' : serviceNeeded == 'stream' }" v-on:click="$store.commit('selectService','stream')" class="button-base xs:button-xs hover:button-hover landscape:hidden lg:hidden">
                    <font-awesome :icon="['fas', 'rss']" size="2x" /> <br>
                    Streaming <br>
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