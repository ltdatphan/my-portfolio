"use client";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
