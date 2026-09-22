import React from "react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

function About() {
  return (
    <section 
      id="about" 
      className=" w-full min-h-screen py-24 bg-(--black-color) text-(--white-color) px-4 sm:px-6 lg:px-12 flex items-center  transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        
        {/* الجانب الأيسر: عنوان القسم ونبذة تفصيلية (يظهر من اليسار تدريجياً) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-start text-left"
        >
          {/* تاج أو شارة خفيفة */}
          <span className="text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-gray-700 text-gray-300 mb-6 bg-white/5 shadow-2xs">
            About Me
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6 text-(--white-color)">
            Passionate Frontend Developer <br className="hidden sm:block" />
            Building Digital Experiences.
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-8">
            I am a dedicated frontend developer Using React with a strong focus on creating clean, responsive, and high-performance web interfaces. I turn complex ideas into seamless, user-friendly digital products using modern web technologies.
          </p>

          {/* مميزات سريعة مع أيقونات متناسقة مع الداكن */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            <div className="flex items-center gap-2.5 font-medium text-sm text-gray-200">
              <MdCheckCircle className="text-green-400 text-lg shrink-0" />
              Responsive Web Design
            </div>
            <div className="flex items-center gap-2.5 font-medium text-sm text-gray-200">
              <MdCheckCircle className="text-green-400 text-lg shrink-0" />
              Clean & Modern Code
            </div>
            <div className="flex items-center gap-2.5 font-medium text-sm text-gray-200">
              <MdCheckCircle className="text-green-400 text-lg shrink-0" />
              Performance Optimized
            </div>
            <div className="flex items-center gap-2.5 font-medium text-sm text-gray-200">
              <MdCheckCircle className="text-green-400 text-lg shrink-0" />
              UI/UX Best Practices
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-(--black-color) bg-(--white-color) font-medium text-sm transition-all shadow-md hover:bg-gray-200 cursor-pointer"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* الجانب الأيمن: كروت الإحصائيات (يظهر من اليمين للأيسر بتأثير ناعم) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 grid grid-cols-2 gap-4 sm:gap-6"
        >
          
          <div className="p-6 rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-xs flex flex-col justify-between transition-all hover:border-gray-500">
            <span className="text-3xl sm:text-4xl font-black text-(--white-color) mb-2">
              2+
            </span>
            <span className="text-sm font-medium text-gray-400">
              Years of Experience in Web Development
            </span>
          </div>

          <div className="p-6 rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-xs flex flex-col justify-between transition-all hover:border-gray-500">
            <span className="text-3xl sm:text-4xl font-black text-(--white-color) mb-2">
              20+
            </span>
            <span className="text-sm font-medium text-gray-400">
              Successful Projects Completed
            </span>
          </div>

          <div className="p-6 rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-xs flex flex-col justify-between transition-all hover:border-gray-500">
            <span className="text-3xl sm:text-4xl font-black text-(--white-color) mb-2">
              100%
            </span>
            <span className="text-sm font-medium text-gray-400">
              Responsive & Clean Interfaces
            </span>
          </div>

          <div className="p-6 rounded-3xl border border-gray-800 bg-white/5 backdrop-blur-xs flex flex-col justify-between transition-all hover:border-gray-500">
            <span className="text-3xl sm:text-4xl font-black text-(--white-color) mb-2">
              Fast
            </span>
            <span className="text-sm font-medium text-gray-400">
              Performance & Load Times
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;