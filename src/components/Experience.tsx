'use client'
import { useInView } from 'react-intersection-observer'

type jobInfoType = {
    start_date: string
    end_date: string
    title: string
    company_name: string
    tasks: string[]
    link: string
    tags: string[]
}

const job_detail: jobInfoType[] = [
    {
        start_date: 'Sep 2021',
        end_date: 'Jun 2022',
        title: 'Software Development Intern',
        company_name: 'AviaPro Consulting Inc.',
        tasks: [
            'Streamlined data collection and organization processes using automation flows in Zapier',
            'Deployed service on AWS EC2 to automate license distribution for vendor’s software',
            'Developed VBA scripts, cutting processing time by 70% and eliminating manual entry errors',
            'Created Python script to construct a custom airports dataset, increasing analysts’ productivity',
            'Implemented in-house Chrome Extension to streamline data extraction, saving analysts hours of manual work',
        ],
        link: 'https://aviaproconsulting.ca',
        tags: ['Python', 'JavaScript', 'AWS', 'Excel VBA', 'Zapier', 'Shopify'],
    },
    {
        start_date: 'May 2021',
        end_date: 'Aug 2021',
        title: 'Software Development – Co-op student',
        company_name: 'CAAT Pension Plan',
        tasks: [
            'Implemented a unit testing framework, ensuring code reliability for the pension system used by 80,000+ members',
            'Wrote unit tests in C#, covered 20% of the codebase and documented all redundancies found',
            'Integrated tests into the CI/CD pipeline on Azure DevOps to automate testing before deployment',
            'Drafted internal documentation for basic operations in Microsoft SharePoint, serving as a reference for other members of the organization and ensuring consistent branding',
        ],
        link: 'https://www.caatpension.ca/',
        tags: ['C#', 'Unit Testing', 'Azure DevOps', 'CI/CD', 'SharePoint'],
    },
]

export default function Experience() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-20% 0%',
    })

    return (
        <section
            className={`h-max w-full md:max-w-3xl mx-auto px-4 py-0 relative overflow-hidden`}
            id="experience"
            ref={ref}
            aria-label="Work experience"
        >
            <h2
                className={`text-xl font-semibold mb-12 ${
                    inView
                        ? 'animate-slideInLeft motion-reduce:animate-none'
                        : 'opacity-0'
                }`}
            >
                Experience
            </h2>
            <ul className="group/list">
                {job_detail.map((job, index) => (
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
                            <header
                                className="md:col-span-2 z-10"
                                aria-label={`${job.start_date} to ${job.end_date}`}
                            >
                                <span className="uppercase text-sm font-semibold text-neutral-500">
                                    {job.start_date} -{' '}
                                    <span className="whitespace-nowrap">
                                        {job.end_date}
                                    </span>
                                </span>
                            </header>
                            <div className="md:col-span-6 z-10">
                                <a
                                    href={job.link}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    key={index}
                                    className="font-medium hover:text-teal-500 dark:hover:text-teal-400
                                    transition-colors duration-200 ease-in-out motion-reduce:transition-none"
                                >
                                    <span className="block">{job.title}</span>
                                    <span className="font-semibold text-neutral-500">
                                        {job.company_name}
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
                                <ul
                                    className="mt-2 list-disc list-inside"
                                    aria-label="Responsibilities"
                                >
                                    {job.tasks.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                                <ul
                                    className="flex flex-wrap gap-2 mt-4"
                                    aria-label="Technologies used"
                                >
                                    {job.tags.map((tag, i) => (
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
