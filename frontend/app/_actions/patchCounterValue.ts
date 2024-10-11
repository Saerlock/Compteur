'use server'

export default async function patchCounterValue(id: number, value: number) {
  const response = await fetch(`http://nginx/api/counter/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: value }),
    }
  );

  if (!response.ok) {
    throw new Error(`Error patching counter ${id} data...`);
  }

  console.log('sent data !')
  return response.json();
};