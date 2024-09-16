export async function getUserData() {
  // const response = await fetch("http://nginx/api/user/profile", { next: { revalidate: 3600 } });
  // if (!response.ok) {
  //   throw new Error("Error fetching counter data...");
  // }
  // return response.json();
  const user: User = {
    id: 0,
    firstname: 'Saer',
    lastname: 'Lock',
    email: 'saerlock.pro@gmail.com'
  }

  return user
};