"use client";

import React, { useMemo, useState } from "react";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/queries/users";
import type { User } from "@/types"; // ✅ Move shared types here if not already

const Users_List = () => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log("Users_List component rendered");

  const { data: users, isLoading, isError } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    const term = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.username.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
  }, [searchTerm, users]);

  if (isLoading) {
    return (
      <div className="size-[20px] flex items-center justify-center bg-black rounded-full animate-ping" />
    );
  }

  if (isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Error fetching users
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start w-[70%] h-full gap-4 p-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <ul className="bg-red-200 w-full h-fit flex flex-wrap gap-4 items-center justify-center">
            {filteredUsers.map((user) => (
            <UserCard key={user.id} username={user.username} city={user.address.city} company={user.company.name} />
            ))}
        </ul>
        {filteredUsers.length === 0 && (
          <div className="w-full h-full flex items-center justify-center">
            No users found
          </div>
        )}

    </div>
)};

export default Users_List;
