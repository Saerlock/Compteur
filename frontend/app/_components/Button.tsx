'use client'

export default function Button({ children, func } : { children: React.ReactNode, func: () => void }) {
  
  return (
    <button type="button" onClick={func} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto my-4 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
      {children}
    </button>
  )
}