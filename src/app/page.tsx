import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Blob from '@/components/Blob'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
    return (
        <main className="font-sans bg-pale-white text-dark-grey dark:text-pale-white dark:bg-dark-grey relative overflow-hidden">
            <Blob className="bg-yellow-300 h-[170px] w-[150px] md:h-[450px] md:w-[350px] top-[12.5%] -right-[10%] md:top-[12.5%] md:right-[5%] animate-blob motion-reduce:animate-none" />
            <Blob className="bg-pink-300 h-[400px] w-[250px] md:h-[350px] md:w-[375px] right-[65%] top-[8%] md:top-[20%] md:right-[70%] animate-blobSlow motion-reduce:animate-none" />
            <Blob className="bg-teal-300 h-[300px] w-[450px] md:h-[450px] md:w-[550px] top-[0%] right-[50%] animate-blobSlower motion-reduce:animate-none" />
            <NavBar />
            <Hero />
            <Experience />
            <Projects />
            <Footer />
        </main>
    )
}
