'use client'
import { useRef, useState } from 'react'

type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function SpotlightWrapper({ children }: Props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const ref = useRef<HTMLDivElement>(null)

    const moveSpotlight = (e: React.MouseEvent) => {
        e.preventDefault()
        let { pageX, pageY } = e
        console.log(e)
        if (ref.current && windowWidth >= 768) {
            //   ref.current.style.background = `radial-gradient(circle at ${pageX}px ${pageY}px, #9cffe0 10px, #fff 500px)`;
        }
    }

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
        if (ref.current && windowWidth < 768) ref.current.style.background = ''
    })

    return (
        <div
            id="spotlight"
            onMouseMove={(e) => (windowWidth >= 765 ? moveSpotlight(e) : null)}
            ref={ref}
            className="h-full opacity-100"
        >
            {children}
        </div>
    )
}
