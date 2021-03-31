<template>
<div id="about" class="min-h-screen w-screen relative bg-bggrey flex items-center justify-center z-50 border-t-8 border-eggwhite">
    <PageTitle class="text-white" title="vår vision."/>
    <div class="container mx-auto my-40" v-scroll-reveal="{ delay: 100, distance:'15rem'}">
        <div class="grid px-6 grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
            <div class="border-white col-span-1 md:col-span-2 flex justify-start items-center flex-col">
                <div class="container h-full max-w-2xl flex justify-center items-start flex-col">
                    <h1 class="text-white text-4xl md:text-5xl">
                        Vi skapar starka VARUMÄRKEN.
                    </h1>
                    <p class=" text-eggwhite mt-2 text-base md:text-2xl">
                        Vi skapar starka varumärken. Kommunikation finns i vårt dna - och vi vågar sticka ut! Content ska synas, höras och kännas i alla sammanhang. 
                        Vår byrå bygger på ett enkelt koncept - rätt person på rätt plats. Vi har en liten kärna men ett stort nätverk av kreativa människor som tillför magi till våra projekt. 
                        Marknadsföring ska vara effektfullt och vi brinner för att ta ditt varumärke till nästa nivå -
                        Välkommen till Zetter Media.
                    </p>
                    <h1 class="text-white text-4xl md:text-5xl mt-8">
                        Vår miljö håller på att gå sönder.
                    </h1>
                    <p class="text-eggwhite mt-2 text-base md:text-2xl">
                        Vår miljö håller på att gå sönder. En stor orsak till det är att företag inte tar sitt ansvar för miljön. Vi tar ansvar, därför klimatkompenserar vi för alla våra resor.
                        Läs mer om detta hos <a target="#" href="https://viskogen.se/vart-arbete/">Vi Skogen</a>.
                    </p>
                </div>
            </div>
            <div class="hidden md:block object-contain">
                <g-image class="max-w-sm w-full h-full max-h-full object-contain" src="../assets/img/vision.jpg"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import PageTitle from '../components/PageTitle'
export default {
    name: "Vision",
    components: {PageTitle}
}
</script>

<style>

</style>