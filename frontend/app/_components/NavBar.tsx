'use client'

import Avatar from "@/app/_components/Avatar";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";
import clsx from "clsx";

import { useState } from "react";

export default function NavBar() {
    const [menuOpened, setMenuOpened] = useState(true)

    return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            <Link href="/" className="dark:rounded dark:bg-gray-50">
                <Image src="/images/CountLogo_no_bg.png" width={70} height={70} alt="Count It! Logo" priority />
            </Link>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <UserDropdown />
                <button onClick={() => setMenuOpened(x => !x)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className={clsx(menuOpened && 'hidden' , "items-center justify-between w-full md:flex md:w-auto md:order-1")} >
                <NavLinks />
            </div>
        </div>
    </nav>
    )
}