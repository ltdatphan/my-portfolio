import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

const DynamicExperience = dynamic(() => import("@/components/Experience"), {
  loading: () => <p>Loading...</p>,
});

const DynamicProjects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p>Loading...</p>,
});

// import Experience from "@/components/Experience";
// import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <NavBar />
      <Hero />
      {/* <Experience /> */}
      <DynamicExperience />
      {/* <Projects /> */}
      <DynamicProjects />
      <Footer />
    </main>
  );
}
