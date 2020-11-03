<template>
<div class="relative min-w-screen w-screen min-h-screen h-auto bg-green text-white z-40 pt-16 pb-8 md:pb-12 lg:pt-32">
  <h1 class="absolute right-0 top-0 mt-8 lg:mt-16 mr-3 lg:mr-6 text-3xl xs:text-3xl lg:text-5xl"> våra tjänster. </h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 md:gap-x-20 gap-y-8 xs:gap-y-12 lg:gap-y-24 h-auto mx-4 xs:mx-8 lg:mx-24 my-10">
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <h1 class="service-heading text-2xl lg:text-3xl">
        Film & rörligt
      </h1>
      <p class="service-text">
        Inget säljer som film. Inget fångar uppmärksamhet som film. Ligg i framkant med din marknadsföring. Vad väntar ni på? 
        Kom igång och skapa effektfulla filmproduktioner med våra kreativa filmskapare!
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <h1 class="service-heading text-2xl lg:text-3xl">
        Ljuddesign
      </h1>
      <p class="service-text">
        Ljud som fångar intresse, ljud som känns & ljud som säljer. 
        Stick ut i mediabruset med kraftfull ljuddesign. Visst låter det bra? 
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <h1 class="service-heading text-2xl lg:text-3xl">
        Podcast 
      </h1>
      <p class="service-text">
        Du har en röst och den förtjänar att höras. Vi hjälper er komma igång med er egen podcast.
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <h1 class="service-heading text-2xl lg:text-3xl">
        Streaming 
      </h1>
      <p class="service-text">
        I tider när vi inte kan ses, när vi vill spara på miljön eller nå en bred publik så är streaming den ultimata lösningen. 
        Möten, event eller konserter. Facebook, Youtube, Vimeo, Zoom eller Teams? Bara din fantasi sätter gränser. 
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <h1 class="service-heading text-2xl lg:text-3xl">
        Social Media Content
      </h1>
      <p class="service-text">
        Content till sociala kanaler är viktigt, det vet alla! Men också svårt och tidskrävande. 
        Låt oss ta hand om ditt innehåll från planering till publicering. #contentcreators
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <h1 class="service-heading text-2xl lg:text-3xl">
        SEO + Webbanalys 
      </h1>
      <p class="service-text">
        Optimera din närvaro på internet med vår populära webbanalys och öka trafiken via google till din hemsida med riktad sökoptimering.
      </p>
    </div>
    <div class="service lg:col-span-2 lg:col-start-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <h1 class="service-heading text-2xl lg:text-3xl">
        Hemsida
      </h1>
      <p class="service-text">
        Vi bygger hemsidor utifrån dina behov och önskemål. Optimerade för att din business ska växa. 
        Tips! Komplettera med vårt SEO-paket för att ge din hemsida en ordentlig boost.
      </p>
    </div>
    <div class="service lg:col-span-2" v-scroll-reveal="{ delay: 250, distance: '50px' }">
      <h1 class="service-heading text-2xl lg:text-3xl">
        Grafisk profil 
      </h1>
      <p class="service-text">
        Din identitet och ditt varumärke går hand i hand. Din grafiska design är det första en kund ser. 
        Vi skapar grafiska profiler till företag som vill synas och höras.
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
.column-height {
  max-height: 12rem;
}

.service{
  @apply h-auto;
  max-height: 20rem;
  @apply text-left;
  @apply flex;
  @apply flex-col;
  @apply align-middle;
  @apply justify-items-start;
  max-width: 24rem;
}

.service-text {
  @apply mb-2;
}

.service-heading {
  @apply my-2;
}

.floating-right {
  @apply absolute;
  @apply text-base
}

@screen lg {
  .floating-right {
  right: 5rem;
  top: 2rem;
}
}


</style>