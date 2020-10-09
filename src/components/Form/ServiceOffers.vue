<template>
    <div class="flex justify-items-center place-content-evenly items-center h-full w-full text-xs sm:text-lg flex-wrap flex-col">
        <div class="flex-1">
                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'audio', 'border-black' : serviceNeeded == 'audio' }" v-on:click="$store.commit('selectService', 'audio')" class="bg-transparent  font-semibold hover:text-black border border-blue hover:border-black rounded h-32 w-32 mx-2 my-1">
                    <font-awesome :icon="['fas', 'volume-up']" size="2x"/> <br>
                    Ljudproduktion
                </button>

                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'video', 'border-black' : serviceNeeded == 'video' }" v-on:click="$store.commit('selectService', 'video')" class=" bg-transparent  text-blue-dark font-semibold hover:text-black border border-blue hover:border-black rounded h-32 w-32 mx-2 my-1">
                    <font-awesome :icon="['fas', 'video']" size="2x"/> <br>
                    Videoproduktion
                </button>
        </div>

        <div class="flex-1 justify-items-center items-center">
                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'social', 'border-black' : serviceNeeded == 'social' }" v-on:click="$store.commit('selectService','social')" class="bg-transparent  text-blue-dark font-semibold hover:text-black border border-blue hover:border-black rounded h-32 w-32 mx-2 my-1">
                    <font-awesome :icon="['fas', 'hashtag']" size="2x"/> <br>
                    Social Media Content
                </button>

                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'web', 'border-black' : serviceNeeded == 'web' }" v-on:click="$store.commit('selectService','web')" class="bg-transparent  text-blue-dark font-semibold hover:text-black border border-blue hover:border-black rounded h-32 w-32 mx-2 my-1">
                    <font-awesome :icon="['fas', 'sitemap']" size="2x" /> <br>
                    Webb + SEO
                </button>
        </div>

        <div class="flex-1">
                <button v-bind:class="{ 'boder-2' : serviceNeeded == 'stream', 'border-black' : serviceNeeded == 'stream' }" v-on:click="$store.commit('selectService','stream')" class="bg-transparent  text-blue-dark font-semibold hover:text-black border border-blue hover:border-black rounded h-32 w-32 mx-2 my-1">
                    <font-awesome :icon="['fas', 'rss']" size="2x" /> <br>
                    Streaming
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

</style>