<script setup>
const props = defineProps({
  open: Boolean,
  postId: Number,
});
const container = ref(null);
const internalOpen = ref(false);

const { data: comments } = await useFetch("/api/comments/:postId");
console.log(comments);

async function unmountAnimation() {
  const leaveAnimation = [
    { transform: "translateX(0)" },
    { transform: "translateX(-100%)" },
  ];
  const leaveTiming = {
    duration: 200,
    easing: "ease-in",
  };

  return await container.value.animate(leaveAnimation, leaveTiming).finished;
}

const mounted = computed(() => (internalOpen.value ? "block" : "hidden"));

watch(
  () => props.open,
  async (newValue, _oldValue) => {
    if (newValue) {
      internalOpen.value = true;
    } else {
      await unmountAnimation();
      internalOpen.value = false;
    }
  },
);
</script>

<template>
  <div
    ref="container"
    class="mount-slide absolute left-0 top-0 z-50 h-full w-full bg-white px-4 py-2"
    :class="mounted"
  >
    <div class="flex items-end justify-between">
      <h2 class="text-3xl font-bold text-neutral-800">Comments</h2>
      <button @click="$emit('closeComment')">
        <Icon name="lucide:chevron-left" size="32" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.mount-slide {
  animation: slide-right 200ms ease-in;
}

@keyframes slide-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
