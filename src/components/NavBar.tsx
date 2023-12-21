'use client'
import Link from 'next/link'
import handleScroll from '@/scripts/handleScroll'
import ThemeToggle from './ThemeToggle'
export default function NavBar() {
    return (
        <nav id="header" className="sticky w-full top-0 z-20">
            <div className="w-full h-14 md:h-20 bg-pale-white justify-center border-b border-gray-200 dark:bg-dark-grey dark:text-pale-white dark:border-gray-700">
                <div className="h-full w-full md:max-w-3xl mx-auto px-4">
                    <div className="flex justify-between h-full items-center">
                        <Link href="#top" onClick={handleScroll}>
                            <span className="text-md md:text-lg font-bold">
                                David Phan
                            </span>
                        </Link>
                        <div className="flex h-full ml-4 items-center space-x-3 md:space-x-8 font-regular text-grey-800 font-sans">
                            <Link
                                href="#experience"
                                onClick={handleScroll}
                                className="hover:text-blue-500"
                            >
                                Experience
                            </Link>
                            <Link
                                href="#projects"
                                onClick={handleScroll}
                                className="hover:text-blue-500"
                            >
                                Projects
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
