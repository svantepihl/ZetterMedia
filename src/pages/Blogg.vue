<template>
<div class=" w-screen h-auto min-h-screen bg-black flex flex-col items-center justify-center">
    <BloggHeader></BloggHeader>

    <div id="posts" class="relative min-h-screen h-auto w-full flex flex-col justify-center items-center mt-0">
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
import BloggHeader from '../components/BloggHeader.vue';
import PostCard from '../components/PostCard.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {BloggHeader,PostCard,Footer},
    metaInfo: {
      title: 'Välkommna'
  }
}
</script>

<style>

</style>