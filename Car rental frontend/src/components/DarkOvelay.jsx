// Overlay.js or within your component
import React from "react";

const DarkOverlay = ({ children,toggleOverlay,isVisible }) => {
  return (
    <div 
    className={`fixed h-screen inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ${isVisible ? "flex" : "hidden"}`}
    onClick={toggleOverlay}
  >
    {children}
  </div>
  );
};

export default DarkOverlay;
