import { NavLink } from 'react-router-dom'

const links = [
    {
        label: 'ABOUT',
        href: '#about',
    },
    {
        label: 'EXPERIENCE',
        href: '#experience',
    },
    {
        label: 'PROJECTS',
        href: '#projects',
    },
]

const Navigation = () => {
    return (
        <nav className="" aria-label="jump links">
            <ul className="mt-16 w-max">
                {links.map((link, index) => (
                    <li>
                        <NavLink to={link.href} key={index}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
