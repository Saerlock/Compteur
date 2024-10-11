import CardButtons from "@/app/_components/CardButtons";
import { getCounters } from "@/app/_services/compteurs";

export default async function Counters() {   
  const counters: Counter[] = await getCounters();
  
  return (
    <div className="w-full flex-center flex-col">
      <h1 className="text-3xl my-14">{`Page Compteurs`}</h1>
      <div className="max-w-4xl flex-center flex-wrap gap-6">
        { counters.map( counter => (
          <div key={counter.id} className="w-72 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {counter.name} </h5>
            <p className="mb-3 font-normal truncate text-gray-700 dark:text-gray-400"> {counter.description || '...'} </p>
            <CardButtons id={counter.id} value={counter.value} />
          </div>
        ))}
      </div>
    </div>
  )
}