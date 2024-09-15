"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname()

    const pageLinks: {title: string, link: string}[] = [
        {title: 'Home', link: '/'},
        {title: 'Dashboard', link: '/dashboard'}
    ]
    
    return (
        <ul className="flex flex-col gap-1 font-medium p-3 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:gap-8 md:mt-0 md:border-0 dark:bg-gray-800 dark:md:bg-inherit dark:border-gray-700">
            {pageLinks.map((page) => (
                <Link key={page.link} href={page.link} className={clsx(
                    pathname === page.link
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-600'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700' ,
                    'block py-2 px-3 rounded md:p-0'
                )}>
                    {page.title}
                </Link>
            ))}
        </ul>
    )
}