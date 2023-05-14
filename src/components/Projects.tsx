import Image from "next/image";
import { useInView } from "react-intersection-observer";
const jobs_detail = [
  {
    name: "MedSuite",
    desc: "Hospital Management System used to store patients' info, book appointments, and keep track of hospital's medical supplies. Uses a NextJS front-end and Firebase for back-end. Worked in an Agile environment and utilized tools such as Jira, Github, Zoom, Discord to collaborate.",
    imagePath: "/medsuite.webp",
    technologies: ["NextJS", "Firebase", "Bootstrap", "Netlify"],
    link: "https://github.com/ltdatphan/Hospital-Management-System",
  },
  {
    name: "Smart Detection",
    desc: "Face detection app that utilize Clarifai's AI model via their API. Created a responsive front-end using React. For back-end, utilize Express and PostgreSQL authenticate + store user's credentials. Front-end hosted on Github Pages. Back-end hosted on Heroku.",
    imagePath: "/smart-detection.webp",
    technologies: ["React", "Express", "PostgreSQL", "Github Pages", "Heroku"],
    link: "https://github.com/ltdatphan/smart-detection",
  },
  {
    name: "Wikipedia Search Engine",
    desc: "Created a search engine to search a subset of 10000 Wikipedia articles. Trained search model in Python using various algorithms to help predict relevant topics to provide results that best matches user's needs. Front-end is a small React app hosted on Netlify. Back-end is a Flask app hosted on Render.",
    imagePath: "/search-engine.webp",
    technologies: ["React", "Flask", "Netlify", "Render"],
    link: "https://github.com/ltdatphan/search-engine",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-5% 0%",
  });

  return (
    <section
      className={`h-full w-full md:max-w-3xl mx-auto px-0 pb-10 ${
        inView ? "animate-reveal" : "opacity-0"
      }`}
      id="projects"
      ref={ref}
    >
      <h2 className="text-lg font-semibold mb-3 px-3">Projects</h2>
      <div className="flex flex-col space-y-6">
        {jobs_detail.map((proj, index) => (
          <div
            className="group flex flex-col md:flex-row content-center justify-between p-3 hover:bg-stone-100 hover:shadow-xl md:hover:scale-105 hover:transition-all ease-in-out duration-200"
            key={index}
          >
            <div className="w-full md:w-1/4 relative">
              <a href={proj.link} referrerPolicy="no-referrer" target="_blank">
                <Image
                  src={proj.imagePath}
                  fill
                  alt={proj.name}
                  className="filter group-hover:brightness-125 object-contain"
                />
              </a>
            </div>
            <div className="pt-3 md:pt-0 md:w-2/3">
              <div className="font-medium mb-3 group-hover:text-cyan-600 group-hover:underline">
                <a
                  href={proj.link}
                  referrerPolicy="no-referrer"
                  target="_blank"
                >
                  {proj.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-3 w-3 inline ml-1 relative bottom-[0.08em] group-hover:fill-cyan-600"
                  >
                    <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                  </svg>
                </a>
              </div>
              <p>{proj.desc}</p>
              <div className="flex flex-row pt-3 flex-wrap space-x-1">
                {proj.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-200 text-green-800 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
