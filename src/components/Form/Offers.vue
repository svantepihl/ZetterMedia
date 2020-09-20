<template>
    <div class="container">
        <h1 class=" text-6xl text-center">
            VAD BEHÖVER NI HJÄLP MED?
        </h1>
        <div class="flex m-auto justify-items-center place-content-evenly items-center h-full w-full">
            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    <font-awesome :icon="['fas', 'volume-up']" size="5x"/> <br>
                    Ljudproduktion
                </button>
            </div>

            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    <font-awesome :icon="['fas', 'video']" size="5x"/> <br>
                    Videoproduktion
                </button>
            </div>

            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    <font-awesome :icon="['fas', 'hashtag']" size="5x"/> <br>
                    Social Media Content
                </button>
            </div>

            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    <font-awesome :icon="['fas', 'sitemap']" size="5x" /> <br>
                    Webb + SEO
                </button>
            </div>

            <div class="w-1/6 h-full flex justify-items-center items-center">
                <button class="mx-auto bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded w-48 h-48">
                    <font-awesome :icon="['fas', 'rss']" size="5x" /> <br>
                    Streaming
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Offers",

}
</script>

<style>

</style>