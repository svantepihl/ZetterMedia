<template>
    <form class="max-w-md mx-auto overflow-hidden p-6 space-y-10 text-2xl text-white mt-24">
    <div class="relative border-b-2 focus-within:border-blue-500">
    <input v-model="name" type="text" id="name" name="name" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="name" class="absolute top-0 -z-0 duration-300 origin-0">Namn</label>
    </div>
    <div class="relative border-b-2 focus-within:border-blue-500">
    <input v-model="email" type="text" id="email" name="email" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="email" class="absolute top-0 -z-0 duration-300 origin-0">Email</label>
    </div>


    <div class="relative">
        <button v-on:click="$store.commit('next')" v-if="currentStep > 4" class=" mx-2 bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            Skicka!
        </button>
    </div>

</form>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "ContactInfo",
    computed: 
    {
        name: {
            get () {
                return this.$store.state.name
            },
            set (value) {
                this.$store.commit('updateName', value)
            }
        },
        email: {
            get () {
                return this.$store.state.email
            },
            set (value) {
                this.$store.commit('updateEmail', value)
            }
        },
        currentStep: {
          get () {
            return this.$store.state.currentStep
          }
        } 
    }
}
</script>

<style scoped>

input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
  @apply transform; 
  @apply scale-75; 
  @apply -translate-y-8;
}

</style>> 