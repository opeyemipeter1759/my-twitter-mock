import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1354923801318993921/3zauGbYS_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Opeyemi Peter{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @OpeyemiPita
              </span>
            </h3>

            <MoreHorizIcon className="moreIcon" />
          </div>
          <div className="post__headerDescription">
            <p>I got challenged to build twitter clone ! and here i am</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/xTiTnfRe5cfu5OR08U/source.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
