import React from "react";
import acronym from "../data/acronym.json";

// Để bundler hiểu được đường dẫn img, import động:

function AcronymSection() {
  return (
    <div className="flex items-center justify-center space-x-4 py-8">
      {acronym.map((item, idx) => {
        const src = item.img;
        return (
          <div key={idx} className="flex items-center space-x-1">
            <img src={src} alt={item.letter} className="h-12 w-12" />
            <span className="text-2xl font-semibold">{item.rest}</span>
          </div>
        );
      })}
    </div>
  );
}
export default AcronymSection;
