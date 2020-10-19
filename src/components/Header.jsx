import React from "react";
import "../assets/css/header.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import { useStateValue } from "../utils/StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTime />
      </div>
      <div className="header__search">
        <Search />
        <input type="text" placeholder="Search Channels" />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
