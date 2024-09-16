import InputForm from "@/app/_components/InputForm";

export default async function Login() {
  const fields = ["email"]
  
  return (
    <div className="w-full flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl my-24">{`Page Login`}</h1>
      <InputForm inputs={fields} />
    </div>
  )
}