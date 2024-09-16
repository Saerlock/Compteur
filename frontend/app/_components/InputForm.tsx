'use client'

import clsx from "clsx";
import Button from "./Button";
import SecurityWarning from "./SecurityWarning";

import { useState } from "react";



export default function InputForm({ inputs } : { inputs: string[] }) {
  const [formData, setFormData] = useState<InputFields>(() => {
    let init: InputFields = {}
    inputs.map(i => init[i] = '')
    return init
  })

  function updateFormData(e: any): void {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function submitFormData() {
    console.log(formData)
  }

  return (
    <div className="flex flex-col">
      { inputs.map(input => 
        <div key={input} className={clsx(input !== inputs[inputs.length-1] && 'mb-2')}>
          <label htmlFor={input} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{`Your ${input}`}</label>
          <input
            type={input === "email" ? "email" : "text"} id={input} name={input} placeholder={`${input} ...`} value={formData['input']} onChange={updateFormData}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      )}
      {/* <a href="/privacypolicy" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a> */}
      <Button func={submitFormData}>Submit</Button>
      <SecurityWarning />
    </div>
  )
}