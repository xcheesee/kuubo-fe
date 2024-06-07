<script setup>
defineProps(["title"]);
</script>
<template>
  <div
    class="flex place-content-center place-items-center gap-2 rounded-xl bg-slate-200 px-3 py-[2px] text-center"
  >
    <p
      class="flex h-full w-full place-content-center place-items-center text-center align-text-top"
    >
      {{ title }}
    </p>
    <slot />
  </div>
</template>
