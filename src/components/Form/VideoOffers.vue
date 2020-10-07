<template>
        <div class="flex mt-20 justify-items-center place-content-evenly items-center h-full w-full">
            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button v-bind:class="{ 'boder-2' : serviceType == 'reklam', 'border-black' : serviceType == 'reklam' }" v-on:click="$store.commit('selectServiceType', 'reklam')" class="mx-auto bg-transparent hover:bg-blue font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    Reklamfilm
                </button>
            </div>

            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button v-bind:class="{ 'boder-2' : serviceType == 'businessvideo', 'border-black' : serviceType == 'businessvideo' }" v-on:click="$store.commit('selectServiceType', 'businessvideo')" class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    Företagsfilm
                </button>
            </div>

            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button v-bind:class="{ 'boder-2' : serviceType == 'musicvideo', 'border-black' : serviceType == 'musicvideo' }" v-on:click="$store.commit('selectServiceType','musicvideo')" class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    Musikvideo
                </button>
            </div>

            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button v-bind:class="{ 'boder-2' : serviceType == 'annat', 'border-black' : serviceType == 'annat' }" v-on:click="$store.commit('selectServiceType','annat')" class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    Annat
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