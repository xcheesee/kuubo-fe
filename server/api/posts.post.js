export default defineEventHandler(async (event) => {
  const body = await readFormData(event);

  const options = {
    method: "POST",
    body: body,
  };

  return await $fetch(process.env.API_ROUTE + "/Post", options);
});
