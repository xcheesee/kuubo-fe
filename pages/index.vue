<script setup>
const open = ref(false);
</script>

<template>
  <div class="relative min-h-screen bg-neutral-200">
    <Header />
    <Feed />
    <FABBtn @click="open = true" />
    <NewPost :open="open" @close-post="open = false" />
  </div>
</template>
