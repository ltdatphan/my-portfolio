'use client'
import { MouseEventHandler } from 'react'

const handleScroll: MouseEventHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
    // first prevent the default behavior
    e.preventDefault()
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    // get the element by id and use scrollTo
    var element = document.getElementById(targetId)

    var headerOffset = 90
    var elementPosition = element?.getBoundingClientRect().top || 0
    var offsetPosition = elementPosition + window.scrollY - headerOffset

    window.scrollTo({
        top: targetId === 'top' ? 0 : offsetPosition,
        behavior: 'smooth',
    })
}

export default handleScroll
