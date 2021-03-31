<template>
	<div class="min-h-screen w-screen relative bg-bggrey flex items-center justify-center z-50 border-b-8 border-eggwhite">
		<PageNumber number="02."/>
		<div class="container mx-auto my-40" v-scroll-reveal="{ delay: 100, distance:'15rem'}">
			<div class="grid w-5/6 grid-cols-1 md:grid-cols-2 gap-20 mx-auto">
				<div class="flex justify-center items-center flex-col tracking-widest">
					<div class="container h-full max-w-2xl flex justify-start flex-col">
						<h3 class=" text-left">
							1. test
						</h3>
						<h3 class="text-right">
							2. test
						</h3>
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
import PageNumber from '../PageNumber'
export default {
    components: {PageNumber}
}
</script>

<style>

</style>