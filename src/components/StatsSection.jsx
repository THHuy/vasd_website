import React from "react";
import statsData from "../data/stats.json";
export default function StatsSection() {
  const { hospitals, patients, years, satisfaction } = statsData;
  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {hospitals}+
            </div>
            <div className="text-gray-600">Bệnh viện tin dùng</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {patients.toLocaleString()}+
            </div>
            <div className="text-gray-600">Bệnh nhân phục vụ</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {years}
            </div>
            <div className="text-gray-600">Năm kinh nghiệm</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {satisfaction}%
            </div>
            <div className="text-gray-600">Khách hàng hài lòng</div>
          </div>
        </div>
      </div>
    </section>
  );
}
