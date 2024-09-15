export async function getCompteurs() {
  const response = await fetch("http://nginx/api/counter", { next: { revalidate: 3600 } });
  if (!response.ok) {
    throw new Error("Error fetching counter data...");
  }
  return response.json();
};