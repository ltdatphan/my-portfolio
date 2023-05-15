"use client";
import Link from "next/link";
import { EventHandler, MouseEventHandler } from "react";
export default function NavBar() {
  const handleScroll: MouseEventHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollTo
    var element = document.getElementById(targetId);
    var headerOffset = 90;
    var elementPosition = element?.getBoundingClientRect().top || 0;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <nav id="header" className="sticky w-full z-10 top-0">
      <div className="w-full h-14 md:h-20 bg-white justify-center border-b border-gray-200">
        <div className="h-full w-full md:max-w-3xl mx-auto px-4">
          <div className="flex justify-between h-full items-center">
            <span className="text-md md:text-lg font-bold">David Phan</span>
            <div className="flex h-full ml-4 items-center space-x-3 md:space-x-8 font-regular text-grey-800 font-sans">
              <Link href="#experience" onClick={handleScroll}>
                Experience
              </Link>
              <Link href="#projects" onClick={handleScroll}>
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
