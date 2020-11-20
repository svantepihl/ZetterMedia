<template>
	<header class="inset-0 p-0 m-0 object-contain">
			<transition
			name="bounce"
			enter-active-class="slideInRight"
			leave-active-class="slideOutRight"
			>
			<div v-if="showMenu" class="fixed flex content-center justify-center h-screen w-screen sm:hidden m-0 p-0 bg-orange z-20 text-white overflow-hidden">
					<ul class="text-4xl list-style-none align-middle content-center justify-center flex flex-col text-center">
						<g-link class="text-white m-0 p-0 hover:bold" href="#">
							<li>tjänster.</li>
						</g-link>


						<g-link class="text-white m-0 p-0 hover:bold" href="#services" v-on:click="showMenu=false">
							<li>kom igång.</li>
						</g-link>

						<g-link class="text-white m-0 p-0 hover:bold" href="#">
							<li>om oss.</li>
						</g-link>

						<g-link class="text-white m-0 p-0 hover:bold" href="#services" v-on:click="showMenu=false">
							<li>blogg.</li>
						</g-link>

						<g-link class="text-white m-0 p-0 hover:bold" href="#">
							<li>kontakt.</li>
						</g-link>
					</ul>
			</div>
			</transition>



		<nav class="flex items-center justify-between flex-wrap bg-transparent p-6 fixed w-full z-30 top-0">
			<div class="flex items-center flex-shrink-0 text-white mr-6">
				<a class="text-white no-underline hover:text-white hover:no-underline" href="#">
					<g-image src="~/assets/img/logo.png" width="250px" quality="100" blur="100" immediate="true" class="z-30 hidden md:block"></g-image>
					<g-image src="~/assets/img/logo.png" width="145px" quality="100" blur="100" immediate="true" class="z-30 md:hidden "></g-image>
				</a>
			</div>

			<div class="block sm:hidden z-50" @click="toggleMenu">
				<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-white border-transparent hover:text-white hover:border-white">
					<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>

			<div class="hidden flex-grow sm:flex items-center w-auto pt-0 text-4xl lg:text-5xl -mt-2" id="nav-content">
				<ul id="menu" class="hidden list-reset sm:flex justify-end flex-1 items-center w-auto text-xs">
					<li class="spin ml-4 lg:ml-8">
						<a class="text-white m-0 p-0" href="/#tjanster" v-smooth-scroll>
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">t</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">j</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">ä</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">n</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">s</span></p>
							<p><span style="-webkit-transition-delay: 0.10s; transition-delay: 0.10s;">t</span></p>
							<p><span style="-webkit-transition-delay: 0.12s; transition-delay: 0.12s;">e</span></p>
							<p><span style="-webkit-transition-delay: 0.14s; transition-delay: 0.14s;">r.</span></p>
						</a>
					</li>

					<li class="spin ml-4 lg:ml-8">
						<a class="text-white m-0 p-0" href="/#kom-igang" v-smooth-scroll>
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">k</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">o</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">m</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">&#160;</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">i</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.10s;">g</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.12s;">å</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.14s;">n</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">g.</span></p>
						</a>
					</li>

					<li class="spin ml-4 lg:ml-8">
						<a class="text-white m-0 p-0" href="#">
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">o</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">m</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">&#160;</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">o</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">s</span></p>
							<p><span style="-webkit-transition-delay: 0.10s; transition-delay: 0.10s;">s.</span></p>
						</a>
					</li>

					<li class="spin ml-4 lg:ml-8">
						<g-link class="text-white m-0 p-0" to="/blogg">
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">b</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">l</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">o</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">g</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">g.</span></p>
						</g-link>
					</li>

					<li class="spin ml-4 lg:ml-8 mr-4">
						<a class="text-white m-0 p-0" href="#kontakt" v-smooth-scroll>
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">k</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">o</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">n</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">t</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">a</span></p>
							<p><span style="-webkit-transition-delay: 0.10s; transition-delay: 0.10s;">k</span></p>
							<p><span style="-webkit-transition-delay: 0.12s; transition-delay: 0.12s;">t.</span></p>
						</a>
					</li>
				</ul>
			</div>
		</nav>	
	</header>
</template>

<script>
	export default {
		name: "NavBar",
		data () {
			return {
			showMenu: false
			}
		},
		methods: {
			toggleMenu () {
			this.showMenu = !this.showMenu
			}
		}
	}
</script>


<style scoped>
#nav-content{
	transition: visibility 0s linear 0.33s, opacity 0.33s linear;
}

p {
	display: inline-block;
	@apply text-lg;
}

span {

	transition: all 1200ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
	display: inline-block;
	transition-delay: 0s;
}

.spin:hover p span {
  -webkit-transform: rotateX(360deg);
  transform: rotateX(360deg);
}
</style>>




