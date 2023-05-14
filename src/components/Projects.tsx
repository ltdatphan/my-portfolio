import Image from "next/image";
import { useInView } from "react-intersection-observer";
const job_detail = [
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
      className={`h-full w-full md:max-w-3xl mx-auto px-0 pb-10 ${
        inView ? "animate-reveal" : "opacity-0"
      }`}
      id="projects"
      ref={ref}
    >
      <h2 className="text-lg font-semibold mb-3 px-3">Projects</h2>
      <div className="flex flex-col space-y-6">
        {job_detail.map((proj, index) => (
          <a
            href={proj.link}
            referrerPolicy="no-referrer"
            target="_blank"
            key={index}
          >
            <div
              className="group flex flex-col md:flex-row content-center justify-between p-3 hover:bg-stone-100 hover:shadow-xl md:hover:scale-105 hover:transition-all ease-in-out duration-200"
              key={index}
            >
              <div className="w-full md:w-1/4 relative">
                <Image
                  src={proj.imagePath}
                  fill
                  alt={proj.name}
                  className="filter group-hover:brightness-125 object-contain"
                />
              </div>
              <div className="pt-3 md:pt-0 md:w-2/3">
                <div className="font-medium mb-3 group-hover:text-cyan-600">
                  {proj.name}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
          </a>
        ))}
      </div>
    </section>
  );
}
