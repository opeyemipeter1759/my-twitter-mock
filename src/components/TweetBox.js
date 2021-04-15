import { Button, Avatar } from "@material-ui/core";
import React, { useState } from "react";
import dataStore from "./firebase";
import "./tweetbox.css";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    dataStore.collection("post").add({
      displayName: "Peter Rald",
      username: "peterrald001",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1354923801318993921/3zauGbYS_400x400.jpg" />
          <input
            className="tweetbox__textInput"
            placeholder="what's happening?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetbox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetbtn"
        >
          Tweet
        </Button>
        
      </form>
    </div>
  );
}

export default TweetBox;
