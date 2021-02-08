<template>
<div id="services" class="relative min-w-screen w-screen min-h-screen h-auto bg-green text-white z-40 pt-16 pb-8 md:pb-12 lg:pt-24 flex items-center justify-center">
  <h1 class="absolute right-0 top-0 mt-8 lg:mt-16 mr-3 lg:mr-6 text-3xl xs:text-3xl lg:text-5xl whitespace-nowrap"> våra tjänster. </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-8 md:gap-x-20 gap-y-8 xs:gap-y-12 lg:gap-y-20 h-auto mx-4 xs:mx-8 lg:mx-20 my-12">
  

    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <div>
        <h1 class="service-heading text-xl lg:text-2xl">
          <span class="FirstLetter">L</span>juddesign
        </h1>
        <g-image src="../assets/icons/services/half-circle.png" class="absolute w-8 right-0 top-0 half-circle"/>
      </div>
      <p class="service-text">
        Ljud som fångar intresse, ljud som känns & ljud som säljer. 
        Stick ut i mediabruset med kraftfull ljuddesign. Visst låter det bra? 
      </p>
      
    </div>

    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <div>
        <h1 class="service-heading text-xl lg:text-2xl">
          <span class="FirstLetter">F</span>ilmproduktion
        </h1>
        <g-image src="../assets/icons/services/plus.png" class="absolute w-8 right-0 top-0 plus"/>
      </div>
      <p class="service-text">
        Inget säljer som film. Inget fångar uppmärksamhet som film. Ligg i framkant med din marknadsföring. Vad väntar ni på? 
        Kom igång och skapa effektfulla filmproduktioner med våra kreativa filmskapare!
      </p>
    </div>

    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <div>
        <h1 class="service-heading text-xl lg:text-2xl">
          <span class="FirstLetter no-spacing">P</span>odcast 
        </h1>
        <g-image src="../assets/icons/services/circle.png" class="absolute w-8 right-0 top-0 circle"/>
      </div>
      <p class="service-text">
        Du har en röst och den förtjänar att höras. Vi hjälper er komma igång med er egen podcast.
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <div>
        <h1 class="service-heading text-xl lg:text-2xl">
          <span class="FirstLetter">S</span>treaming 
        </h1>
        <g-image src="../assets/icons/services/hex.png" class="absolute w-8 right-0 top-0 hex"/>
      </div>
      <p class="service-text">
        I tider när vi inte kan ses, när vi vill spara på miljön eller nå en bred publik så är streaming den ultimata lösningen. 
        Möten, event eller konserter. Facebook, Youtube, Vimeo, Zoom eller Teams? Bara din fantasi sätter gränser. 
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <div>
        <h1 class="service-heading text-base lg:text-2xl">
          <span class="FirstLetter">S</span>ocial Media Content
        </h1>
        <g-image src="../assets/icons/services/diamond.png" class="absolute w-8 right-0 top-0 diamond"/>
      </div>
      <p class="service-text">
        Content till sociala kanaler är viktigt, det vet alla! Men också svårt och tidskrävande. 
        Låt oss ta hand om ditt innehåll från planering till publicering. #contentcreators
      </p>
    </div>

    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <div>
        <h1 class="service-heading text-xl lg:text-2xl">
          <span class="FirstLetter">G</span>rafisk profil 
        </h1>
        <g-image src="../assets/icons/services/flag.png" class="absolute w-8 right-0 top-0 flag"/>
      </div>
      <p class="service-text">
        Din identitet och ditt varumärke går hand i hand. Din grafiska design är det första en kund ser. 
        Vi skapar grafiska profiler till företag som vill synas och höras.
      </p>
    </div>

    <div class="service lg:col-span-2 lg:col-start-2 xl:col-start-auto" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <div>
        <h1 class="service-heading text-xl lg:text-2xl">
          <span class="FirstLetter">S</span>EO + Webbanalys 
        </h1>
        <g-image src="../assets/icons/services/pyramid.png" class="absolute w-8 right-0 top-0 pyramid"/>
      </div>
      <p class="service-text">
        Optimera din närvaro på internet med vår populära webbanalys och öka trafiken via google till din hemsida med riktad sökoptimering.
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <div>
        <h1 class="service-heading text-xl lg:text-2xl">
          <span class="FirstLetter">H</span>emsida
        </h1>
        <g-image src="../assets/icons/services/lightning.png" class="absolute w-10 right-0 top-0 lightning"/>
      </div>
      <p class="service-text">
        Vi bygger hemsidor utifrån dina behov och önskemål. Optimerade för att din business ska växa. 
        Tips! Komplettera med vårt SEO-paket för att ge din hemsida en ordentlig boost.
      </p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "Services"
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
  @apply overflow-hidden;
}

.service-text {
  @apply mb-2;
  @apply text-sm;
  @apply max-w-xs
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
  @apply pr-16;
}

@screen lg {
  .floating-right {
  right: 5rem;
  top: 2rem;
}
}

.half-circle {
  margin-top: 3.1rem;
  margin-right: 6.6rem;
}

.plus {
  margin-top: 3.1rem;
  margin-right: 4.3rem;
}

.circle {
  margin-top: 3.1rem;
  margin-right: 9rem;
}

.hex {
  margin-top: 3.1rem;
  margin-right: 7.3rem;
}

.diamond {
  margin-top: 3.1rem;
  margin-right: -0.4rem;
}

.flag {
  margin-top: 3.1rem;
  margin-right: 5rem;
}

.pyramid {
  margin-top: 3.1rem;
  margin-right: 1.9rem;
}

.lightning {
  margin-top: 2.8rem;
  margin-right: 7.4rem;
}


</style>