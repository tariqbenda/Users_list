"use client";

import useUserStore from '@/stores/users';
import Avatar from '@/ui/Avatar';
import React from 'react';
import { User } from '@/types';
import SidebarUserViewer from './SidebarUserViewer';

const UserCard = React.memo(function UserCard({ User }: { User: User }) {

  const selectedUser = useUserStore((state) => state.selectedUser);
  const isLg = useUserStore((state) => state.isLg);
  const isSelected = selectedUser?.id === User.id;

  const baseClass = "size-[200px] bg-white/5 flex flex-col items-center justify-center rounded-lg gap-2 shadow-md border border-white/10 hover:animate-pulse hover:scale-101 hover:shadow-white/10 hover:cursor-pointer active:bg-white/10 transition-all duration-200 ease-in-out snap-start";
  const selectedClass = isSelected ? "lg:size-[200px] size-[400px] justify-start p-4 bg-gradient-to-r from-white/5 to-white/15" : ""; 

  return (
    <div className={`${baseClass} ${selectedClass}`}>
      {!isLg && isSelected ? (
        <SidebarUserViewer />
      ) : (
        <>
          <Avatar avatar={User.avatar} />
          <div className="flex flex-col items-center justify-center w-[90%] gap-2 overflow-hidden text-center">
            <h2 className="text-lg text-white/80 font-semibold overflow-hidden w-full h-[25px]">{User.name}</h2>
            <p className="text-sm text-white/60 overflow-hidden h-[25px]">{User.city}</p>
            <p className="text-sm text-white/40 overflow-hidden h-[25px]">{User.company}</p>
          </div>
        </>
      )}
    </div>
  );
});

export default UserCard;
