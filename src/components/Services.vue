<template>
<div class="relative min-w-screen w-screen min-h-screen h-auto bg-black z-30">
  <div class="grid grid-cols-3 gap-y-5 gap-x-6 h-auto min-h-screen py-20 mx-20">
    <div class="service bg-gray-600">1</div>
    <div class="service bg-gray-500">2</div>
    <div class="service bg-gray-600">3</div>
    <div class="service bg-gray-500">4</div>
    <div class="service bg-gray-600">5</div>
    <div class="service bg-gray-500">6</div>
    <div class="service bg-gray-600">7</div>
    <div class="service bg-gray-500">8</div>
    <div class="service bg-gray-600">9</div>
  </div>
</div>

</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>
.service{
  @apply h-auto;
  @apply text-center;
  @apply flex;
  @apply align-middle;
  @apply justify-center;
}

</style>