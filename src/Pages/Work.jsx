import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/Data/WorkData"; // تأكد من مطابقة مسار الملف عندك

function Work() {
  return (
    <section
      id="work"
      className=" w-full min-h-screen py-24 bg-(--white-color) text-(--main-color) px-4 sm:px-6 lg:px-12  shadow-[0_-20px_40px_rgba(0,0,0,0.15)] transition-all"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* عنوان القسم (يظهر من الأعلى بحركة ناعمة) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start mb-16 border-l-4 border-(--black-color) pl-6"
        >
          <span className="text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 mb-4 bg-white shadow-2xs">
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-(--black-color)">
            Featured Works & Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl">
            A selection of recent projects built with modern web technologies,
            focusing on performance, responsiveness, and clean design.
          </p>
        </motion.div>

        {/* شبكة المشاريع (البطاقات تظهر تدريجياً مع السكرول) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-gray-300"
            >
              <div>
                {/* حاوية الصورة (حجم أصغر وأنيق) */}
                <div className="relative overflow-hidden h-44 sm:h-48 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* محتوى الكارت */}
                <div className="p-5 sm:p-6">
                  {/* رأس الكارت */}
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h3 className="text-xl font-bold text-(--black-color) group-hover:text-(--main-color) transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-(--black-color) shrink-0 transition-all duration-300 group-hover:bg-(--black-color) group-hover:text-(--white-color)"
                      aria-label="View Project"
                    >
                      <MdOutlineArrowOutward size={16} />
                    </a>
                  </div>

                  {/* وصف المشروع */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* التقنيات المستخدمة */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-(--black-color) border border-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* أسفل الكارت (Links) */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-3 bg-gray-50/50 border-t border-gray-100">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-(--black-color) hover:underline"
                >
                  Live Preview <MdOutlineArrowOutward size={14} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-(--black-color) transition-colors"
                >
                  <FaGithub size={14} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Work;