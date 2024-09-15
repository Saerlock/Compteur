import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Counter from "./components/Counter";

import { getCompteurs } from "./services/compteurs";



export default async function Home() {   
  const data: Counter[] = await getCompteurs();
  
  return (
    <main className="min-h-screen">
      <NavBar />
      
      <Footer />
    </main>
  )
}