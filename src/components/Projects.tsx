'use client'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
const projects = [
    {
        name: 'MedSuite',
        shortDesc: 'Fullstack hospital management system',
        // desc: "Hospital Management System used to store patients' info, book appointments, and keep track of hospital's medical supplies. Uses a NextJS front end and Firebase for back end as a service. Worked in an Agile environment and utilized tools such as Jira, Github, Zoom, Discord to collaborate.",
        desc: [
            'Developed a hospital management system to store patient’s information, schedule appointments and monitor medical supplies',
            'Utilized Figma for mockups and implemented front end inside Next.js',
            'Leveraged Firebase as back end for persistent data storage and authentication of users',
            'Operated within an Agile environment, utilizing tools such as Jira, Discord and Zoom to collaborate effectively',
            'Assisted members in solving blocked tasks, reviewing code and deploying the app',
        ],
        imagePath: '/medsuite.webp',
        technologies: ['Next.js', 'Firebase', 'TailwindCSS', 'Netlify'],
        link: 'https://medsuite.netlify.app/',
    },
    {
        name: 'Wikipedia Search Engine',
        shortDesc: 'Search engine with simple front end',
        // desc: "Created a search engine to search a subset of 10000 Wikipedia articles. Trained search model in Python using various algorithms to help predict relevant topics to provide results that best matches user's needs. Front-end is a small React app hosted on Netlify. Back-end is a Flask app hosted on Render.",
        desc: [
            'Created a web application that searches a subset of 1,000 Wikipedia documents',
            'Utilize different information retrieval models to interpret search terms and return the most relevant results',
            'Implemented front end in React and deployed on Netlify',
            'Developed back end in Flask to handle search requests and deployed on Render',
        ],
        imagePath: '/search-engine-2.webp',
        technologies: ['React', 'Flask', 'Netlify', 'Render'],
        link: 'https://search-engine-cps842.netlify.app/',
    },
    {
        name: 'Smart Detection',
        shortDesc: 'Fullstack face detection app',
        // desc: "Web app app that utilize Clarifai's AI model to calculate the location of human faces and outlines them. Created a responsive front-end using React. For back-end, utilize Express and PostgreSQL authenticate + store user's credentials. Front-end hosted on Github Pages. Back-end hosted on Heroku.",
        desc: [
            'Created a web application that outlines human faces in images by leveraging Clarifai’s Face Recognition model',
            'Implemented a responsive and user-friendly front end using React and Bootstrap',
            'Developed an ExpressJS back end to interact with a PostgreSQL database that stores user information and hashed passwords using the bcrypt algorithm',
            'Deployed front end on GitHub pages and back end on Fly.io',
        ],
        imagePath: '/smart-detection.webp',
        technologies: [
            'React',
            'Express',
            'PostgreSQL',
            'Github Pages',
            'Fly.io',
        ],
        link: 'https://ltdatphan.github.io/smart-detection/',
    },
]

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-20% 0%',
    })

    return (
        <section
            className={`h-max w-full md:max-w-3xl mx-auto px-4 py-0 relative overflow-hidden`}
            id="projects"
            ref={ref}
            aria-label="Projects"
        >
            {/* <div className="absolute top-40 md:top-15 -left-10 md:left-40 h-[28rem] w-[28rem] bg-gradient-to-bl from-teal-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-10"></div> */}
            <h2
                className={`text-xl font-semibold mb-12 ${
                    inView
                        ? 'animate-slideInLeft motion-reduce:animate-none'
                        : 'opacity-0'
                }`}
            >
                Projects
            </h2>
            <ul className="group/list">
                {projects.map((project, index) => (
                    <li
                        className={`mb-16 ${
                            inView
                                ? 'animate-slideInLeft motion-reduce:animate-none'
                                : 'opacity-0'
                        }`}
                        key={index}
                        style={{
                            animationDelay: `${index * 0.5}s`,
                            animationFillMode: 'both',
                        }}
                    >
                        <div
                            className="group relative grid md:grid-cols-8 rounded lg:hover:!opacity-100 lg:group-hover/list:opacity-50 
                            lg:transition-opacity lg:duration-200 lg:ease-in-out motion-reduce:transition-none"
                        >
                            <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md 
                                lg:block lg:group-hover:bg-slate-200/50 
                                dark:lg:group-hover:bg-slate-800/50 
                                lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                                lg:group-hover:drop-shadow-lg
                                lg:transition-all lg:duration-200 lg:ease-in-out motion-reduce:transition-none
                                "
                            ></div>
                            <div
                                className="md:col-span-2 z-10 mb-4 md:mr-4"
                                aria-label={`${project.name} thumbnail`}
                            >
                                <Image
                                    src={project.imagePath}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt={project.name}
                                    loading="lazy"
                                />
                            </div>
                            <div className="md:col-span-6 z-10">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    key={index}
                                    className="font-medium hover:text-teal-500 dark:hover:text-teal-400
                                    transition-colors duration-200 ease-in-out motion-reduce:transition-none"
                                >
                                    <span className="block">
                                        {project.name}
                                    </span>
                                    <span className="font-semibold text-neutral-500">
                                        {project.shortDesc}
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="h-3 w-3 inline ml-1 relative bottom-[0.08em] fill-neutral-500"
                                    >
                                        <path d="M352 0a32.1 32.1 0 0 0-22.7 54.7L370.7 96 201.4 265.4a32 32 0 0 0 45.3 45.3L416 141.3l41.4 41.4a32 32 0 0 0 54.7-22.7V32a32 32 0 0 0-32-32H352zM80 32a80 80 0 0 0-80 80v320a80 80 0 0 0 80 80h320a80 80 0 0 0 80-80V320a32 32 0 1 0-64 0v112a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V112a16 16 0 0 1 16-16h112a32 32 0 1 0 0-64H80z" />
                                    </svg>
                                    <span className="absolute -inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 hidden rounded lg:block"></span>
                                </a>
                                {/* <p className="mt-2">{project.desc}</p> */}
                                <ul
                                    className="mt-2 list-disc list-inside"
                                    aria-label="Project description"
                                >
                                    {project.desc.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <ul
                                    className="flex gap-2 mt-4 flex-wrap"
                                    aria-label="Technologies used"
                                >
                                    {project.technologies.map((tag, i) => (
                                        <li
                                            key={i}
                                            className="text-sm font-medium text-teal-800 bg-teal-300/40 px-2 py-1 dark:text-teal-300 dark:bg-teal-300/10 rounded-full"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
