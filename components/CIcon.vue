<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "1rem",
  },
  color: {
    type: String,
    default: "black",
  },
});
</script>
<template>
  <ClientOnly>
    <Icon :name="name" :size="size" :class="$attrs.class" :color="color" />
  </ClientOnly>
</template>
