<template>
<div class=" w-screen h-auto min-h-screen bg-black flex flex-col items-center justify-center">
    <div class="mt-12 mb-12 w-full flex flex-col items-center justify-center">
    <g-image src="../assets/img/animated_logo.gif" blur="none" alt="logo"></g-image>
    <g-link class=" absolute top-0 left-0 ml-10 mt-32" to="/blogg">
        <div>
            <g-image id="back" src="../assets/img/arrow_left.png"></g-image>
        </div>
    </g-link>
</div>
        <div id="post" class=" w-3/5 h-screen my-20">
            <g-image class=" rounded-sm w-full" alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
            <div class="mx-20 mt-6 mb-10">
                <h1 class=" text-white text-6xl text-center"> {{ $page.post.title }} </h1>
                <p class=" text-white text-center italic" v-html="$page.post.date"></p>
                <p class=" text-white mt-8" v-html="$page.post.content"> </p>
            </div>
        </div>
    <Footer></Footer>
</div>

</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<script>
import BloggHeader from '../components/BloggHeader.vue';
import PostCard from '../components/PostCard.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {BloggHeader,PostCard,Footer},
    metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<style>

#post{
    background-color: #2A2B2E;
    @apply rounded-md
}

</style>