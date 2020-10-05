<template>
    <div id="services" class="h-screen w-screen relative bg-gray-100 z-30">
        <div class="container"></div>
        <div class="container mx-auto h-full items-center flex justify-items-center">
            <div v-bind:class="{ animate__fadeInUp : showServices, 'opacity-100' : showServices }" class="opacity-0 animate__animated animate__slow mx-auto w-11/12 h-64">
                <Offers></Offers>
                
                <NavButtons></NavButtons>
            </div>
        </div>
    </div>
</template>

<script>
    import 'animate.css'
    import NavButtons from '../components/Form/NavButtons'
    import Offers from '../components/Form/Offers'

	export default {
        name: "Services",
        components: {NavButtons,Offers},
		data () {
			return {
			showServices: false,
			scrollPos: null
			}
		},
		methods: {
			updateScroll() {
				this.scrollPos = window.scrollY
				if (this.scrollPos>850) {
					this.showServices = true
				}  
    		}
		},
		mounted() {
			window.addEventListener('scroll', this.updateScroll);
		},
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }, 
	}
</script>

<style scoped>

body {
   scroll-behavior: smooth !important; 
}
</style>