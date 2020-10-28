<template>
    <div class="h-full w-full mx-auto content-center">
        
            <h1 class="text-white text-xl xs:text-2xl sm:text-4xl text-center">       
                <span id="1" v-if="currentStep == 0">Vad vill du ha hjälp med?</span>
                <span id="2" v-else-if="currentStep == 1 && serviceNeeded == 'video'">Vilken typ av video?</span>
                <span id="2" v-else-if="currentStep == 1 && serviceNeeded == 'stream'">Välj streaming paket:</span>
                <span id="2" v-else-if="currentStep == 1 && serviceNeeded == 'audio'">Vilken typ?</span>
                <span id="2" v-else-if="currentStep == 1 && serviceNeeded == 'social'">Vilken typ?</span>
                <span id="2" v-else-if="currentStep == 2">Budget?</span>
                <span id="2" v-else-if="currentStep == 3">Beskriv kort din idé!</span>
                <span id="2" v-else-if="currentStep == 4">Fyll i dina uppgifter så hör vi av oss!</span>
            </h1>

            <ServiceOffers v-if="currentStep == 0"></ServiceOffers>
    
            <VideoOffers v-else-if="currentStep == 1 && serviceNeeded == 'video'" class=""></VideoOffers>
            <AudioOffers v-else-if="currentStep == 1 && serviceNeeded == 'audio'"></AudioOffers>
            <StreamingOffers v-else-if="currentStep == 1 && serviceNeeded == 'stream'"></StreamingOffers>
            <SocialMediaOffers v-else-if="currentStep == 1 && serviceNeeded == 'social'" ></SocialMediaOffers>
            <Budget v-else-if="currentStep == 2"></Budget>
            <Description v-else-if="currentStep == 3" ></Description>
            <ContactInfo v-else-if="currentStep == 4"> </ContactInfo>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import VideoOffers from '../Form/VideoOffers';
import ServiceOffers from '../Form/ServiceOffers'
import ContactInfo from '../Form/ContactInfo'
import AudioOffers from '../Form/AudioOffers'
import StreamingOffers from '../Form/StreamingOffers'
import SocialMediaOffers from '../Form/SocialMediaOffers'
import Budget from '../Form/Budget'
import Description from '../Form/Description'

export default {
    name: "Offers",
    computed: mapState(['serviceNeeded','currentStep']),
    components: {VideoOffers,ServiceOffers,ContactInfo, AudioOffers,StreamingOffers,SocialMediaOffers,Budget,Description}
}
</script>


<style>
</style>
