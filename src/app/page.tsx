import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Blob from '@/components/Blob'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
    return (
        <main className="font-sans bg-pale-white text-dark-grey dark:text-pale-white dark:bg-dark-grey">
            <Blob className="bg-yellow-300 h-[170px] w-[150px] md:h-[250px] md:w-[250px] top-[10%] right-[5%] md:top-[12.5%] md:right-[30%] animation-delay-2000" />
            <Blob className="bg-pink-300 h-[250px] w-[200px] md:h-[350px] md:w-[375px] top-[40%] right-[0%] md:top-[50%] md:right-[20%] animation-delay-4000" />
            <Blob className="bg-teal-300 h-[300px] w-[450px] md:h-[450px] md:w-[550px] top-[0%] right-[50%]" />
            <NavBar />
            <Hero />
            <Experience />
            <Projects />
            <Footer />
        </main>
    )
}
