import { sanityFetch } from '@/sanity/lib/fetch'
import { PortableText } from 'next-sanity'
import { Key } from 'react'
import { format } from 'date-fns'
import { IExperience } from '@/sanity/lib/interfaces'

const QUERY = `*[_type == "experience"]{_id, role, company, url, startDate, endDate, content, tags}`

export default async function ExperienceDynamic() {
    const experiences = await sanityFetch<IExperience[]>({ query: QUERY })

    return (
        <section
            className={`h-max w-full md:max-w-3xl mx-auto px-4 py-0 relative overflow-hidden`}
            id="experience"
            aria-label="Work experience"
        >
            <h2 className={`text-xl font-semibold mb-12`}>Experience</h2>
            <ul className="group/list">
                {experiences.map((job, index) => (
                    <li className={`mb-16`} key={index}>
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
                                aria-label={`${format(new Date(job.startDate), 'MMM yyyy')} to ${job.endDate ? format(new Date(job.endDate), 'MMM yyyy') : 'Current'}`}
                            >
                                <span className="uppercase text-sm font-semibold text-neutral-500">
                                    {format(
                                        new Date(job.startDate),
                                        'MMM yyyy'
                                    )}{' '}
                                    -{' '}
                                    <span className="whitespace-nowrap">
                                        {job.endDate
                                            ? format(
                                                  new Date(job.endDate),
                                                  'MMM yyyy'
                                              )
                                            : 'Current'}
                                    </span>
                                </span>
                            </header>
                            <div className="md:col-span-6 z-10">
                                <a
                                    href={job.url}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    key={index}
                                    className="font-medium hover:text-teal-500 dark:hover:text-teal-400
                                    transition-colors duration-200 ease-in-out motion-reduce:transition-none"
                                >
                                    <span className="block">{job.role}</span>
                                    <span className="font-semibold text-neutral-500">
                                        {job.company}
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
                                <div className="prose mt-2 dark:text-pale-white">
                                    <PortableText value={job.content} />
                                </div>
                                <ul
                                    className="flex flex-wrap gap-2 mt-4"
                                    aria-label="Technologies used"
                                >
                                    {job.tags.map((tag: string, i: Key) => (
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
