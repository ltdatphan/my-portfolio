'use client'
import TextTransition, { presets } from 'react-text-transition'
import { useState, useEffect } from 'react'
import Socials from './Socials'
import Link from 'next/link'
import handleScroll from '@/scripts/handleScroll'

const greetings = [
    'Hey',
    'Hello',
    'Howdy',
    'Heya',
    'Wassup',
    'Bonjour',
    'Yoohoo',
    'Ciao',
    'Xin chao',
]

export default function Hero() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            5000 // every 5 seconds
        )
        return () => clearTimeout(intervalId)
    }, [])

    return (
        <section
            className="h-[92vh] w-full md:max-w-3xl mx-auto px-4 py-10 overflow-hidden relative "
            id="top"
        >
            {/* <div className="absolute top-60 md:top-60 -left-10 md:left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-xl opacity-80 dark:opacity-60 animate-blob z-10"></div>
            <div className="absolute top-80 right-30 md:right-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply dark:mix-blend-hard-light filter blur-xl opacity-80 dark:opacity-60 animation-delay-2000 animate-blob z-10"></div>
            <div className="absolute top-0 left-5 md:left-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter dark:mix-blend-hard-light blur-xl opacity-80 dark:opacity-60 animation-delay-4000 animate-blob z-10"></div> */}

            <div className="flex flex-col h-full justify-between z-10 relative">
                <div className="mt-36">
                    <h1 className="text-3xl md:text-5xl font-bold font-serif mb-3 md:mb-6 animate-fadeIn">
                        <span>
                            <TextTransition
                                inline={true}
                                springConfig={presets.default}
                                direction="up"
                                delay={0}
                            >
                                {greetings[index % greetings.length]}
                            </TextTransition>
                            , I&#39;m David!
                        </span>
                    </h1>
                    <h2 className="text-lg md:text-xl font-regular mb-16">
                        <span>
                            I&#39;m a Software Developer 👨‍💻 <br /> & CS graduate
                            at TMU 🎓
                        </span>
                    </h2>
                    <Socials />
                </div>
                <div className="h-2/4 md:h-2/3 flex flex-col justify-end items-center">
                    <Link
                        href="#experience"
                        onClick={handleScroll}
                        aria-label="Scroll to next section"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="h-8 w-8 fill-gray-700 animate-bounce dark:fill-gray-200"
                        >
                            <path d="M233 407c13 12 33 12 46 0l192-192a32 32 0 0 0-46-46L256 339 87 169a32 32 0 0 0-46 46l192 192z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
