import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MdOutlineEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // استبدل القيم دي بالـ IDs الحقيقية من حسابك على EmailJS
    const SERVICE_ID = "service_81y7hkp"; 
    const TEMPLATE_ID = "template_animqcj";
    const PUBLIC_KEY = "EKa3LswW2Gwv5Tbvb";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          alert("Message sent successfully! 🎉");
          formRef.current.reset(); 
      }, (error) => {
          alert("Failed to send message, check console.");
          console.log("EmailJS Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen py-24 bg-(--white-color) text-(--main-color) px-4 sm:px-6 lg:px-12 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* الجانب الأيسر: معلومات التواصل والنص (يظهر من اليسار) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start mb-15 border-l-4 border-(--black-color) pl-6">
            <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-gray-300 text-(--main-color) mb-4 bg-gray-100 shadow-2xs">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-(--black-color) mb-6">
              Let's Work Together!
            </h2>
            <p className="text-base sm:text-lg text-(--main-color) mt-3 max-w-2xl opacity-80">
              Have a project in mind, a question, or just want to connect? Feel
              free to reach out using the form or contact details below. I'm
              always excited to discuss new opportunities.
            </p>
          </div>

          {/* معلومات التواصل المباشرة */}
          <div className="space-y-8 w-full">
            <a
              href="mailto:sbrysrhan557@gmail.com"
              className="flex items-center gap-5 group p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-(--main-color) transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-(--main-color) group-hover:bg-(--black-color) group-hover:text-(--white-color) transition-all">
                <MdOutlineEmail size={28} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 mb-1">
                  Email Me
                </span>
                <span className="block text-lg font-semibold text-(--black-color) group-hover:opacity-80 transition-colors">
                  sbrysrhan557@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/201020789236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-(--main-color) transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-(--main-color) group-hover:bg-(--black-color) group-hover:text-(--white-color) transition-all">
                <MdPhone size={28} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 mb-1">
                  Call / WhatsApp
                </span>
                <span className="block text-lg font-semibold text-(--black-color) group-hover:opacity-80 transition-colors">
                  +20 102 078 9236
                </span>
              </div>
            </a>

            <div className="flex items-center gap-5 group p-4 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all">
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-(--main-color)">
                <MdLocationOn size={28} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 mb-1">
                  Location
                </span>
                <span className="block text-lg font-semibold text-(--black-color)">
                  Tanta, Egypt
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* الجانب الأيمن: نموذج التواصل (يظهر من اليمين بتأخير بسيط) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full p-10 rounded-3xl border border-gray-200 bg-white shadow-sm"
        >
          <h3 className="text-2xl font-bold text-(--black-color) mb-8">
            Send Me a Message
          </h3>
          
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-(--main-color) mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Sabry Saleh"
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-(--black-color) placeholder:text-gray-400 focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color) transition-all outline-hidden"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-(--main-color) mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="sabry@email.com"
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-(--black-color) placeholder:text-gray-400 focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color) transition-all outline-hidden"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-(--main-color) mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="title"
                placeholder="Project Inquiry"
                className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-(--black-color) placeholder:text-gray-400 focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color) transition-all outline-hidden"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-(--main-color) mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Hello Sabry, I'd like to discuss... "
                className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-(--black-color) placeholder:text-gray-400 focus:ring-2 focus:ring-(--main-color) focus:border-(--main-color) transition-all outline-hidden resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-(--white-color) bg-(--black-color) font-semibold text-lg transition-all shadow-lg hover:opacity-90 cursor-pointer"
            >
              Send Message <MdSend size={20} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;