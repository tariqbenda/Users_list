import Avatar from '@/ui/Avatar';
import React from 'react';

interface Props {
  username: string;
  city: string;
  company: string;
}

const UserCard = React.memo(function UserCard({ username, city, company }: Props) {

  // Memoize the component to prevent unnecessary re-renders
  console.log("UserCard component rendered:", username);

  return (
    <div className="size-[200px] bg-gray-200 flex flex-col items-center justify-center rounded-lg gap-2 shadow-md">
      <Avatar />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold">{username}</h2>
        <p className="text-sm text-gray-600">{city}</p>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
    </div>
  );
});

export default UserCard;
