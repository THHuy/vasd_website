import React from "react";
import { MapPin, Phone, Globe } from "lucide-react";
import contactData from "../data/contact.json";
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold">{contactData.companyName}</h2>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-blue-400" />
          <span>{contactData.address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-blue-400" />
          <span>
            Điện thoại: {contactData.phone} — Hotline: {contactData.hotline}
          </span>
        </div>
        <div className="flex items-center">
          <Globe className="w-5 h-5 mr-2 text-blue-400" />
          <span>Email: {contactData.email}</span>
        </div>
        <div>
          <strong>Mã số thuế:</strong> {contactData.taxCode}
        </div>
      </div>
    </section>
  );
}
