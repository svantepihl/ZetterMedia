<template>
    <div id="services" class="h-screen w-screen relative bg-gray-100 z-30 justify-items-center items-center">
        <div class="mx-0 h-full w-full items-center flex justify-items-center ">
            <div v-bind:class="{animate__fadeIn : showServices, 'opacity-100' : showServices }" class="opacity-0 animate__animated animate__slow mx-auto w-full h-full flex flex-col">
                <div class="w-full h-64">
					<transition name="fade">
						<Offers v-if="currentStep === 0"></Offers>
					</transition>
				</div>
                <NavButtons></NavButtons>
				<ProgressBar></ProgressBar>
            </div>
        </div>
    </div>
</template>

<script>
    import 'animate.css'
    import NavButtons from '../components/Form/NavButtons'
	import Offers from '../components/Form/Offers'
	import ProgressBar from '../components/Form/ProgressBar'
	import { mapState } from 'vuex';
	export default {
        name: "Services",
		components: {NavButtons,Offers,ProgressBar},
		computed: mapState(['currentStep']),
		data () {
			return {
			showServices: false,
			scrollPos: null
			}
		},
		methods: {
			updateScroll() {
				this.scrollPos = window.scrollY
				if (this.scrollPos>650) {
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

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;	
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>