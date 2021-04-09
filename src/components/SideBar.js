import React from "react";
import "./SideBar";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SidebarOption from "./SidebarOption";

function SideBar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption Icons={HomeIcon} text="Home" />
      <SidebarOption Icons={SearchIcon} text="Explore" />
      <SidebarOption Icons={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icons={MailOutlineIcon} text="Messages" />
      <SidebarOption Icons={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icons={ListAltIcon} text="Lists" />
      <SidebarOption Icons={PermIdentityIcon} text="Profile" />

      <SidebarOption Icons={MoreHorizIcon} text="More" />
    </div>
  );
}

export default SideBar;
