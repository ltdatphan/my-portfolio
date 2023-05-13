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
    rootMargin: "10% 0%",
  });

  return (
    <section
      className={`h-full w-full md:max-w-3xl mx-auto px-0 py-10 ${
        inView ? "animate-reveal" : "opacity-0"
      }`}
      id="experience"
      ref={ref}
    >
      <h2 className="text-lg font-semibold mb-3 px-3">Experience</h2>
      <div className="flex flex-col space-y-6">
        {job_detail.map((job, index) => (
          <a
            href={job.link}
            target="_blank"
            referrerPolicy="no-referrer"
            key={index}
          >
            <div
              className="group flex flex-row content-center justify-between hover:bg-stone-100 hover:shadow-xl md:hover:scale-105 hover:transition-all ease-in-out duration-200 p-3"
              key={index}
            >
              <div className="w-1/4">
                {job.start_date} -{" "}
                <span className="whitespace-nowrap">{job.end_date}</span>
              </div>
              <div className="w-2/3">
                <div className="font-medium mb-3 group-hover:text-cyan-600">
                  {job.title} • {job.company_name}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <p>{job.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
