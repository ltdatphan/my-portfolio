'use client'
import { useInView } from 'react-intersection-observer'

type jobInfoType = {
    start_date: string
    end_date: string
    title: string
    company_name: string
    desc: string
    link: string
    tags: string[]
}

const job_detail: jobInfoType[] = [
    {
        start_date: 'Sep 2021',
        end_date: 'Jun 2022',
        title: 'Software Development Intern',
        company_name: 'AviaPro Consulting Inc.',
        desc: "In charge of making data conversion scripts using VBA and Python. Enhanced Shopify storefront, created an Chrome extension and testing scripts using JavaScript. Deployed license server on AWS to automate the distribution of keys for vendor's software.",
        link: 'https://aviaproconsulting.ca',
        tags: ['Python', 'JavaScript', 'Excel VBA', 'Automation', 'Shopify'],
    },
    {
        start_date: 'May 2021',
        end_date: 'Aug 2021',
        title: 'Software Development – Co-op student',
        company_name: 'CAAT Pension Plan',
        desc: 'Responsible for implementing unit testing framework for the platform used by pension members. Wrote tests using C#, Moq, xUnit and increased code coverage by 20%. Intergrate into CI/CD pipeline on Azure DevOps.',
        link: 'https://www.caatpension.ca/',
        tags: ['C#', 'Unit testing', 'Azure DevOps', 'CI/CD', 'SharePoint'],
    },
]

export default function Experience() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-15% 0%',
    })

    return (
        <section
            className={`h-max w-full md:max-w-3xl mx-auto px-4 py-5 relative overflow-hidden ${
                inView ? 'animate-reveal' : 'opacity-0'
            }`}
            id="experience"
            ref={ref}
        >
            {/* <div className="absolute top-40 md:top-15 -left-10 md:left-40 h-[28rem] w-[28rem] bg-gradient-to-bl from-teal-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob z-10"></div> */}
            <h2 className="text-xl font-semibold mb-12">Experience</h2>
            <ul className="group/list">
                {job_detail.map((job, index) => (
                    <li className="mb-16" key={index}>
                        <div className="group relative grid md:grid-cols-8 rounded lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md lg:block lg:group-hover:bg-slate-200/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="md:col-span-2 z-10">
                                <span className="uppercase text-sm font-semibold text-neutral-500">
                                    {job.start_date} -{' '}
                                    <span className="whitespace-nowrap">
                                        {job.end_date}
                                    </span>
                                </span>
                            </div>
                            <div className="md:col-span-6 z-10">
                                <a
                                    href={job.link}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    key={index}
                                    className="font-medium group-hover:text-teal-400 dark:group-hover:text-teal-400"
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
                                <p className="mt-2">{job.desc}</p>
                                <ul className="flex flex-wrap gap-2 mt-4">
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
