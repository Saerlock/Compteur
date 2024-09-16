export default async function Home() {     
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl my-8">{`Page d'accueil du Compteur`}</h1>
      <span className="underline mb-2">{`Dans le futur, Vous retrouverez ici :`}</span>
      <ul className="list-disc">
        <li>{`la page de présentation du projet si vous n'êtes pas connecté`}</li>
        <li>{`Une redirection vers votre page home si vous êtes connecté`}</li>
      </ul>
    </div>
  )
}