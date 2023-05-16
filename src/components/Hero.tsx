"use client";
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";
import Socials from "./Socials";
import Link from "next/link";
import handleScroll from "@/scripts/handleScroll";

const greetings = [
  "Hello",
  "Hey",
  "Howdy",
  "Heya",
  "Wassup",
  "Bonjour",
  "Yo",
  "Yoohoo",
  "Ciao",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section
      className="h-[70vh] md:h-[85vh] w-full md:max-w-3xl mx-auto px-4 py-10 mt-20 mb-40"
      id="top"
    >
      <div className="flex flex-col h-full animate-fadeIn">
        <div className="text-3xl md:text-5xl font-bold flex flex-row font-serif mb-3 md:mb-6">
          <TextTransition inline={true} springConfig={presets.default}>
            {greetings[index % greetings.length]}
          </TextTransition>
          , I&#39;m David!
        </div>
        <div className="flex flex-col text-lg md:text-xl font-regular space-y-6 md:space-y-10">
          <p>
            I&#39;m a Software Developer 👨‍💻 <br /> & upcoming CS graduate at TMU
            🎓
          </p>
          <Socials />
        </div>
        <div className="h-full flex flex-col justify-end items-center">
          <Link href="#experience" onClick={handleScroll}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-8 w-8 fill-gray-600 animate-bounce"
            >
              <path d="M233 407c13 12 33 12 46 0l192-192a32 32 0 0 0-46-46L256 339 87 169a32 32 0 0 0-46 46l192 192z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
