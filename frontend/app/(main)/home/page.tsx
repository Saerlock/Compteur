import { getCompteurs } from "@/app/_services/compteurs";

export default async function UserHome() {   
  const data: Counter[] = await getCompteurs();
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl my-8">{`Page Home`}</h1>
      <span className="underline mb-2">{`Dans le futur, Vous retrouverez ici :`}</span>
      <ul className="list-disc">
        <li>{`vos compteurs préférés`}</li>
        <li>{`vos graphes préférés`}</li>
        <li>{`Des raccourcis pour créer/modifier vos compteurs`}</li>
      </ul>
    </div>
  )
}