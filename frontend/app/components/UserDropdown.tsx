'use client'

import Avatar from "@/app/components/Avatar";
import clsx from "clsx";
import { useState } from "react";

export default function UserDropdown() {
    const [opened, setOpened] = useState(false)
    const user: User = {
        id: 0,
        firstname: 'Saer',
        lastname: 'Lock',
        email: 'saerlock.pro@gmail.com'
    }

    return (
        <>
        <button onClick={() => setOpened(x => !x)} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            <span className="sr-only">Open user menu</span>
            <Avatar initials={user.firstname.charAt(0)+user.lastname.charAt(0)}/>
        </button>
        <div className={clsx(opened ? 'absolute' : 'hidden', "top-16 right-1 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600")}>
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{`${user.firstname} ${user.lastname}`}</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
            </div>
            <ul className="py-2">
                <li>
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
            </ul>
        </div>
        </>
    )
}