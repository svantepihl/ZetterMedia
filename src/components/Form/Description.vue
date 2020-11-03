<template>
    <div class="flex justify-items-center place-content-start items-center sm:mt-5 h-full w-full text-xs sm:text-lg flex-col lg:mt-4">

            <textarea v-model="desc" name="description" id="description" class="w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 lg:h-64 h-40 mt-10 xs:h-48 xs:mt-8 block text-base lg:text-2xl xl:text-3xl" maxlength="500" v-on:keyup="countdown"></textarea>
            <p class="text-xs lg:text-base text-right">{{ remainingCount }}/{{ maxCount }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Description",
    computed: {
        desc: {
            get () {
                return this.$store.state.desc
            },
            set (value) {
                this.$store.commit('updateDesc', value)
                this.message = value
            }
        }
    },
    data (){ return {
        maxCount: 500,
        remainingCount: 500,
        message: ""
    }
  },
  methods: {
    countdown() {
        this.remainingCount = this.maxCount - this.message.length;
    }
  }
}
</script>

<style>

#description {
    @apply rounded-lg;
    @apply border-white;
    @apply border-8;
    transition: all 0.5s ease-in-out;
}

#description:focus {
    border-width: 12px;
}

</style>