import React, { useContext } from "react";
import { AppContext } from "../../context/store";

function Footer() {
  const { state } = useContext(AppContext);
  return (
    <div className="bg-light text-center fixed-bottom p-3">
      <p>&copy; 2023 | COMP2112 | First React App</p>
      <p>
        Total Session Clicks: <span id="sessionCounter">{state.count}</span>
      </p>
    </div>
  );
}

export default Footer;
