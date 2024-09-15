import TestFooter from "./components/TestFooter";
import TestNavBar from "./components/TestNavBar";

export default async function TestPage() {   
  return (
    <main className="min-h-screen">
      <TestNavBar />
      
      <TestFooter />
    </main>
  )
}