'use client'

import { Minus } from "lucide-react"
import { Plus } from "lucide-react"
import { useState, useEffect } from "react"
import patchCounterValue from "../_actions/patchCounterValue"

export default function CardButtons({ id, value }: { id: number, value: number }) {
  const [counter, setCounter] = useState(value)

  function handleDecrement() {
    setCounter(x => x > 0 ? x - 1 : x)
  }

  function handleIncrement() {
    setCounter(x => x < 10000 ? x + 1 : x)
  }

  useEffect(() => {
    patchCounterValue(id, counter)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

  return (
    <div className="flex-center">
      <button onClick={handleDecrement} className="inline-flex z-10 items-center px-2 py-2 flex-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 -mr-2">
        <Minus size={20} strokeWidth={2} />
      </button>
      <p className="min-w-28 h-9 bg-gray-700 flex-center"> { counter } </p>
      <button onClick={handleIncrement} className="inline-flex z-10 items-center px-2 py-2 flex-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 -ml-2">
        <Plus size={20} strokeWidth={2} />
      </button>
    </div>
  )
}