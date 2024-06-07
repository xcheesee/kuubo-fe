export default defineEventHandler(async () => {
  const headers = {
    Accept: "application/json",
  };

  const options = {
    method: "GET",
    Headers: headers,
  };

  return await $fetch(process.env.API_ROUTE + "/Post", options);
});
