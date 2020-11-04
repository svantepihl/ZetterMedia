<template>
    <div class="card w-1/2 bg-yellow border-red-500 border-2 flex flex-col items-center justify-start mt-10">
        <g-image id="cover-img" width="300" height="100" alt="Cover image" contain v-if="Post.cover_image" :src="Post.cover_image"/>
        <div class="container w-4/6 m-2">
            <h2 class="text-4xl" v-html="Post.title"> </h2>
            <div>
                <p v-html="Post.content"> </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostCard",
    props: ['Post']
}
</script>

<style>
.card{
    height: 26rem;
    overflow: hidden;
    max-width: 800px;
}

#cover-img {
    width: 100%;
    height: 14rem;
}

</style>