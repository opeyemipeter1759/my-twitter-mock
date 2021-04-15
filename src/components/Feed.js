import React, { useState, useEffect } from "react";
import "./feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import dataStore from "./firebase";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dataStore
      .collection("post")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
