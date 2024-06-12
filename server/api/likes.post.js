export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const options = {
    method: "POST",
    body,
  };

  return await $fetch(process.env.API_ROUTE + "/UserPostLike", options);
});
