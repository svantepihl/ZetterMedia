<template>
    <Layout> 
      <g-link to="/#services" class="font-mono group no-underline hover:underline class= z-50 absolute border-white text-white right-0 top-0 mt-8 lg:mt-12 mr-3 lg:mr-6 text-3xl xs:text-3xl lg:text-4xl whitespace-nowrap">
        tillbaka
      </g-link>     
      <AudioPageOne/>
      <AudioPageTwo/>
    </Layout>
</template>

<script>
import AudioPageOne from '../components/Audio/AudioPageOne';
import AudioPageTwo from '../components/Audio/AudioPageTwo';
export default {
  components: {AudioPageOne,AudioPageTwo},
  metaInfo: {
    title: 'Ljud!'
  }
}
</script>

<style>

</style>