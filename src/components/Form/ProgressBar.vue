<template>
    <div class="h-full p-0 m-0 z-50 relative bottom-0">
        <div class="overflow-hidden h-full w-full">
                <div id="bar" v-bind:style="{width: currentStep*25 + '%'}" class="h-full min-h-full transition duration-500 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"></div>
        </div>
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
    transition: width 1.5s
}

</style>