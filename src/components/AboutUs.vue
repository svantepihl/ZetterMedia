<template>
<div id="about" class="min-h-screen w-screen relative bg-bggrey flex items-center justify-center z-50">
  <PageTitle class="text-white" title="om oss."></PageTitle>
  <div class="container px-6 mx-auto pb-20 mt-32" v-scroll-reveal="{ delay: 250, distance: '50px',afterReveal: startTyping}">
    <div class="col-span-1 md:col-span-3 border-1 border-white h-full mx-8">
      <div class=" flex items-center justify-center text-center h-44 lg:h-44 text-3xl md:text-6xl font-mono text-white">
        <ClientOnly>
          <vue-typer initial-action='typing' :pre-type-delay='200' :text='["Hej! Kul att du är här!","Det är vi som är","Zetter Media"]'></vue-typer>
        </ClientOnly>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 h-full w-full mt-12 text-white">
        <div class="col-span-1 border-1 border-white h-full text-center flex items-center justify-items-center flex-col">
          <g-image src="../assets/img/staff/green.jpg" width="400px" height="300px" class="p-2"/>
          <h1 class="text-3xl font-mono">Henry</h1>
          <h3 class="text-md font-mono">Human-Dog Relations</h3>
          <a href="mailto:david@zettermedia.se?subject=Woof!"> 
            <h3 class="text-sm font-mono"><g-image src="../assets/icons/email-icon.png" width="28px" class="inline p-0 -mr-2"/> henry@zettermedia.se</h3>
          </a>
        </div>
        <div class="col-span-1 border-1 border-white h-full text-center flex items-center justify-items-center flex-col">
          <g-image src="../assets/img/staff/green.jpg" width="400px" height="300px" class=" p-2"/>
          <h1 class="text-3xl font-mono">David</h1>
          <h3 class="text-md font-mono">Producent & Kreatör</h3>
          <a href="mailto:david@zettermedia.se?subject=Hej!"> 
            <h3 class="text-sm font-mono"><g-image src="../assets/icons/email-icon.png" width="28px" class="inline p-0 -mr-2"/> david@zettermedia.se</h3>
          </a>
        </div>
        <div class="col-span-1 border-1 border-white h-full text-center flex items-center justify-items-center flex-col">
          <g-image src="../assets/img/staff/green.jpg" width="400px" height="300px" class=" p-2"/>
          <h1 class="text-3xl font-mono">Karl</h1>
          <h3 class="text-md font-mono">Projektledare & Producent</h3>
          <a href="mailto:karl@zettermedia.se?subject=Hej!"> 
            <h3 class="text-sm font-mono"><g-image src="../assets/icons/email-icon.png" width="28px" class="inline p-0 -mr-2"/> karl@zettermedia.se</h3>
          </a>
        </div>
    </div>
  </div>
</div>
</template>

<script>
  import PageTitle from '../components/PageTitle'
  export default {
    name: "AboutUs",
    components: {
      PageTitle,
      VueTyper: () =>
      import('vue-typer')
      .then(m=>m.VueTyper)
      .catch()
    },
    data: function () {
      return {
        typing: false
      }
    },
    methods: {
    startTyping: function (event) {
      this.typing = true
      }
    }
  }
</script>

<style>
.vue-typer {
  font-family: monospace;
}

.vue-typer .custom.char {
  color: white;
}
.vue-typer .custom.char.selected {
  background-color: #F6833C;
}

.vue-typer .custom.caret {
  width: 4px;
  background-color: #F6833C;
}

</style>