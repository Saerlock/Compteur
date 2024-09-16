export default async function Dashboard() {   
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl my-8">{`Page dashboard`}</h1>
      <span className="underline mb-2">{`Dans le futur, Vous retrouverez ici :`}</span>
      <ul className="list-disc">
        <li>{`Vos graphes préférés`}</li>
        <li>{`Des graphes combinés de plusieurs compteurs`}</li>
        <li>{`Des analyses de tendances générales`}</li>
        <li>{`Des statistiques variées sur vos compteurs`}</li>
      </ul>
    </div>
  )
}