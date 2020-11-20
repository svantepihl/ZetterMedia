<template>
    <div class="card w-3/5 bg-gray-200 border-2 flex flex-col items-center justify-start mt-10 grow">
        <g-link class="w-full h-full" :to="Post.path">
            <div class="container w-4/6 m-12">
                <h2 class="text-4xl mt-4" v-html="Post.title"> </h2>
                <div>
                    <p v-html="Post.description"> </p>
                </div>
            </div>
            <p class="italic text-xs m-12 relative bottom-0" v-html="Post.date"></p>
        </g-link>
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
    min-height: 16rem;
    height: auto;
    overflow: hidden;
    max-width: 800px;
}

#cover-img {
    width: 100%;
    height: 14rem;
}

.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.05); }

</style>