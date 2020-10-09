<template>
    <div class="h-full w-full mx-auto">
        
            <h1 class=" text-2xl sm:text-4xl text-center">       
                <span id="1" v-if="currentStep == 0">Vad behöver ni hjälp med?</span>
                <span id="2" v-else-if="currentStep == 1 && serviceNeeded == 'video'">Vilken typ av video?</span>
                <span id="2" v-else-if="currentStep == 2">Kontaktuppgifter</span>
            </h1>


            <ServiceOffers v-if="currentStep == 0"></ServiceOffers>
            <VideoOffers v-else-if="currentStep == 1 && serviceNeeded == 'video'"></VideoOffers>
            <ContactInfo v-else-if="currentStep == 2"> </ContactInfo>
            

    </div>
</template>

<script>
import { mapState } from 'vuex';
import VideoOffers from '../Form/VideoOffers';
import ServiceOffers from '../Form/ServiceOffers'
import ContactInfo from '../Form/ContactInfo'
export default {
    name: "Offers",
    computed: mapState(['serviceNeeded','currentStep']),
    components: {VideoOffers,ServiceOffers,ContactInfo}
}
</script>


<style scoped>

</style>>
