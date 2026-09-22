import React, { useState, useEffect } from "react";
import { MdOutlineArrowOutward, MdMenu, MdClose } from "react-icons/md";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // أول ما الـ ScribbleLoader يخلص (بعد 2.2 ثانية)، نبدأ نشغل أنيميشن ظهور الهيدر
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);
 
    return () => clearTimeout(timer);
  }, []);

  // دالة التنقل السلس وإغلاق القائمة
  const handleScrollToSection = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <header
      className={`w-full py-4 sm:py-6 bg-(--white-color) text-(--main-color) fixed md:sticky top-0 left-0 z-50 shadow-xs transition-opacity duration-700 ${
        isLoaded ? "animate-down opacity-100" : "opacity-0"
      }`}
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* 1. State Indicator / Logo */}
        <div className="flex items-center bg-(--white-color) border border-(--gray-color) shadow-2xs px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse mr-2"></span>
          <span className="text-xs sm:text-sm font-medium">
            Available for New Project
          </span>
        </div>

        {/* 2. Links (تظهر على الشاشات الكبيرة فقط) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium text-(--main-color)">
            <li>
              <a
                href="#about"
                className="cursor-pointer hover:text-(--black-color) transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="cursor-pointer hover:text-(--black-color) transition-colors"
              >
                Work <span className="text-gray-400 text-xs ml-1">[40]</span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="cursor-pointer hover:text-(--black-color) transition-colors"
              >
                Service <span className="text-gray-400 text-xs ml-1">[4]</span>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="cursor-pointer hover:text-(--black-color) transition-colors"
              >
                Experience{" "}
                <span className="text-gray-400 text-xs ml-1">[1y+]</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="cursor-pointer hover:text-(--black-color) transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* 3. Let's Talk Button & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/201020789236"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 cursor-pointer bg-(--main-color) text-(--white-color) px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-(--black-color) transition-all shadow-sm"
          >
            Let's Talk
            <MdOutlineArrowOutward size={15} />
          </a>

          {/* زر القائمة للموبايل (Hamburger Icon) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-(--main-color) p-1.5 focus:outline-hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
          </button>
        </div>
      </div>

      {/* 4. القائمة المنسدلة للهواتف (Mobile Menu) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-(--white-color) border-b border-(--gray-color) shadow-md py-5 px-6 flex flex-col gap-4 md:hidden transition-all">
          <ul className="flex flex-col gap-4 text-base font-medium text-(--main-color)">
            <li>
              <button
                onClick={() => handleScrollToSection("about")}
                className="w-full text-left flex justify-between items-center cursor-pointer hover:text-(--black-color) transition-colors"
              >
                <span>About</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("work")}
                className="w-full text-left flex justify-between items-center cursor-pointer hover:text-(--black-color) transition-colors"
              >
                <span>Work</span>
                <span className="text-gray-400 text-xs">[40]</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("services")}
                className="w-full text-left flex justify-between items-center cursor-pointer hover:text-(--black-color) transition-colors"
              >
                <span>Service</span>
                <span className="text-gray-400 text-xs">[4]</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("experience")}
                className="w-full text-left flex justify-between items-center cursor-pointer hover:text-(--black-color) transition-colors"
              >
                <span>Experience</span>
                <span className="text-gray-400 text-xs">[1y+]</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="w-full text-left flex justify-between items-center cursor-pointer hover:text-(--black-color) transition-colors"
              >
                <span>Contact</span>
              </button>
            </li>
          </ul>

          {/* Let's Talk */}
          <a
            href="https://wa.me/201020789236"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="sm:hidden flex items-center justify-center gap-2 cursor-pointer bg-(--main-color) text-(--white-color) px-5 py-2.5 rounded-full text-sm font-medium hover:bg-(--black-color) transition-all shadow-sm mt-2"
          >
            Let's Talk
            <MdOutlineArrowOutward size5={15} />
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;