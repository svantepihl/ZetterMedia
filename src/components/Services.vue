<template>
    <div id="services" class="h-auto min-h-screen w-screen relative bg-gray-100 z-30 justify-items-center items-center">
        <div class="mx-0 h-full w-full items-center flex justify-items-center">
            <transition name="fade">
				<div v-if="showServices" class="m-0 p-0 w-screen h-screen">
					<div class="grid-container">
						<div class="ContentArea">
							<Selectors></Selectors>
						</div>
							
						<div class="NavigationArea">
							<NavButtons></NavButtons>
						</div>
							
						<div class="ProgressBar">
							<ProgressBar></ProgressBar>
						</div>
					</div>
				</div>
			</transition> 
		</div>
    </div>
</template>

<script>
    import 'animate.css'
    import NavButtons from '../components/Form/NavButtons'
	import ServiceOffers from '../components/Form/ServiceOffers'
	import ProgressBar from '../components/Form/ProgressBar'
	import VideoOffers from '../components/Form/VideoOffers';
	import Selectors from '../components/Form/Selectors'
	import { mapState } from 'vuex';
	export default {
        name: "Services",
		components: {NavButtons,ServiceOffers,ProgressBar,VideoOffers, Selectors},
		computed: mapState(['currentStep','serviceNeeded','serviceType']),
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

.grid-container {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 10fr 3fr 50px;
  gap: 10px 0px;
  grid-template-areas:
    "."
    "ContentArea"
    "NavigationArea"
    "ProgressBar";
}

.ContentArea { 
	grid-area: ContentArea; 
}

.NavigationArea { grid-area: NavigationArea; }

.ProgressBar { grid-area: ProgressBar; }


</style>