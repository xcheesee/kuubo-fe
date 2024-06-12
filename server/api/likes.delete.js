export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const options = {
    method: "DELETE",
  };

  return await $fetch(
    process.env.API_ROUTE + `/UserPostLike/${body.userId}/${body.postId}`,
    options,
  );
});
