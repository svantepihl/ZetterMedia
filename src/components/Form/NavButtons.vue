<template>
    <div class="flex flex-wrap mx-auto justify-items-center mb-4 justify-center">
        <button v-on:click="$store.commit('previous')" v-if="currentStep > 0" class="nav-button hover:button-hover">
            Tillbaka
        </button>

        <button v-on:click="$store.commit('next')" v-if="currentStep == 3"  class="nav-button hover:button-hover">
            Fortsätt
        </button>

        <button v-on:click="submit" v-if="currentStep == 4"  class="nav-button hover:button-hover">
            Skicka!
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
    name: "NavButtons",
    computed: mapState(['currentStep','servicesNeeded']),
    methods: {
    async submit() {
        try {
            await axios.post(
            '/.netlify/functions/sendgrid',
            {
                message: 'My email message, in the real world this would probably come from form data '
            }
            )
            alert('Thank you, your message was sent successfully!')
        } catch (e) {
            console.error(e)
            alert('Error:  Your message could not be sent')
        }
    }
}

}
</script>

<style>

.nav-button{
    @apply mx-2; 
    @apply bg-transparent; 
    @apply text-white; 
    @apply font-semibold; 
    @apply py-2; 
    @apply px-4;
    @apply border-2; 
    @apply border-white; 
    @apply rounded;
    transition: all 0.3s;
}

.nav-button:hover{
    @apply border-4;
}

</style>