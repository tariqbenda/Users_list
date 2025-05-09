import Avatar from '@/ui/Avatar';
import React from 'react';

interface Props {
  username: string;
  city: string;
  company: string;
  avatar: string;
}

const UserCard = React.memo(function UserCard({ username, city, company, avatar}: Props) {

  // Memoize the component to prevent unnecessary re-renders
  console.log("UserCard component rendered:", username);

  return (
    <div className="size-[200px] bg-white/5 flex flex-col items-center justify-center rounded-lg gap-2 shadow-md border border-white/10 hover:animate-pulse hover:shadow-md hover:scale-101 hover:shadow-white/10 hover:cursor-pointer active:bg-white/10 transition-all duration-200 ease-in-out snap-start hover:bg-gradient-to-r hover:from-white/5 hover:to-white/15">
      <Avatar avatar={avatar}/>
      <div className="flex flex-col items-center justify-center w-[90%] gap-2 overflow-hidden text-center">
        <h2 className="text-lg text-white/80 font-semibold overflow-hidden w-full h-[25px]">{username}</h2>
        <p className="text-sm text-white/60 overflow-hidden h-[25px]">{city}</p>
        <p className="text-sm text-white/40 overflow-hidden h-[25px]">{company}</p>
      </div>
    </div>
  );
});

export default UserCard;
