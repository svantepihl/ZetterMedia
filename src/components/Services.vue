<template>
<div id="services" class="h-screen w-screen min-h-screen relative bg-gray-100 z-30">
      <div v-bind:class="{ on: showServices }" class=" w-4/5 max-w-screen-md bg-red-600">

          
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

#services {
    min-height: 830px;
    position: relative;
    z-index: 30;
}

#services .block {
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

#services .block .txt1 {
    font-size: 15px;
    line-height: 30px;
    font-weight: 400;
    margin-bottom: 18px;
    letter-spacing: 0.14em;
    color: #999;
}

#services .block .txt2 {
    font-size: 46px;
    line-height: 52px;
    font-weight: 300;
    color: #222;
    margin: 0 0 16px -3px;
}

#services .block .txt2.btm {
    margin-bottom: 45px;
}

.btn_detail_line {
    display: inline-block;
    border-bottom-width: 1px;
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
    -webkit-transition: all 1400ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: all 1400ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
}

.tra20 {
    -webkit-transition: all 2500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    transition: all 2500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
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

body {
   scroll-behavior: smooth !important; 
}
</style>