import React from "react";
import './SidebarOption.css'

function SidebarOption({ text, Icons }) {
  return (
    <div className="sidebarOption">
      <Icons />
      <h1>{text}</h1>
    </div>
  );
}

export default SidebarOption;
