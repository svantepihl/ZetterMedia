<template>
    <form class="max-w-md mx-auto overflow-hidden p-6 space-y-10 text-2xl text-white mt-10 xs:mt-20 md:mt-32 lg:mt-48">
    <div class="relative border-b-2 focus-within:border-blue-500">
    <input v-model="name" type="text" id="name" name="name" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="name" class="absolute top-0 -z-0 duration-300 origin-0">Namn</label>
    </div>
    <div class="relative border-b-2 focus-within:border-blue-500">
    <input v-model="email" type="email" id="email" name="email" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="email" class="absolute top-0 -z-0 duration-300 origin-0">E-mail</label>
    </div>
    <div class="relative border-b-2 focus-within:border-blue-500">
    <input v-model="tel" type="tel" id="tel" name="tel" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="tel" class="absolute top-0 -z-0 duration-300 origin-0">Telefon</label>
    </div>

</form>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "ContactInfo",
    data (){ return {
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
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
        tel: {
            get () {
                return this.$store.state.tel
            },
            set (value) {
                this.$store.commit('updatePhone', value)
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