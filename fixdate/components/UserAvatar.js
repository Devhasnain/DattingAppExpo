import React from "react";
import StoryGradient from "./StoryGradient";
import { Avatar } from "react-native-paper";

const UserAvatar = ({ image, name, size }) => {
  return (
    <StoryGradient>
      {image ? (
        <Avatar.Image size={size} source={require("../assets/user.png")} />
      ) : name ? (
        <Avatar.Text label={name[0]} size={size} />
      ) : (
        <Avatar.Text label="U" size={size} />
      )}
    </StoryGradient>
  );
};

export default UserAvatar;
