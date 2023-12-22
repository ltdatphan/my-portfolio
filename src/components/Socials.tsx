export default function Socials() {
    return (
        <div
            className="flex flex-row w-max content-center space-x-6 leading-1"
            aria-label="Social Media Links"
        >
            <a
                href="mailto:ltdatphan@gmail.com"
                referrerPolicy="no-referrer"
                target="_blank"
                aria-label="Email link (Open in new tab)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 hover:fill-teal-500 dark:hover:fill-teal-300 dark:fill-pale-white"
                >
                    <path d="M256 64a192 192 0 0 0 0 384 32 32 0 1 1 0 64 256 256 0 1 1 256-256v32a96 96 0 0 1-169.2 62.1 128 128 0 1 1-12.1-198A32 32 0 0 1 384 176v112a32 32 0 1 0 64 0v-32c0-106-86-192-192-192zm64 192a64 64 0 1 0-128 0 64 64 0 1 0 128 0z" />
                </svg>
            </a>
            <a
                href="https://github.com/ltdatphan"
                referrerPolicy="no-referrer"
                target="_blank"
                aria-label="Github link (Open in new tab)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="w-6 h-6 hover:fill-teal-500 dark:hover:fill-teal-300 dark:fill-pale-white"
                >
                    <path d="M166 397c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3 3-1 6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2-1-5-4-5c-3-1-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zM245 8A240 240 0 0 0 0 252c0 111 70 206 170 239 12 2 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 24 2 38 26 22 38 59 27 73 21 2-16 9-28 16-34-56-6-112-14-112-111 0-27 7-41 23-59-2-6-11-33 3-67 21-7 69 27 69 27a237 237 0 0 1 126 0s48-34 69-27c13 34 5 61 2 67 16 18 26 32 26 59 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 0 0 168-239C496 113 384 8 245 8zM97 353c-1 1-1 3 1 5 1 2 4 2 5 1s1-3-1-5c-1-2-4-2-5-1zm-11-8 3 4c1 1 3 0 4-1s0-3-2-4-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z" />
                </svg>
            </a>
            <a
                href="https://www.linkedin.com/in/ltdatphan/"
                referrerPolicy="no-referrer"
                target="_blank"
                aria-label="LinkedIn link (Open in new tab)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 hover:fill-teal-500 dark:hover:fill-teal-300 dark:fill-pale-white"
                >
                    <path d="M416 32H31.9A32.1 32.1 0 0 0 0 64.3v383.4A32.1 32.1 0 0 0 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3A32.2 32.2 0 0 0 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243a38.5 38.5 0 1 1 0-77 38.5 38.5 0 0 1 0 77zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
            </a>
        </div>
    )
}
