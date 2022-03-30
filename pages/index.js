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
        <meta property="og:title" content="David Phan | Portfolio" />
        <meta property="og:description" content="Hi I'm David. Welcome to my website!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.davidphan.dev" />
        <meta property="og:image" content="/render.png" />
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
