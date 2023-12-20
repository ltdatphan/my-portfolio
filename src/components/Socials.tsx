/// <reference types="vite-plugin-svgr/client" />
import React from 'react'

import GithubIcon from 'assets/icons/github.svg?react'
import LinkedinIcon from 'assets/icons/linkedin.svg?react'
import MailIcon from 'assets/icons/mail.svg?react'

const iconProps = [
    {
        ariaInfo: 'Personal email',
        href: '',
        icon: MailIcon,
    },
    {
        ariaInfo: 'Github repository',
        href: '',
        icon: GithubIcon,
    },
    {
        ariaInfo: 'Linkedin profile',
        href: '',
        icon: LinkedinIcon,
    },
]

const Socials = () => {
    return (
        <ul className="flex mt-8 w-max group/list">
            {iconProps.map((icon, index) => (
                <li className="mr-5 text-xs">
                    <a
                        href={icon.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Link to ${icon.ariaInfo} (Opens in new tab)`}
                        className="block hover:text-blue-500 lg:hover:!opacity-100 lg:group-hover/list:opacity-60"
                    >
                        <span className="sr-only">{icon.ariaInfo}</span>
                        <icon.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                        ></icon.icon>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
