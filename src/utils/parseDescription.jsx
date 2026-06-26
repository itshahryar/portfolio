import React from "react";
// Parse description to convert **word** to bold purple spans
const parseDescription = (text) => {
  if (!text) return text;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // Odd indices are the bolded parts
      return <span key={index} className="text-[#915EFF] font-semibold">{part}</span>;
    }
    return part;
  });
};

export default parseDescription;
