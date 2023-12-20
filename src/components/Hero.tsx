import React from 'react'
import Navigation from './Navigation'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div>
            <h1 className="font-bold text-4xl tracking-tight sm:text-5xl">
                David Phan
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
                <span>I'm a Software Developer</span>
                <br />
                <span>& recent TMU CS Grad</span>
            </h2>
            <Navigation />
        </div>
    )
}

export default Hero
