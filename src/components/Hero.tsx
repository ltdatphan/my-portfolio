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
  "Yoohoo",
  "Ciao",
  "Xin chao",
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
      className="h-[100vh] md:h-[85vh] w-full md:max-w-3xl mx-auto px-4 py-10 overflow-hidden relative "
      id="top"
    >
      <div className="absolute top-60 md:top-80 -left-10 md:left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10"></div>
      <div className="absolute top-80 -right-20 md:right-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-2000 animate-blob -z-10"></div>
      <div className="absolute top-0 left-5 md:left-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-4000 animate-blob -z-10"></div>
      <div className="flex flex-col h-full animate-fadeIn mt-20">
        <div className="text-3xl md:text-5xl font-bold flex flex-row font-serif mb-3 md:mb-6">
          <TextTransition inline={true} springConfig={presets.default}>
            {greetings[index % greetings.length]}
          </TextTransition>
          , I&#39;m David!
        </div>
        <div className="flex flex-col text-lg md:text-xl font-regular space-y-6 md:space-y-10">
          <p>
            I&#39;m a Software Developer 👨‍💻 <br /> & CS graduate at TMU 🎓
          </p>
          <Socials />
        </div>
        <div className="h-2/4 md:h-2/3 flex flex-col justify-end items-center">
          <Link
            href="#experience"
            onClick={handleScroll}
            aria-label="Button to go down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-8 w-8 fill-gray-700 animate-bounce"
            >
              <path d="M233 407c13 12 33 12 46 0l192-192a32 32 0 0 0-46-46L256 339 87 169a32 32 0 0 0-46 46l192 192z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
