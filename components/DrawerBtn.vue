<script setup>
defineProps(["title"]);
</script>
<template>
  <div
    class="flex content-center items-center justify-center gap-4 text-center"
  >
    <slot />
    <div class="align-middle font-bold">{{ title }}</div>
  </div>
</template>
