<template>

 <form class="max-w-md mx-auto overflow-hidden p-6 space-y-10 text-3xl mt-48">
  <div class="relative border-b-2 focus-within:border-blue-500">
    <input type="text" name="namn" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="namn" class="absolute top-0 -z-1 duration-300 origin-0">Namn</label>
  </div>
  <div class="relative border-b-2 focus-within:border-blue-500">
    <input type="text" name="email" placeholder=" " class="block w-full appearance-none focus:outline-none bg-transparent" />
    <label for="email" class="absolute top-0 -z-1 duration-300 origin-0">Email</label>
  </div>
</form>
</template>

<script>
export default {
    name: "ContactInfo"
}
</script>

<style scoped>

input:focus-within ~ label,
input:not(:placeholder-shown) ~ label {
  @apply transform scale-75 -translate-y-8;
}

input:focus-within ~ label {
  @apply text-gray-600;
}

</style>> 