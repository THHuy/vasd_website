import React from "react";
import servicesData from "../data/services.json";
import {
  Hospital,
  Users,
  Shield,
  Smartphone,
  Headphones,
  RefreshCw,
  BarChart3,
} from "lucide-react";
const iconMap = {
  hospital: <Hospital className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  headphones: <Headphones className="w-6 h-6" />,
  refresh: <RefreshCw className="w-6 h-6" />,
  chart: <BarChart3 className="w-6 h-6" />,
};
export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp các giải pháp công nghệ tiên tiến...
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[s.icon] || <Hospital className="w-6 h-6" />}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {s.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {s.description}
              </p>
              <ul className="space-y-2 mb-4">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {f}
                  </li>
                ))}
              </ul>
              {s.applications && (
                <>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Ứng dụng:
                  </h4>
                  <ul className="list-disc list-inside mb-4">
                    {s.applications.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </>
              )}
              {s.callToAction && (
                <p className="text-blue-600 font-semibold">{s.callToAction}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
