<script setup>
const props = defineProps({
  id: Number,
  userId: Number,
  user: String,
  date: String,
  post: String,
  likes: Number,
  liked: {
    default: false,
    type: Boolean,
  },
  commentCount: Number,
});
const thumbColor = computed(() => (props.liked ? "#7d7cf9" : "#444"));

async function handleLike() {
  const postData = {
    postId: props.id,
    userId: "1",
  };

  const options = {
    method: props.liked ? "DELETE" : "POST",
    body: postData,
  };

  return await $fetch("/api/likes", options);
}
</script>

<template>
  <div
    class="my-2 grid grid-rows-[min-content_min-content_1fr_min-content] bg-white"
  >
    <div class="grid grid-cols-[min-content_1fr] p-4">
      <div class="h-16 w-16 overflow-hidden rounded-full">
        <img src="/neimapfp.jpg" alt="" class="h-full w-full object-cover" />
      </div>

      <div class="px-4">
        <div class="text-lg font-bold">{{ user }}</div>
        <div class="text-sm text-slate-600">{{ date }}</div>
      </div>
    </div>

    <div>
      <p class="col-span-full px-8 py-2 text-2xl">{{ post }}</p>
    </div>

    <div class="item-end mt-2 flex justify-end gap-4 border-t p-2">
      <div class="flex gap-2">
        <span>{{ likes }}</span>
        <button
          @click="
            async () => {
              await handleLike();
              $emit('stale');
            }
          "
        >
          <CIcon name="heroicons-solid:thumb-up" :color="thumbColor" />
        </button>
      </div>

      <div class="flex items-end gap-2">
        <span>{{ commentCount }}</span>
        <button @click="$emit('openComment', id)">
          <CIcon name="heroicons-solid:chat-alt" color="#444" />
        </button>
      </div>

      <div class="flex items-center">
        <button>
          <CIcon name="lucide:more-horizontal" color="#444" />
        </button>
      </div>
    </div>
  </div>
</template>
