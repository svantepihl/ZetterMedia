<template>
<div class=" w-screen h-auto min-h-screen bg-black flex items-center justify-center">
<Navbar class="absolute"></Navbar>

    <div id="posts" class=" w-full bg-orange flex flex-col justify-center items-center">
    <PostCard v-for="edge in $page.posts.edges" :Post="edge.node" :key="edge.node.id"></PostCard>
    </div>
</div>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
				title
        excerpt
        date
        content
      }
    }
  }
}
</page-query>

<script>
import Navbar from '../components/Navbar.vue';
import PostCard from '../components/PostCard.vue'
export default {
    name:"Blogg",
    components: {Navbar,PostCard}
}
</script>

<style>

</style>