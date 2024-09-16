import InputForm from "@/app/_components/InputForm";

export default async function Register() {
  const fields = ["firstname", "lastname", "email"]
  
  return (
    <div className="w-full flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl my-24">{`Page Register`}</h1>
      <InputForm inputs={fields} />
    </div>
  )
}