import React from "react";

export default function Button({label, disabled, children}) {
  return (
    <button className={`
    inline-flex items-center px-4 py-2
    text-white text-base  font-bold
    bg-blue-600 
    border border-transparent rounded-sm
    
    hover:bg-blue-500 hover:shadow-sm 
    
    disabled:bg-gray-200 disabled:hover:shadow-none disabled:cursor-not-allowed disabled:text-gray-400

    focus:outline-none focus:ring-2 focus:ring-offset-2 
    `} disabled={disabled} >{label}{children}</button>
  );
}