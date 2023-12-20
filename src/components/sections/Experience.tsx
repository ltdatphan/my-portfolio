import React from 'react'

type Props = {}

type experienceType = {
    roleName: string
    compName: string
    startDate: string
    endDate: string
    tasks: string[]
    tags?: string[]
    link: string
}

const experiences: experienceType[] = [
    // AviaPro
    {
        roleName: 'Software Development Intern',
        compName: 'AviaPro Consulting Inc.',
        startDate: 'Sep 2021',
        endDate: 'May 2022',
        tasks: [
            'Streamlined data collection and organization processes using automation flows in Zapier',
            'Deployed service on AWS EC2 to automate license distribution for vendor’s software',
            'Developed VBA scripts, cutting processing time by 70% and eliminating manual entry errors',
            'Created Python script to construct a custom airports dataset, increasing analysts’ productivity',
            'Implemented in-house Chrome Extension to streamline data extraction, saving analysts hours of manual work',
        ],
        tags: ['Python', 'JavaScript', 'Excel VBA', 'AWS', 'Automation'],
        link: 'https://www.google.com/',
    },
    // CAAT
    {
        roleName: 'Software Development Intern',
        compName: 'CAAT Pension Plan',
        startDate: 'May 2021',
        endDate: 'Aug 2021',
        tasks: [
            'Implemented a unit testing framework, ensuring code reliability for the pension system used by 80,000+ members',
            'Wrote unit tests in C#, covered 20% of the codebase and documented all redundancies found',
            'Integrated tests into the CI/CD pipeline on Azure DevOps to automate testing before deployment',
            'Drafted internal documentation for basic operations in Microsoft SharePoint, serving as a reference for other members of the organization and ensuring consistent branding',
        ],
        tags: ['C#', 'Unit testing', 'Azure DevOps', 'CI/CD', 'SharePoint'],
        link: 'https://www.google.com/',
    },
]

const Experience = (props: Props) => {
    return (
        <section id="experience">
            <ul className="group/list">
                {experiences.map((exp, index) => (
                    <li key={index} className="mb-12">
                        <div className="relative grid sm:grid-cols-8 ">
                            {/* <div
                                className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition 
                                motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 
                                lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                            ></div> */}
                            <header
                                aria-label={`${exp.startDate} to ${exp.endDate}`}
                                className="text-xs font-semibold uppercase mt-1 sm:col-span-2"
                            >
                                {exp.startDate} - {exp.endDate}
                            </header>
                            <div className="sm:col-span-6">
                                <h3 className="font-medium leading-snug">
                                    <div>
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label={`${exp.roleName} at ${exp.compName} (opens in new tab)`}
                                            className="text-base"
                                        >
                                            {/* <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span> */}
                                            <span className="block">
                                                {exp.roleName}
                                            </span>
                                            <span className="text-slate-500">
                                                {exp.compName}
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal ml-4">
                                    <ul className="list-disc">
                                        {exp.tasks.map((task, i) => (
                                            <li key={i}>{task}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Experience
