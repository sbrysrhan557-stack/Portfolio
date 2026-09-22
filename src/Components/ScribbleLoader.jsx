import React, { useEffect, useState } from "react";

function ScribbleLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // بعد 1.8 ثانية نبدأ حركة الخروج (الانزلاق لفوق)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1800);

    // بعد ما خلصت حركة الانزلاق (كمان 700 ملي ثانية)، نشيل اللودينج تماماً من الـ DOM
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 bg-(--black-color) text-(--white-color) flex items-center justify-center overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      
      {/* شبكة "الشغبطة" والخطوط العشوائية المتحركة في الخلفية */}
      <div className={`absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 ${isExiting ? "opacity-0 scale-105" : ""}`}>
        {/* خط عشوائي 1 */}
        <svg className="absolute top-10 left-10 w-48 h-48 animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10,10 Q50,90 90,10 T10,90" />
        </svg>

        {/* دوائر فوضوية */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-dashed border-white animate-ping opacity-40"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 rounded-full border border-white animate-pulse"></div>

        {/* خطوط طائرة عشوائية */}
        <div className="absolute top-1/2 left-10 w-72 h-0.5 bg-linear-to-r from-transparent via-white to-transparent animate-bounce"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-0.5 bg-linear-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>

      {/* النص الرئيسي في المنتصف مع حركات شغبطة واهتزاز */}
      <div className={`relative z-10 text-center flex flex-col items-center transition-all duration-500 ${isExiting ? "scale-90 opacity-0" : ""}`}>
        <div className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2 animate-pulse">
          // Loading Chaos...
        </div>
        <h1 className="text-4xl sm:text-7xl font-black tracking-tighter uppercase animate-bounce">
          SABRY <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-400 to-gray-600">SALEH</span>
        </h1>
        <div className="mt-4 flex gap-2">
          <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-gray-600 rounded-full animate-pulse"></span>
        </div>
      </div>

    </div>
  );
}

export default ScribbleLoader;