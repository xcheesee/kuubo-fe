<script setup>
const props = defineProps({
  open: Boolean,
});

const internalOpen = ref(false);
const container = ref(null);

async function unmountAnimation() {
  const leaveAnimation = [
    { transform: "translateY(0%)" },
    { transform: "translateY(100%)" },
  ];
  const leaveTiming = {
    duration: 200,
    easing: "ease-in",
  };
  return await container.value.animate(leaveAnimation, leaveTiming).finished;
}

async function sendPost(e) {
  const formData = new FormData(e.target);
  formData.append("UserId", 1);
  try {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw res;
  } catch (e) {
    throw e;
  }
}

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
    class="mount-slide absolute left-0 top-0 z-50 grid h-full w-full grid-rows-[min-content_min-content_1fr_min-content] bg-white py-2 lg:h-96 lg:w-[80%]"
    :class="internalOpen ? 'block' : 'hidden'"
  >
    <div class="flex gap-2 border-b py-1">
      <button @click="$emit('closePost')">
        <CIcon name="lucide:chevron-left" size="2rem" />
      </button>
      <div class="font-bold">Criar Post</div>
    </div>
    <div class="grid grid-cols-[min-content_1fr] p-4">
      <div class="h-16 w-16 overflow-hidden rounded-full">
        <img src="/neimapfp.jpg" alt="" class="h-full w-full object-cover" />
      </div>
      <div class="px-4">
        <div class="text-lg font-bold">Eu</div>
      </div>
    </div>
    <form
      v-on:submit.prevent="
        async (e) => {
          await sendPost(e);
        }
      "
    >
      <textarea
        type="text"
        class="h-96 w-full px-2 text-[2rem]"
        placeholder="Da teu papo"
        name="Content"
      />
      <button
        class="mx-4 flex justify-center gap-2 self-end rounded-full bg-gradient-to-br from-[#c621e5] to-[#7d7cf9] px-4 py-2"
        type="submit"
      >
        <CIcon name="lucide:send" size="2rem" color="white" />
        <div class="text-xl font-bold text-white">Enviar</div>
      </button>
    </form>
  </div>
</template>

<style scoped>
textarea::placeholder {
  font-size: 2rem;
}

textarea {
  outline: none;
}

.mount-slide {
  animation: slide-up 200ms ease-in;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
