import React from "react";
import "../assets/css/sidebar.css";
import { FiberManualRecord } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Baljeet</h2>
        <h3>
          <FiberManualRecord />
          Jangra
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
