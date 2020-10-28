<template>
    <div class="flex justify-items-center place-content-start items-center sm:mt-5 h-full w-full text-xs sm:text-lg flex-col lg:mt-4">
        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectServiceType', 'commercial')" class="button-base">
                    <img src="../../assets/icons/budget.svg" class="m-auto invert">
                    0-10 000 SEK
                </button>

                <button v-on:click="$store.commit('selectServiceType', 'businessvideo')" class="button-base">
                    <img src="../../assets/icons/budget.svg" class="m-auto invert">
                    10-25 000 SEK
                </button>
        </div>

        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectServiceType', 'musicvideo')" class="button-base">
                    <img src="../../assets/icons/budget.svg" class="m-auto invert">
                    25 000+ SEK
                </button>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Budget",
    computed: mapState(['budget'])
}
</script>

<style>

</style>