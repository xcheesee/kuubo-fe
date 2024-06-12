export default defineEventHandler(async (event) => {
  const body = await readFormData(event);

  const options = {
    method: "POST",
    body,
  };

  return await $fetch(process.env.API_ROUTE + "/PostComment", options);
});
