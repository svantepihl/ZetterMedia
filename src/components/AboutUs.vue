<template>
<div id="about" class="min-h-screen w-screen relative bg-white flex col z-50 black-to-white">
    <h1 class="absolute right-0 top-0 mt-8 lg:mt-12 mr-3 lg:mr-6 text-3xl xs:text-3xl lg:text-5xl"> om oss. </h1>
    <div class="min-h-full w-1/2 flex flex-col items-center justify-start mx-auto">
      <g-image src="../assets/img/animated_logo.gif" blur="none" alt="logo" class="w-full mt-32 mb-12"></g-image>
      <div class="md:w-3/3 p-5 flex flex-col items-center justify-center text-center mx-10 -mt-12 text-2xl">
        <p>
          Vi skapar starka varumärken. Kommunikation finns i vårt dna - och vi vågar sticka ut! Content ska synas, höras och kännas i alla sammanhang. Vår byrå bygger på ett enkelt koncept - rätt person på rätt plats. Vi har en liten kärna men ett stort nätverk av kreativa människor som tillför magi till våra projekt. Marknadsföring ska vara effektfullt och vi brinner för att ta ditt varumärke till nästa nivå -<br/> Välkommen till Zetter Media.
        </p>
        <p class="mt-4"> 
          Vår miljö håller på att gå sönder. En stor orsak till det är att företag inte tar sitt ansvar för miljön. Vi tar ansvar, därför klimatkompenserar vi för alla våra resor. <br/>Läs mer om detta hos <strong> <a href="https://viskogen.se/">Vi Skogen</a></strong>. 
        </p>
      </div>
    </div>
</div>
</template>

<script>
    import 'animate.css'
export default {
    name: "AboutUs",
}
</script>

<style>

.invert {
  -webkit-filter: brightness(0) invert(100%); 
          filter: brightness(0) invert(100%);
}


</style>