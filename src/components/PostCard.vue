<template>
    <div class=" w-2/3 h-64 bg-yellow border-red-500 border-2">
        <h2 class="text-4xl" v-html="Post.title"> </h2>
        <div>
            <p v-html="Post.content">

            </p>
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

</style>