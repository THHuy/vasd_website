import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logoCompany from "/public/assets/images/logo_company.png";
const links = [
  { label: "Trang Chủ", target: "home" },
  { label: "Thống Kê", target: "stats" },
  { label: "Dịch Vụ", target: "services" },
  { label: "Về Chúng Tôi", target: "about" },
  { label: "Giá Trị", target: "values" },
  { label: "Liên Hệ", target: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b-4 border-blue-600">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Hotline: 0396116119</span>
            </span>
            <span className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@vasd.com.vn</span>
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>TP. Cần Thơ</span>
          </div>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12  rounded-xl flex items-center justify-center">
            <img src={logoCompany} alt="logo" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">VASD</h1>
            <p className="text-sm text-gray-600">Healthcare Solutions</p>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white px-4 pb-4">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="block w-full text-left py-2"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
export default Navbar;
