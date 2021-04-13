import React from "react";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1381628597421625346"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Oyoaffairs"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://web.facebook.com/profile.php?id=100007776018649"}
          options={{ text: "#kindly find me here", via: "OpeyemiPeter" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
