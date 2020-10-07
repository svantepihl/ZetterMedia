<template>
    <div class="flex mt-20 justify-items-center place-content-evenly items-center h-full w-full">
        <div class="w-1/6 h-full flex justify-items-center items-center">
            <button v-bind:class="{ 'boder-2' : serviceNeeded == 'audio', 'border-black' : serviceNeeded == 'audio' }" v-on:click="$store.commit('selectService', 'audio')" class="mx-auto bg-transparent hover:bg-blue font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                <font-awesome :icon="['fas', 'volume-up']" size="5x"/> <br>
                Ljudproduktion
            </button>
        </div>

        <div class="w-1/6 h-full flex justify-items-center items-center">
            <button v-bind:class="{ 'boder-2' : serviceNeeded == 'video', 'border-black' : serviceNeeded == 'video' }" v-on:click="$store.commit('selectService', 'video')" class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                <font-awesome :icon="['fas', 'video']" size="5x"/> <br>
                Videoproduktion
            </button>
        </div>

        <div class="w-1/6 h-full flex justify-items-center items-center">
            <button v-bind:class="{ 'boder-2' : serviceNeeded == 'social', 'border-black' : serviceNeeded == 'social' }" v-on:click="$store.commit('selectService','social')" class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                <font-awesome :icon="['fas', 'hashtag']" size="5x"/> <br>
                Social Media Content
            </button>
        </div>

        <div class="w-1/6 h-full flex justify-items-center items-center">
            <button v-bind:class="{ 'boder-2' : serviceNeeded == 'web', 'border-black' : serviceNeeded == 'web' }" v-on:click="$store.commit('selectService','web')" class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                <font-awesome :icon="['fas', 'sitemap']" size="5x" /> <br>
                Webb + SEO
            </button>
        </div>

        <div class="w-1/6 h-full flex justify-items-center items-center">
            <button v-bind:class="{ 'boder-2' : serviceNeeded == 'stream', 'border-black' : serviceNeeded == 'stream' }" v-on:click="$store.commit('selectService','stream')" class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                <font-awesome :icon="['fas', 'rss']" size="5x" /> <br>
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