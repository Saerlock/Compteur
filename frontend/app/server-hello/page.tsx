export default async function ServerHelloPage() {
  try {
    const res = await fetch("http://nginx/api/");
    const data = await res.text();
    if (!res.ok) {
      throw new Error(data);
    }
    return <h1 className="text-3xl font-bold">{data}blb</h1>;
  } catch (error) {
    console.error(error);
    return <h1 className="text-3xl font-bold">Error</h1>;
  }
}