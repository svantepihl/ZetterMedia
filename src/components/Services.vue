<template>
<div id="services" class="relative min-w-screen w-screen min-h-screen h-auto bg-bggrey text-white z-40 pt-16 pb-8 md:pb-12 lg:pt-24 flex items-center justify-center">
  <PageTitle title="våra tjänster."></PageTitle>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-8 md:gap-x-8 lg:gap-x-10 xl:gap-x-12 gap-y-8 xs:gap-y-12 lg:gap-y-20 h-auto mx-4 xs:mx-8 lg:mx-8 my-12">
  
    
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <g-link href="#">
        <div class="title-container">
          <g-image src="../assets/icons/services/plus.png" class="icon"/>
          <h1 class="service-heading text-xl lg:text-2xl">
            <span class="FirstLetter">F</span>ilmproduktion
          </h1>
        </div>
        <p class="service-text">
          Inget säljer som film. Inget fångar uppmärksamhet som film. Ligg i framkant med din marknadsföring. Vad väntar ni på? 
          Kom igång och skapa effektfulla filmproduktioner med våra kreativa filmskapare!
        </p>
      </g-link>
    </div>

    <div class="service col-span-1 lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <g-link href="#">
        <div class="title-container">
          <h1 class="service-heading text-xl lg:text-2xl">
            <span class="FirstLetter">S</span>treaming 
          </h1>
          <g-image src="../assets/icons/services/hex.png" class="icon"/>
        </div>
        <p class="service-text">
          I tider när vi inte kan ses, när vi vill spara på miljön eller nå en bred publik så är streaming den ultimata lösningen. 
          Möten, event eller konserter. Facebook, Youtube, Vimeo, Zoom eller Teams? Bara din fantasi sätter gränser. 
        </p>
      </g-link>
    </div>

    <div class="service col-span-1 lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <g-link href="#">
        <div class="title-container">
          <g-image src="../assets/icons/services/half-circle.png" class="icon"/>
          <h1 class="service-heading text-xl lg:text-2xl">
            <span class="FirstLetter">L</span>juddesign
          </h1>
        </div>
        <p class="service-text">
          Ljud som fångar intresse, ljud som känns & ljud som säljer. 
          Stick ut i mediabruset med kraftfull ljuddesign. Visst låter det bra? 
        </p>
      </g-link>
    </div>

    <div class="service col-span-1 lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <g-link href="#">
        <div class="title-container">
          <h1 class="service-heading text-xl lg:text-2xl">
            <span class="FirstLetter no-spacing">P</span>odcast 
          </h1>
          <g-image src="../assets/icons/services/circle.png" class="icon"/>
        </div>
        <p class="service-text">
          Du har en röst och den förtjänar att höras. Vi hjälper er komma igång med er egen podcast.
        </p>
      </g-link>
    </div>

    <div class="service col-span-1 lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <g-link href="#">
        <div class="title-container">
          <h1 class="service-heading text-xl lg:text-2xl">
            <span class="FirstLetter">H</span>emsida
          </h1>
          <g-image src="../assets/icons/services/lightning.png" class="icon"/>
        </div>
        <p class="service-text">
          Vi bygger hemsidor utifrån dina behov och önskemål. Optimerade för att din business ska växa. 
          Tips! Komplettera med vårt SEO-paket för att ge din hemsida en ordentlig boost.
        </p>
      </g-link>
    </div>

    <div class="service col-span-1 lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <g-link href="#">
        <div class="title-container">
          <h1 class="service-heading text-xl lg:text-2xl">
            <span class="FirstLetter">S</span>EO + Webbanalys 
          </h1>
          <g-image src="../assets/icons/services/pyramid.png" class="icon"/>
        </div>
        <p class="service-text">
          Optimera din närvaro på internet med vår populära webbanalys och öka trafiken via google till din hemsida med riktad sökoptimering.
        </p>
      </g-link>
    </div>

    <div class="service col-span-1 lg:col-span-2 lg:col-start-2 xl:col-start-auto" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <g-link href="#">
        <div class="title-container">
          <h1 class="service-heading text-xl lg:text-2xl">
            <span class="FirstLetter">G</span>rafisk profil 
          </h1>
          <g-image src="../assets/icons/services/flag.png" class="icon"/>
        </div>
        <p class="service-text">
          Din identitet och ditt varumärke går hand i hand. Din grafiska design är det första en kund ser. 
          Vi skapar grafiska profiler till företag som vill synas och höras.
        </p>
      </g-link>
    </div>

    <div class="service col-span-1 lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <g-link href="#">
        <div class="title-container">
          <h1 class="service-heading text-base lg:text-2xl">
            <span class="FirstLetter">S</span>ocial Media Content
          </h1>
          <g-image src="../assets/icons/services/diamond.png" class="icon"/>
        </div>
        <p class="service-text">
          Content till sociala kanaler är viktigt, det vet alla! Men också svårt och tidskrävande. 
          Låt oss ta hand om ditt innehåll från planering till publicering. #contentcreators
        </p>
      </g-link>
    </div>
  </div>
</div>

</template>

<script>
import PageTitle from '../components/PageTitle'
export default {
  name: "Services",
  components: {PageTitle}
}
</script>

<style scoped>
.no-spacing {
  letter-spacing: -0.7rem;
}

.column-height {
  max-height: 12rem;
}

.service{
  @apply h-auto;
  @apply text-left;
  @apply flex;
  @apply text-base;
  @apply flex-col;
  @apply align-middle;
  @apply justify-items-start;
  @apply px-4;
  border: 5px solid transparent; /* <- here */
  transition: border 1.4s;
}

.service:hover {
    border-bottom: 5px solid whitesmoke;
    border-top: 5px solid whitesmoke;
}

.service:active {
    border-bottom: 5px solid whitesmoke;
    border-top: 5px solid whitesmoke;
}

.service-text {
  @apply pb-2;
  @apply mb-2;
  @apply text-sm;
  max-width: 18rem;
}

.FirstLetter{
  @apply text-yellow;
  font-size: 4rem;
  line-height: 5rem;
}

.service-heading {
  @apply whitespace-nowrap;
  @apply inline-block;
  @apply w-auto;
  @apply my-2;
  @apply border-b-8; 
  @apply border-yellow;
  @apply pr-12;
}

.title-container{
  @apply inline-block;
  @apply relative;
  width: fit-content;
}

.icon {
  @apply w-8; 
  @apply absolute;
  @apply right-0;
  @apply bottom-0;
  @apply mb-6;
  @apply float-right;
}


</style>