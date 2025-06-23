import React from "react";
import iso from "/assets/images/Untitled.png";
import valuesData from "../data/companyValues.json";
export default function CompanyValuesSection() {
  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-2">
          {valuesData.enterprising.heading}
        </h2>
        <p className="text-lg italic mb-1">{valuesData.enterprising.motto}</p>
        <p className="text-xl mb-4">{valuesData.enterprising.tagline}</p>
        <p className="text-gray-700 mb-8">
          {valuesData.enterprising.description}
        </p>
        {valuesData.enterprising.points.map((pt, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-2xl font-semibold mb-1">{pt.title}</h3>
            <p className="text-gray-600">{pt.text}</p>
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-center space-x-8 mb-6">
          <img src={iso} alt="ISO 9001:2015" className="h-16 mx-auto" />
          {/* <img src={iso27001} alt="ISO 27001:2022" className="h-16" />
          <img src={hisPentest} alt="HIS Penetration Testing" className="h-16" /> */}
        </div>
        <h3 className="text-3xl font-bold mb-4 text-center">
          {valuesData.certifications.heading}
        </h3>
        <p className="text-gray-700 mb-6">
          {valuesData.certifications.description}
        </p>
        {valuesData.certifications.items.map((item, i) => (
          <div key={i} className="mb-4">
            <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
            <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
