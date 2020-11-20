<template>
<div class="mt-12 mb-12 w-full flex flex-col items-center justify-center">
    <g-image src="../assets/img/animated_logo.gif" blur="none" alt="logo"></g-image>
    <g-link class=" absolute top-0 left-0 ml-10 mt-32" to="/">
        <div>
            <g-image id="back" src="../assets/img/arrow_left.png"></g-image>
        </div>
    </g-link>
</div>
</template>

<script>
export default {

}
</script>

<style>
#back { transition: all .2s ease-in-out; }
#back:hover { 
    transform: scale(1.2); 
    }

</style>