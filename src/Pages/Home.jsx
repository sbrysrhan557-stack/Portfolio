import React, { useEffect, useState } from "react";
import ProfileImg from "@/imgs/photo.png";
import { MdDownload } from "react-icons/md";
import { SocialLinks } from "../Data/socialData";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // أول ما الـ ScribbleLoader يخلص (بعد 2.2 ثانية)، نبدأ نشغل أنيميشن الـ Home
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="container relative w-full h-screen md:h-[90vh] flex flex-col justify-evenly md:justify-center xl:justify-evenly items-center overflow-hidden pt-10 px-6">
      
      {/* الاسم الكبير في الخلفية (بيشتغل بس لما الـ isLoaded يبقى true) */}
      <div className={`top-4 text-center z-0 select-none pointer-events-none transition-opacity duration-700 ${isLoaded ? "animate-scale-in" : "opacity-0"}`}>
        <h1 className="text-[7vh] md:text-[9vw] font-black uppercase tracking-wider leading-none text-transparent [-webkit-text-stroke:2px_var(--black-color)] opacity-90">
          SABRY <span className="text-(--black-color)">SALEH</span>
        </h1>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row justify-between items-center mt-8 md:mt-24">
        
        {/* اليسار: الوصف والزرار (بيجي من الشمال) */}
        <div className={`flex flex-col items-start text-left max-w-sm mb-10 md:mb-0 transition-opacity duration-700 ${isLoaded ? "animate-left" : "opacity-0"}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-(--black-color)">
            Frontend Developer-React
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed text-(--main-color)">
            Crafting pixel-perfect, responsive, and lightning-fast web interfaces with modern code.
          </p>
          <a
            href="/public/Sabry_Saleh_Abdel-Azim.pdf"
            download="Sabry_Saleh_Abdel-Azim.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-(--white-color) bg-(--black-color) font-medium text-md transition-all shadow-lg hover:opacity-80 cursor-pointer"
          >
            Download CV <MdDownload size={18} />
          </a>
        </div>

        {/* اليمين: روابط السوشيال ميديا */}
        <div className={`flex flex-col gap-3 mt-0 self-end transition-opacity duration-700 ${isLoaded ? "animate-right" : "opacity-0"}`}>
          {SocialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium transition-all hover:border-(--main-color) shadow-sm bg-(--white-color) text-(--black-color)"
            >
              <span className="text-base text-(--main-color) flex items-center">
                {social.icon}
              </span>
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Photo*/}
      <div className={`absolute z-10 bottom-0 -left-10 md:left-auto w-72 md:w-156 flex justify-center transition-opacity duration-700 ${isLoaded ? "animate-up" : "opacity-0"}`}>
        <img
          src={ProfileImg}
          alt="Sabry Saleh"
          className="w-full h-auto object-cover grayscale contrast-125"
        />
      </div>
    </section>
  );
}

export default Home;