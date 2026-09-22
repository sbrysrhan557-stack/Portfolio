import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/Data/ExperienceData";
import { MdWork, MdLocationOn, MdDateRange, MdArrowRight } from "react-icons/md";

function Experience() {
  return (
    <section 
      id="experience" 
      className="w-full min-h-screen py-24 bg-(--white-color) text-(--main-color) px-4 sm:px-6 lg:px-12 transition-all"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* عنوان القسم (يظهر من الأعلى بحركة ناعمة) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start mb-20 border-l-4 border-(--black-color) pl-6"
        >
          <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-gray-200 text-gray-500 mb-3 bg-gray-50 shadow-2xs">
            Career History
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-(--black-color)">
            Professional Journey
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl">
            A summary of my roles and contributions in the web development industry.
          </p>
        </motion.div>

        {/* شبكة الكروت (تظهر تدريجياً مع السكرول وبفارق زمني بين كل كارت) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="group col-span-1 lg:col-span-1 p-8 rounded-3xl border border-gray-200 bg-white shadow-sm flex flex-col transition-all duration-300 hover:border-(--black-color) hover:shadow-md"
            >
              {/* ترويسة الكارت (الشركة واللوجو) */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-4 shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-(--black-color) group-hover:bg-(--black-color) group-hover:text-(--white-color) transition-all">
                        <MdWork size={26} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-(--black-color)">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <MdLocationOn size={14} /> {exp.location}
                        </p>
                    </div>
                </div>
              </div>

              {/* المسمى الوظيفي والمدة */}
              <div className="mb-6 grow">
                <p className="text-lg font-semibold text-(--main-color) mb-2">
                  {exp.role}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                  <MdDateRange size={14} />
                  {exp.duration}
                </span>
              </div>

              {/* وصف المهام */}
              <ul className="space-y-3 text-sm text-gray-600 list-inside">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed flex items-start gap-2">
                    <MdArrowRight size={18} className="text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;