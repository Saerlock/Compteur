import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { getUserData } from "../services/users";

export default async function Home() {   
  const user: User = await getUserData()
  return (
    <main className="min-h-screen">
      <NavBar />
      <div>
        <h1><b>The current user is :</b></h1>
        <p><u>firstname:</u> {user.firstname}</p>
        <p><u>lastname:</u> {user.lastname}</p>
        <p><u>email:</u> {user.email}</p>
      </div>
      <Footer />
    </main>
  )
}