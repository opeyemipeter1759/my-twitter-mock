import React from "react";
import "./widgets.css";
import SearchIcon from @materialcore
import {
  TwitterTimeLineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
      </div>
    </div>
  );
}

export default Widgets;
