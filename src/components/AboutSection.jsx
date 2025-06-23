import React from "react";
import aboutData from "../data/about.json";
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-6">
          {aboutData.companyIntro.title}
        </h2>
        {aboutData.companyIntro.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 text-gray-700">
            {p}
          </p>
        ))}
      </div>
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-xl text-white">
        <h3 className="text-3xl font-semibold mb-4">
          {aboutData.anniversary.title}
        </h3>
        <p className="italic mb-6">{aboutData.anniversary.subtitle}</p>
        {aboutData.anniversary.paragraphs.map((p, i) => (
          <p key={i} className="mb-3">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
