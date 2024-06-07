<script setup>
const props = defineProps({
  open: Boolean,
  postId: Number,
});
const container = ref(null);
const internalOpen = ref(false);

const comments = ref([]);
const loading = ref(false);

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

async function sendComment(event) {
  const formData = new FormData(event.target);
  formData.append("userId", 1);
  formData.append("postId", props.postId);
  const res = fetch("/api/comments/" + props.postId, {
    method: "POST",
    body: formData,
  });
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
watch(
  () => props.postId,
  async (newValue, _oldValue) => {
    if (!newValue) return;
    loading.value = true;
    comments.value = await $fetch("/api/comments/" + props.postId);
    loading.value = false;
  },
);
</script>

<template v-if="internalOpen">
  <div
    ref="container"
    class="mount-slide absolute left-0 top-0 z-50 flex h-full w-full flex-col gap-4 bg-neutral-100 px-4 py-2"
    :class="mounted"
  >
    <div class="flex items-end justify-between">
      <h2 class="text-3xl font-bold text-neutral-800">Comments</h2>
      <button @click="$emit('closeComment')">
        <Icon name="lucide:chevron-left" size="32" />
      </button>
    </div>
    <div v-if="loading">Carregando...</div>
    <template v-else>
      <div
        v-for="comment in comments"
        class="grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] gap-x-4 rounded bg-white px-4 py-2 shadow"
      >
        <div class="row-span-2 h-16 w-16 overflow-hidden rounded-full">
          <img src="/neimapfp.jpg" alt="" class="h-full w-full object-cover" />
        </div>
        <div class="text-lg font-bold">{{ comment.user.userName }}</div>
        <div class="self-center pl-4">{{ comment.comment }}</div>
      </div>
    </template>
    <div
      class="fixed bottom-0 left-0 grid w-full gap-2 bg-white px-4 py-2 shadow-lg"
    >
      <div class="font-bold">Comentar</div>
      <form class="grid" autocomplete="off" @submit.prevent="sendComment">
        <input
          type="text"
          name="Comment"
          class="px-4 py-2 focus:outline-none"
          placeholder="morra"
        />
        <button
          class="justify-self-end rounded-full bg-green-600 px-4 py-2 font-bold text-white"
          type="submit"
        >
          Enviar
        </button>
      </form>
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
