"use client";
import { useInView } from "react-intersection-observer";
const job_detail = [
  {
    start_date: "Sep 2021",
    end_date: "Jun 2022",
    title: "Software Development Intern",
    company_name: "AviaPro Consulting Inc.",
    desc: "In charge of making data conversion scripts using VBA and Python. Enhanced Shopify storefront, created an Chrome extension and testing scripts using JavaScript. Deployed license server on AWS to automate the distribution of keys for vendor's software.",
    link: "https://aviaproconsulting.ca",
  },
  {
    start_date: "May 2021",
    end_date: "Aug 2021",
    title: "Software Development – Co-op student",
    company_name:
      "The Colleges of Applied Arts and Technology (CAAT) Pension Plan",
    desc: "Responsible for implementing unit testing framework for the platform used by pension members. Wrote tests using C#, Moq, xUnit and increased code coverage by 20%. Intergrate into CI/CD pipeline on Azure DevOps.",
    link: "https://www.caatpension.ca/",
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-15% 0%",
  });

  return (
    <section
      className={`h-[100vh] md:h-[60vh] w-full md:max-w-3xl mx-auto px-0 py-5 relative overflow-hidden ${
        inView ? "animate-reveal" : "opacity-0"
      }`}
      id="experience"
      ref={ref}
    >
      <div className="absolute top-40 md:top-15 -left-10 md:left-40 h-[28rem] w-[28rem] bg-gradient-to-bl from-teal-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10"></div>
      <h2 className="text-lg font-semibold px-3">Experience</h2>
      <div className="flex flex-col space-y-6">
        {job_detail.map((job, index) => (
          <div
            className="group flex flex-row content-center justify-between hover:transition-all ease-in-out duration-100 p-3 hover:bg-opacity-40 hover:backdrop-blur-lg hover:bg-teal-50 rounded hover:drop-shadow-xl border-2 border-transparent hover:border-stone-100"
            key={index}
          >
            <div className="w-1/4">
              {job.start_date} -{" "}
              <span className="whitespace-nowrap">{job.end_date}</span>
            </div>
            <div className="w-2/3">
              <div className="font-medium mb-3 group-hover:text-cyan-600 group-hover:underline">
                <a
                  href={job.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  key={index}
                >
                  {job.title} <br />{" "}
                  <span className="font-light">{job.company_name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-3 w-3 inline ml-1 relative bottom-[0.08em] group-hover:fill-cyan-600"
                  >
                    <path d="M352 0a32.1 32.1 0 0 0-22.7 54.7L370.7 96 201.4 265.4a32 32 0 0 0 45.3 45.3L416 141.3l41.4 41.4a32 32 0 0 0 54.7-22.7V32a32 32 0 0 0-32-32H352zM80 32a80 80 0 0 0-80 80v320a80 80 0 0 0 80 80h320a80 80 0 0 0 80-80V320a32 32 0 1 0-64 0v112a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V112a16 16 0 0 1 16-16h112a32 32 0 1 0 0-64H80z" />
                  </svg>
                </a>
              </div>
              <p>{job.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
