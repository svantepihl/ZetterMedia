<template>
<div class=" w-screen h-auto min-h-screen bg-black flex flex-col items-center justify-center">
<Navbar class="absolute"></Navbar>

    <div id="posts" class=" min-h-screen w-full flex flex-col justify-center items-center">
    <PostCard v-for="edge in $page.posts.edges" :Post="edge.node" :key="edge.node.id"></PostCard>
    </div>
    <Footer></Footer>
</div>

</template>

<page-query>
query {
  posts: allPost {
      edges {
        node {
          id
          title
          path
          tags
          content
          date (format: "D. MMMM YYYY")
          timeToRead
          description
          cover_image (width: 770, height: 380, blur: 10, quality:100)
          ...on Post {
              id
              title
              path
        }
      }
    }
  }
}
</page-query>

<script>
import Navbar from '../components/Navbar.vue';
import PostCard from '../components/PostCard.vue'
import Footer from '../components/Footer.vue'
export default {
    name:"Blogg",
    components: {Navbar,PostCard,Footer}
}
</script>

<style>

</style>