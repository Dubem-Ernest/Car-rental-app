import React from "react";
import { Link } from "react-router-dom";

const FooterContent = ({ content,header }) => {
 
  return (
    <div>
      <h2 className="font-medium pb-4">{header}</h2>

      <ul className="flex flex-col gap-3">
        {content.map((item, index) => (
          <Link key={index}><li >{item}</li></Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterContent;
