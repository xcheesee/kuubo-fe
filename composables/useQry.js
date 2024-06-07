export const useQry = async ({ queryFn, initialValue = null }) => {
  const data = ref(initialValue);
  const error = ref(null);
  const loading = ref(true);

  //const fetchData = async () => {
  //loading.value = true;
  try {
    const res = await queryFn();
    data.value = await res.json();
    loading.value = false;
  } catch (e) {
    error.value = e;
    loading.value = false;
  }
  return { data, error, loading };
};
