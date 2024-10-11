export async function getCounters() {
  const response = await fetch("http://backend:3001/counter", { cache: 'no-store' } );
  if (!response.ok) {
    throw new Error("Error fetching counters data...");
  }
  return response.json();
};