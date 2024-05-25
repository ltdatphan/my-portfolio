import Socials from './Socials'

export default function Footer() {
    return (
        <footer id="header" className="w-full z-10 top-0">
            <div className="w-full h-14 md:h-20 bg-pale-white justify-center border-t border-gray-200 dark:bg-dark-grey dark:text-pale-white dark:border-gray-700">
                <div className="h-full w-full md:max-w-3xl mx-auto px-4">
                    <div className="flex justify-between h-full items-center">
                        &copy; 2024 - David Phan <Socials />
                    </div>
                </div>
            </div>
        </footer>
    )
}
