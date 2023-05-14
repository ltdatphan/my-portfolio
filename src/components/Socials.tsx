export default function Socials() {
  return (
    <div className="flex flex-row w-auto content-center space-x-6 leading-1">
      <a
        href="mailto:ltdatphan@gmail.com"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="Email link"
      >
        <i
          className="fa-solid fa-at fa-lg hover:text-blue-500"
          rel="preload"
        ></i>
      </a>
      <a
        href="https://github.com/ltdatphan"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="Github link"
      >
        <i
          className="fa-brands fa-github fa-lg hover:text-blue-500"
          rel="preload"
        ></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ltdatphan/"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="LinkedIn link"
      >
        <i
          className="fa-brands fa-linkedin fa-lg hover:text-blue-500"
          rel="preload"
        ></i>
      </a>
    </div>
  );
}
