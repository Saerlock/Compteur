import { getUserData } from "../../_services/users";

export default async function Profile() {   
  const user: User = await getUserData()
  
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl my-8">{`Page Profile`}</h1>
      <span className="underline mb-2">{`The current user is :`}</span>
      <ul>
        <li>{`firstname: ${user.firstname}`}</li>
        <li>{`lastname: ${user.lastname}`}</li>
        <li>{`email: ${user.email}`}</li>
      </ul>
    </div>
  )
}