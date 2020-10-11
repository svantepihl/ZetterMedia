<template>
    <div class="flex flex-wrap mx-auto justify-items-center mb-4 justify-center">
        <button v-on:click="$store.commit('previous')" v-if="currentStep > 0" class=" text-xs sm:text-sm mx-2 bg-transparent hover:bg-orange text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            Tillbaka
        </button>

        <button v-on:click="$store.commit('next')" v-if="currentStep > 4" class=" mx-2 bg-transparent hover:bg-orange text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            Skicka!
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "NavButtons",
    computed: mapState(['currentStep','servicesNeeded'])

}
</script>

<style>

</style>