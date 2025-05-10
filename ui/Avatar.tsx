import React from "react";
import default_avatar from "../public/avatar_picture.svg";
import Image from "next/image";

interface AvatarProps {
  avatar?: string | undefined;
}

const Avatar = ({ avatar=undefined }: AvatarProps) => {
  return (
    <Image
      src={ avatar || default_avatar.src}
      alt="Avatar"
      width={60}
      height={60}
      className={`rounded-full mask-contain`}
    />
  );
};

export default Avatar;