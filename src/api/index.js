export const getUser = async (userId) => {
  const res = (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()
  return res;
}
