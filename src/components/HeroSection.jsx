import React from "react";
import V from "/assets/images/V.png";
function HeroSection() {
  return (
    <section id="home" className="py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          CÔNG TY TNHH MTV VASD
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Chuyên cung cấp những giải pháp phần mềm giúp bệnh viện và cơ sở y tế
          phát triển và vận hành một cách mượt mà và hiệu quả nhất
        </p>
        <button
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 shadow-lg animate-fade-in-up animation-delay-600"
        >
          Khám phá dịch vụ
        </button>
      </div>
    </section>
  );
}
export default HeroSection;
