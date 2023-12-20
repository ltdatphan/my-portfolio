import Hero from 'src/components/Hero'
import Socials from 'src/components/Socials'
import About from 'src/components/sections/About'
import Experience from 'src/components/sections/Experience'
import Projects from 'src/components/sections/Projects'

type Props = {}

const Home = (props: Props) => {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2">
                    <div className="mt-24">
                        <Hero />
                        <Socials />
                    </div>
                </header>
                <main className="lg:w-1/2">
                    <About />
                    <Experience />
                    <Projects />
                </main>
            </div>
        </div>
    )
}

export default Home
