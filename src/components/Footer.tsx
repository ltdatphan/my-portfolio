import Socials from "./Socials";

export default function Footer() {
  return (
    <footer id="header" className="w-full z-10 top-0">
      <div className="w-full h-14 md:h-20 bg-white justify-center border-t border-gray-200">
        <div className="h-full w-full md:max-w-3xl mx-auto px-4">
          <div className="flex justify-between h-full items-center">
            &copy; 2023 - David Phan <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
