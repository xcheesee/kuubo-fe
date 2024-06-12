<script setup>
const { data: posts, pending } = await useFetch("/api/posts");
const openComment = ref(false);
const postId = ref(null);
</script>

<template>
  <div v-if="pending">Carregando</div>
  <template v-else>
    <div v-for="post in posts">
      <Post
        :user="post.user.userName"
        date="27/10/2022"
        :post="post.content"
        :likes="post.likes"
        :id="post.id"
        :comment-count="post.commentCount"
        @open-comment="
          (pId) => {
            openComment = true;
            postId = pId;
          }
        "
      />
    </div>
    <Comments
      :open="openComment"
      @close-comment="openComment = false"
      :postId="postId"
    />
  </template>
</template>
