import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icons }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icons />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
