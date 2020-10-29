<template>
    <div class="flex flex-wrap mx-auto justify-items-center mb-4 justify-center">
        <button v-on:click="$store.commit('previous')" v-if="currentStep > 0 && currentStep < 5" class="nav-button hover:button-hover lg:text-xl">
            Tillbaka
        </button>

        <button v-on:click="$store.commit('next')" v-if="currentStep == 3"  class="nav-button hover:button-hover lg:text-xl">
            Fortsätt
        </button>

        <button v-on:click="submit" v-if="currentStep == 4"  class="nav-button hover:button-hover lg:text-xl">
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
    computed: mapState(['currentStep','email','tel','budget','serviceNeeded','serviceType','desc']),
    methods: {
    async submit() {
        this.$store.commit("next")
        try {
            await axios.post(
            '/.netlify/functions/sendgrid',
            {
                message: "<h1>Kontaktinfo:</h1>" +
                "Namn: " + this.$store.state.name + "<br>" +
                "Email: " + this.$store.state.email + "<br>" +
                "Telefon: " + this.$store.state.tel + "<br>" +
                "<h2>Info:</h2>" +
                "Tjänst: " + this.$store.state.serviceNeeded + "<br>" +
                "Typ: " + this.$store.state.serviceType + "<br>" +
                "Budget: " + this.$store.state.budget + "<br>" +
                "Beskrivning: " + this.desc
            }
            )
            console.log('Thank you, your message was sent successfully!')
        } catch (e) {
            console.error(e)
            console.log('Error:  Your message could not be sent')
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