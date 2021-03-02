<template>
  <Layout>
    <Navbar></Navbar>
		<Video></Video>
		<Services></Services>
		<Form></Form>
		<AboutUs></AboutUs>
		<Vision></Vision>
  </Layout>
</template>

<script>
	import Navbar from '../components/Navbar.vue';
	import Video from '../components/Video.vue';
	import Form from '../components/Form.vue'
	import AboutUs from '../components/AboutUs.vue';
	import Services from '../components/Services.vue'
	import Vision from '../components/Vision.vue'

export default {
  components: {Navbar,Video,Form,AboutUs,Services,Vision},
  metaInfo: {
    title: 'Välkommna'
  }
}
</script>

<style scoped>

</style>
