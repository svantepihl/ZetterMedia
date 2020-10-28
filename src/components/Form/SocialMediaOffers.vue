<template>
    <div class="flex justify-items-center place-content-start items-center sm:mt-5 h-full w-full text-xs sm:text-lg flex-col lg:mt-4">
        <div class="flex button-row xs:mt-4">
            <button v-on:click="$store.commit('selectServiceType','photo')" class="button-base xs:button-xs hover:button-hover">
                <img src="../../assets/icons/social-media-marketing.svg" class="mx-auto invert">
                Grafisk design & Foto
            </button>

            <button v-on:click="$store.commit('selectServiceType','film')" class="button-base xs:button-xs hover:button-hover">
                <img src="../../assets/icons/social-media-marketing.svg" class="mx-auto invert">
                Film & Rörligt
            </button>
        </div>

        <div class="flex button-row xs:mt-4">
                <button v-on:click="$store.commit('selectServiceType', 'strategy')" class="button-base">
                    <img src="../../assets/icons/social-media-marketing.svg" class="mx-auto invert">
                    Strategi & optimering
                </button>

                <button v-on:click="$store.commit('selectServiceType', 'other')" class="button-base">
                    <img src="../../assets/icons/social-media-marketing.svg" class="mx-auto invert">
                    Annat
                </button>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "SocialMediaOffers",
    computed: mapState(['serviceNeeded','serviceType'])
}
</script>

<style>

</style>