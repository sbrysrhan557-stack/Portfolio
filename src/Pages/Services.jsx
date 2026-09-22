import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/Data/ServiceData";
import { MdOutlineArrowOutward } from "react-icons/md";

function Services() {
  return (
    <section 
      id="services" 
      className=" w-full min-h-screen py-24 bg-(--black-color) text-(--white-color) px-4 sm:px-6 lg:px-12 flex items-center  transition-all"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* عنوان القسم (يظهر من الأعلى بحركة ناعمة) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start mb-16 border-l-4 border-(--white-color) pl-6"
        >
          <span className="text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-gray-700 text-gray-300 mb-4 bg-white/5 shadow-2xs">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-(--white-color)">
            Services & Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mt-3 max-w-2xl opacity-90">
            I help businesses and individuals bring their ideas to life through modern frontend technologies and clean, user-focused design.
          </p>
        </motion.div>

        {/* شبكة الخدمات (الكروت تظهر تدريجياً مع السكرول) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="group p-8 rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-xs flex flex-col justify-between transition-all duration-300 hover:border-gray-500 hover:bg-white/10"
            >
              <div>
                {/* رأس الكارت (الأيقونة والرقم) */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-gray-800 flex items-center justify-center text-(--white-color) transition-all group-hover:bg-(--white-color) group-hover:text-(--black-color)">
                    {service.icon}
                  </div>
                  <span className="text-2xl font-black text-gray-600 group-hover:text-gray-300 transition-colors">
                    0{service.id}
                  </span>
                </div>

                {/* عنوان الخدمة */}
                <h3 className="text-2xl font-bold text-(--white-color) mb-3">
                  {service.title}
                </h3>

                {/* وصف الخدمة */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 opacity-90">
                  {service.description}
                </p>
              </div>

              {/* أسفل الكارت (رابط تواصل سريع) */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center">
                <a
                  href="https://wa.me/201020789236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 group-hover:text-(--white-color) transition-colors"
                >
                  Start a Project <MdOutlineArrowOutward size={16} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;