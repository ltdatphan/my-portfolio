import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import SpotlightWrapper from "@/components/SpotlightWrapper";
import Hero from "@/components/Hero";

const DynamicExperience = dynamic(() => import("@/components/Experience"), {
  loading: () => <p>Loading...</p>,
});

const DynamicProjects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p>Loading...</p>,
});

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      {/* <SpotlightWrapper> */}
      <NavBar />
      <Hero />
      <DynamicExperience />
      <DynamicProjects />
      <Footer />
      {/* </SpotlightWrapper> */}
    </main>
  );
}
