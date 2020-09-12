import React, { useState } from "react";
import "./styles.css";

// const Post = (props) => {
//     return 
// }

const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const { username } = props

  return (
    <React.Fragment>
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      <img src="https://via.placeholder.com/300" alt="profile" />
    </React.Fragment>
  );
};

export default function App() {
  const username = "instagram";
  return <Profile username={username} />;
}