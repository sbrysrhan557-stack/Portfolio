import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-(--black-color) text-(--white-color) border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* القسم الأيمن / أو الأول: اللوجو أو الاسم ونبذة بسيطة */}
        <div className="text-centert">
          <h3 className="text-2xl font-bold tracking-tight mb-2">Sabry Saleh</h3>
          <p className="text-sm text-gray-400 max-w-sm">
            Frontend Developer building modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* القسم الأوسط: روابط سريعة (Quick Links) */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-(--white-color) transition-colors">About</a>
          <a href="#work" className="hover:text-(--white-color) transition-colors">Work</a>
          <a href="#services" className="hover:text-(--white-color) transition-colors">Services</a>
          <a href="#experience" className="hover:text-(--white-color) transition-colors">Experience</a>
          <a href="#contact" className="hover:text-(--white-color) transition-colors">Contact</a>
        </div>

        {/* القسم الأيسر: أيقونات التواصل الاجتماعي */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sbrysrhan557-stack" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sabry-saleh-24ab8127a" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/5 border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:sbrysrhan557@gmail.com"
            className="w-10 h-10 rounded-xl bg-white/5 border border-gray-800 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition-all"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>

      {/* خط فاصل صغير وحقوق الملكية */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-900 text-center text-xs text-gray-500">
        <p>© {currentYear} Sabry Saleh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;