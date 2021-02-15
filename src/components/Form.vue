<template>
    <div id="get-started" class="size-min-max h-auto w-screen relative z-30 justify-items-center items-center text-white">
		<PageTitle title="kom igång."></PageTitle>
        <div class="mx-0 h-full w-full min-h-screen items-center flex justify-items-center">
            <transition name="fade">
				<div class="m-0 p-0 w-screen h-min-screen h-auto">
					<div class="grid-container pt-10">
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
	import PageTitle from '../components/PageTitle'
	import { mapState } from 'vuex';
	export default {
        name: "Form",
		components: {NavButtons,ServiceOffers,ProgressBar,VideoOffers, Selectors,PageTitle},
		computed: mapState(['currentStep','serviceNeeded','serviceType']),
		data () {
			return {
			showServices: true,
			scrollPos: null
			}
		},
		methods: {
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
  height: 100%;
  min-height: 100vh;
  height: auto;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr 1.5fr 0.4fr;
  gap: 5px 0px;
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

.size-min-max {
	min-height: 100vh;
	max-height: 1200px;
}

#get-started {
	@apply bg-orange;
	background-image: url('../assets/img/komigang_bakgrund.png');
	background-size: cover;
}


</style>