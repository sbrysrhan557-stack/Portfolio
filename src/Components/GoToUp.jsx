import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function GoToUp() {
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة مكان السكرول في الصفحة عشان نظهر أو نخفي الزرار
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // دالة الصعود لأعلى الصفحة بسلاسة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Go to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-black text-white border border-white/20 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:text-black hover:border-black transition-all duration-300 group cursor-pointer animate-fade-in"
        >
          <FaArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
}

export default GoToUp;