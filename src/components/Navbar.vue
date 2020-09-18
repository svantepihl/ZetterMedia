<template>
	<header class="inset-0 p-0 m-0 object-contain">
		<nav class="flex items-center justify-between flex-wrap bg-transparent p-6 fixed w-full z-10 top-0">
			<div class="flex items-center flex-shrink-0 text-white mr-6">
				<a class="text-white no-underline hover:text-white hover:no-underline" href="#">
					<g-image src="~/assets/img/logo.png" width="150px" quality="100" blur="0" immediate="true"></g-image>
				</a>
			</div>

			<div class="block lg:hidden" @click="toggleMenu">
				<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-white border-transparent hover:text-white hover:border-white">
					<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>

			<div v-bind:class="{ hidden: !showMenu }" class="w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0" id="nav-content">
				<ul id="menu" class="list-reset lg:flex justify-end flex-1 items-center lg:w-auto">
					<li class="spin">
						<a class="text-white m-0 p-0" href="#">
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">J</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">O</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">B</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">B</span></p>
						</a>
					</li>
					<li class="spin">
						<a class="text-white m-0 p-0" href="#services" v-smooth-scroll>
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">T</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">J</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">Ä</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">N</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">S</span></p>
							<p><span style="-webkit-transition-delay: 0.10s; transition-delay: 0.10s;">T</span></p>
							<p><span style="-webkit-transition-delay: 0.12s; transition-delay: 0.12s;">E</span></p>
							<p><span style="-webkit-transition-delay: 0.14s; transition-delay: 0.14s;">R</span></p>
						</a>
					</li>
					<li class="spin">
						<a class="text-white m-0 p-0" href="#">
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">O</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">M</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">&#160;</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">O</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">S</span></p>
							<p><span style="-webkit-transition-delay: 0.10s; transition-delay: 0.10s;">S</span></p>
						</a>
					</li>
					<li class="spin mr-3">
						<a class="text-white m-0 p-0" href="#">
							<p><span style="-webkit-transition-delay: 0.00s; transition-delay: 0s;">K</span></p>
							<p><span style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">O</span></p>
							<p><span style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">N</span></p>
							<p><span style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">T</span></p>
							<p><span style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">A</span></p>
							<p><span style="-webkit-transition-delay: 0.10s; transition-delay: 0.10s;">K</span></p>
							<p><span style="-webkit-transition-delay: 0.12s; transition-delay: 0.12s;">T</span></p>
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

li {
	margin-left: 35px;
	font-size: 0.75rem;
}

p {
	display: inline-block;
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




