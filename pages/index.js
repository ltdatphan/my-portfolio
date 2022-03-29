import Head from "next/head";

import Layout from "@/components/Layout";
import Landing from "@/components/Landing";
import About from "@/components/About";
// import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences/Experiences";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>David Phan | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <About />
        {/* <Skills /> */}
        <Experiences />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
