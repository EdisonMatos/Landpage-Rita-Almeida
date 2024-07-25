import React from 'react';
import '../../index.css'; 

const GradientButton = () => {
  return (
    <button className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-black border border-black transition duration-300 ease-out rounded-[50px] group">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 transform -translate-x-full transition duration-700 ease group-hover:translate-x-0"></span>
      <span className="relative z-10">Button </span>
    </button>
  );
};

export default GradientButton;
