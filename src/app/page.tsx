import dynamic from 'next/dynamic'
import NavBar from '@/components/NavBar'
// import SpotlightWrapper from '@/components/SpotlightWrapper'
import Hero from '@/components/Hero'

const DynamicExperience = dynamic(() => import('@/components/Experience'), {
    loading: () => <p>Loading...</p>,
})

const DynamicProjects = dynamic(() => import('@/components/Projects'), {
    loading: () => <p>Loading...</p>,
})

import Footer from '@/components/Footer'
import RandomBlob from '@/components/RandomBlob'

export default function Home() {
    return (
        <main className="font-sans bg-pale-white text-dark-grey dark:text-pale-white dark:bg-dark-grey">
            {/* <SpotlightWrapper> */}
            <RandomBlob className="bg-yellow-300" />
            <RandomBlob className="bg-pink-300 animation-delay-4000" />
            <RandomBlob className="bg-teal-300 animation-delay-2000" />
            <NavBar />
            <Hero />
            <DynamicExperience />
            <DynamicProjects />
            <Footer />
            {/* </SpotlightWrapper> */}
        </main>
    )
}
