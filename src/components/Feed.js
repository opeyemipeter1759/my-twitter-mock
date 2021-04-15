import React, { useState } from "react";
import "./feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
function Feed() {
  const [posts, setPosts] = useState( [] );
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Opeyemi Peter"
        username="opeyemiPita"
        verified={true}
        text="testing the mock out."
        avatar="https://pbs.twimg.com/profile_images/1354923801318993921/3zauGbYS_400x400.jpg"
        image="https://media.giphy.com/media/xTiTnfRe5cfu5OR08U/source.gif"
      />
    </div>
  );
}

export default Feed;
