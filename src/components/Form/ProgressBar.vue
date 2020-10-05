<template>
    <div class="h-12 p-0 bottom-0 m-0 mt-auto z-50">
        <div class="overflow-hidden h-12 w-full m-0 text-xs flex">
            <transition name="fade">
                <div id="bar" v-bind:style="{width: currentStep*25 + '%'}" class="transition duration-500 ease-in-out w-1/4 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"></div>
            </transition>
        </div>
    </div>  
</template>

<script>
import 'animate.css'
import { mapState } from 'vuex';
export default {
    name: "ProgressBar",
    computed: mapState(['currentStep'])
}
</script>

<style>

#bar{
    transition: width 1.5s
}

</style>