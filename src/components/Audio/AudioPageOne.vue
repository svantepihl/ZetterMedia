<template>
	<div class="min-h-screen w-screen relative bg-bggrey flex items-center justify-center z-50 border-b-8 border-eggwhite">
		<PageTitle class="text-white" title="vår vision."></PageTitle>
		<div class="container mx-auto my-40" v-scroll-reveal="{ delay: 100, distance:'15rem'}">
			<div class="grid w-5/6 grid-cols-1 md:grid-cols-2 gap-20 mx-auto">
				<div class="flex justify-center items-center flex-col tracking-widest">
					<div class="container h-full max-w-2xl flex justify-start items-end flex-col text-right">
						<h1 class="text-white text-2xl md:text-6xl leading-none font-bold mr-4">
							Vi kan
						</h1>
						<h1 class="text-white text-2xl md:text-6xl leading-none font-bold">
							Ljuddesign.
						</h1>
						<p class=" text-eggwhite text-base xl:text-2xl mt-10 mr-4">
							Ljud är känslor och en känsla avgör allt. Oavsett om du lyssnar på en podcast, en film eller en radioreklam så kommer ljudet att påverka din upplevelse mest av allt.
						</p>
						<p class=" text-eggwhite text-base xl:text-2xl mt-4 mr-4">
							Vi har flera års erfarenhet av ljud & musikproduktion och hjälper dig nå ett perfekt resultat varje gång.
						</p>

						<h2 class="mt-16 xl:text-5xl font-bold text-yellow mr-4">
							68%
						</h2>
						<p class="text-yellow mr-4">
							68% av internetanvändarna lyssnar på poddar (Internetstiftelsen)
						</p>
					</div>
				</div>
				<div class="hidden md:flex object-contain items-center justify-center">
					<g-image class="w-full h-full max-h-full object-contain" src="../../assets/img/audio.jpg"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PageTitle from '../PageTitle'
export default {
	components: {PageTitle}
}
</script>

<style>


</style>