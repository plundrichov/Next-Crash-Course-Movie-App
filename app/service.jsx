export async function getData() {
  const API_URL =
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
