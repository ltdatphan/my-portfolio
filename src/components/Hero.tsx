"use client";
import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";
import Socials from "./Socials";

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
    <section className="h-full w-full md:max-w-3xl mx-auto px-4 py-10 mt-20 animate__animated animate__bounce">
      <div className="flex flex-col">
        <div className="text-3xl md:text-5xl font-bold flex flex-row font-serif mb-3 md:mb-6">
          <TextTransition inline={true} springConfig={presets.gentle}>
            {greetings[index % greetings.length]}
          </TextTransition>
          , I&#39;m David!
        </div>
        <div className="flex flex-col text-lg md:text-xl font-regular space-y-12">
          <p>
            I&#39;m a Software Developer 👨‍💻 <br /> upcoming CS graduate at TMU
            🎓
          </p>
          <Socials />
        </div>
      </div>
    </section>
  );
}
