import React, { useState, useEffect } from "react";
import { 
  MdHome, 
  MdPerson, 
  MdWork, 
  MdDesignServices, 
  MdTimeline, 
  MdEmail 
} from "react-icons/md";

const sections = [
  { id: "home", icon: <MdHome size={20} />, label: "Home" },
  { id: "about", icon: <MdPerson size={20} />, label: "About" },
  { id: "work", icon: <MdWork size={20} />, label: "Work" },
  { id: "services", icon: <MdDesignServices size={20} />, label: "Services" },
  { id: "experience", icon: <MdTimeline size={20} />, label: "Experience" },
  { id: "contact", icon: <MdEmail size={20} />, label: "Contact" },
];

function SideNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => { // تم تصحيحها لتكون sections في التنظيف تفادياً لأي خطأ
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3 bg-white/75 backdrop-blur-md border border-black/20 shadow-2xl rounded-full py-3 px-1">
      {sections.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative flex items-center justify-center p-2 cursor-pointer"
            aria-label={item.label}
          >
            {/* اسم السكشن يظهر عند الوقوف بالماوس (Hover) */}
            <span className="absolute right-full mr-4 px-3 py-1 bg-white text-black text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-md">
              {item.label}
            </span>

            {/* الأيقونة مع تأثير التفعيل */}
            <span
              className={`transition-all duration-300 flex items-center justify-center ${
                isActive
                  ? "text-black scale-125 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]"
                  : "text-gray-500 group-hover:text-black"
              }`}
            >
              {item.icon}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export default SideNav;