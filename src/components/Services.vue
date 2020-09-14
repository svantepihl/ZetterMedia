<template>
<div id="service_list" class=" h-screen">
      <div v-bind:class="{ on: showServices }" class="block js-sc">
        <h3 class="txt1 js-sc_h tra20">OUR SERVICES</h3>
        <h2 class="txt2 js-sc_h tra20 delay01">Brand design</h2>
        <h2 class="txt2 js-sc_h tra20 delay02">Media Strategy</h2>
        <h2 class="txt2 js-sc_h tra20 delay03">Digital Design + Tech</h2>
        <h2 class="txt2 btm js-sc_h tra20 delay04">Content Production</h2>
        <div class="btn_detail_line js-sc_h tra20 delay09 js-text_btn rx360 text-xs">
          <a href="" class=" tra12 done">
			<p><span class="tra12" style="-webkit-transition-delay: 0s; transition-delay: 0s;">L</span></p>
			<p><span class="tra12" style="-webkit-transition-delay: 0.02s; transition-delay: 0.02s;">E</span></p>
			<p><span class="tra12" style="-webkit-transition-delay: 0.04s; transition-delay: 0.04s;">A</span></p>
			<p><span class="tra12" style="-webkit-transition-delay: 0.06s; transition-delay: 0.06s;">R</span></p>
			<p><span class="tra12" style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">N</span></p> 
			<p><span class="tra12" style="-webkit-transition-delay: 0.08s; transition-delay: 0.08s;">&#160;</span></p> 
			<p><span class="tra12" style="-webkit-transition-delay: 0.12s; transition-delay: 0.12s;">M</span></p>
			<p><span class="tra12" style="-webkit-transition-delay: 0.14s; transition-delay: 0.14s;">O</span></p>
			<p><span class="tra12" style="-webkit-transition-delay: 0.16s; transition-delay: 0.16s;">R</span></p>
			<p><span class="tra12" style="-webkit-transition-delay: 0.18s; transition-delay: 0.18s;">E</span></p>
		  </a>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "Services",
		data () {
			return {
			showServices: false,
			scrollPos: null
			}
		},
		methods: {
			updateScroll() {
				this.scrollPos = window.scrollY
				if (this.scrollPos>500) {
					this.showServices = true
				}  
    		}
		},
		mounted() {
			window.addEventListener('scroll', this.updateScroll);
		}  
	}
</script>

<style scoped>

#service_list {
	height: 100vh;
    width: 100%;
    min-height: 830px;
    position: relative;
    z-index: 30;
    background-color: #fff;
    background-image: url(../assets/img/service_list_circle.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 500px 500px;
    background-attachment: fixed;
}

#service_list .block {
    width: 88%;
    max-width: 840px;
    /* height: 578px; */
    height: 386px;
    position: absolute;
    top: -10px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}

#service_list .block .txt1 {
    font-size: 15px;
    line-height: 30px;
    font-weight: 400;
    margin-bottom: 18px;
    letter-spacing: 0.14em;
    color: #999;
}

#service_list .block .txt2 {
    font-size: 46px;
    line-height: 52px;
    font-weight: 300;
    color: #222;
    margin: 0 0 16px -3px;
}

#service_list .block .txt2.btm {
    margin-bottom: 45px;
}

.btn_detail_line {
    display: inline-block;
}

.js-sc, .js-sc_h {
    -webkit-transform: translate3d(0,100px,0) scale(0.95);
    transform: translate3d(0,100px,0) scale(0.95);
    opacity: 0!important;
}

.js-sc.on, .js-sc.on .js-sc_h, #popup.on .js-sc_h, #block_menu.on .js-sc_h, .js-contact_hide_h.on .js-sc_h {
    -webkit-transform: translate3d(0,0,0) scale(1);
    transform: translate3d(0,0,0) scale(1);
    opacity: 1!important;
}

.js-text_btn p,
.js-text_btn p span {
  display: inline-block;
}

.js-text_btn.rx360:hover p span {
  -webkit-transform: rotateX(360deg);
  transform: rotateX(360deg);
}

.tra12 {
    -webkit-transition: all 1200ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: all 1200ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
}

.tra20 {
    -webkit-transition: all 2000ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: all 2000ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
}

.delay01 {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
}

.delay02 {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
}

.delay03 {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}

.delay04 {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
}

.delay09 {
    -webkit-transition-delay: 0.9s;
    transition-delay: 0.9s;
}

</style>