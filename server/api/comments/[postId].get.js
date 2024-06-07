export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "postId");
  const headers = {
    Accept: "application/json",
  };

  const options = {
    method: "GET",
    Headers: headers,
  };

  return await $fetch(
    process.env.API_ROUTE + "/PostComment/" + postId,
    options,
  );
});
