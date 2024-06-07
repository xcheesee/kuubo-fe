<script setup>
import { ref, computed } from "vue";
const count = ref(0);

const titulos = computed(() => {
  return count.value == 12 ? "Acertou" : "Nao";
});
</script>
<template>
  <button @click="count++">
    Quantos titulos do Brasileirao o palmeiras tem: {{ count }}
  </button>
  <div>{{ titulos }}</div>
</template>
<style>
button {
  background-color: #f0f;
  border-radius: 10px;
}
</style>
