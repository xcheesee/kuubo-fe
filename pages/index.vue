<script setup>
const open = ref(false);
const posts = ref([]);
const loading = ref(false);
const openComment = ref(false);
const postId = ref(null);
const dataStale = ref(false);

watch(dataStale, async () => {
  loading.value = true;
  posts.value = await $fetch("/api/posts");
  loading.value = false;
});

onMounted(async () => {
  loading.value = true;
  posts.value = await $fetch("/api/posts");
  loading.value = false;
});
</script>

<template>
  <div
    class="relative grid min-h-screen grid-rows-[min-content_1fr] bg-neutral-200"
  >
    <Header />

    <div v-if="loading && posts.length === 0">Carregando</div>

    <template v-else>
      <div class="grid grid-rows-[1fr_min-content]">
        <div class="">
          <Post
            v-for="post in posts"
            :user="post.user.userName"
            :userId="post.userId"
            date="27/10/2022"
            :post="post.content"
            :likes="post.likes"
            :id="post.id"
            :comment-count="post.commentCount"
            :liked="post.liked ?? false"
            @stale="dataStale = !dataStale"
            @open-comment="
              (pId) => {
                openComment = true;
                postId = pId;
              }
            "
          />
        </div>

        <div class="sticky bottom-0 right-0 flex w-full justify-end">
          <FABBtn @click="open = true" />
        </div>
      </div>

      <Comments
        :open="openComment"
        @close-comment="openComment = false"
        @stale="dataStale = !dataStale"
        :postId="postId"
      />

      <NewPost
        :open="open"
        @close-post="open = false"
        @stale="dataStale = !dataStale"
      />
    </template>
  </div>
</template>
