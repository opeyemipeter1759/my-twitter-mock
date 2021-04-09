import { Button, Avatar } from "@material-ui/core";
import React from "react";
import "./tweetbox.css";
function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1354923801318993921/3zauGbYS_400x400.jpg" />
          <input placeholder="what's happening?" type="text" />
        </div>
        <input
          className="tweetbox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />

        <Button className="tweetBox__tweetbtn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
