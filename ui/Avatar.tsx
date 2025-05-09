import React from "react";

interface AvatarProps {
  avatar: string; // Expect a string for the avatar URL
}

const Avatar = ({ avatar }: AvatarProps) => {
  return (
    <img
      src={avatar}
      alt="User Avatar"
      className="w-16 h-16 rounded-full object-cover"
    />
  );
};

export default Avatar;