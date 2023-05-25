"use client";
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
    rootMargin: "-10% 0%",
  });

  return (
    <section
      className={`h-full w-full md:max-w-3xl mx-auto px-0 pb-10 overflow-hidden relative ${
        inView ? "animate-reveal" : "opacity-0"
      }`}
      id="projects"
      ref={ref}
    >
      <div className="absolute top-60 md:top-15 -right-40 md:right-20 h-[28rem] w-[28rem] bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10"></div>

      <h2 className="text-lg font-semibold px-3">Projects</h2>
      <div className="flex flex-col space-y-6">
        {jobs_detail.map((proj, index) => (
          <div
            className="group flex flex-col md:flex-row content-center justify-between hover:transition-all ease-in-out duration-200 p-3 hover:bg-amber-50 hover:bg-opacity-40 hover:backdrop-blur-lg rounded hover:drop-shadow-xl border-2 border-transparent hover:border-stone-100"
            key={index}
          >
            <div className="w-full md:w-1/4 relative h-60 md:h-auto">
              <a href={proj.link} referrerPolicy="no-referrer" target="_blank">
                <Image
                  src={proj.imagePath}
                  fill
                  alt={proj.name}
                  className="filter group-hover:saturate-200 group-hover:brightness-110 object-contain"
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
                    <path d="M352 0a32.1 32.1 0 0 0-22.7 54.7L370.7 96 201.4 265.4a32 32 0 0 0 45.3 45.3L416 141.3l41.4 41.4a32 32 0 0 0 54.7-22.7V32a32 32 0 0 0-32-32H352zM80 32a80 80 0 0 0-80 80v320a80 80 0 0 0 80 80h320a80 80 0 0 0 80-80V320a32 32 0 1 0-64 0v112a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V112a16 16 0 0 1 16-16h112a32 32 0 1 0 0-64H80z" />
                  </svg>
                </a>
              </div>
              <p>{proj.desc}</p>
              <div className="flex flex-row flex-wrap text-sm gap-2 mt-3">
                {proj.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-200 text-green-800 rounded-full"
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
