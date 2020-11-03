<template>
    <div class="h-full p-0 m-0 z-50 relative bottom-0 bg-orange">
        <transition name="fade">
        <div v-if="currentStep < 5" class="overflow-hidden h-full w-full">
                <div id="bar" v-bind:style="{width: currentStep*25 + '%'}" class="h-full min-h-full transition duration-500 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-white"></div>
        </div>
        </transition>
    </div>  
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "ProgressBar",
    computed: mapState(['currentStep'])
}
</script>

<style>

#bar{
    transition: all 1s
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>