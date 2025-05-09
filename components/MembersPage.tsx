"use client";

import React, { useMemo, useState } from "react";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/queries/users";
import type { User } from "@/types";
import Loading from "@/ui/Loading";
import { useSyncIsLg } from "@/hooks/useSyncIsLg";
import useUserStore from "@/stores/users";

const MembersPage = () => {
  useSyncIsLg();

  const [searchTerm, setSearchTerm] = useState("");
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);

  const { data: users, isLoading } = useQuery<User[]>({
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
        user.company.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );
  }, [searchTerm, users]);

  return (
    <div className="flex flex-col items-center pt-8 justify-start w-full lg:w-[70%] h-full transition-all duration-200 ease-in-out gap-2 px-8">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <div className="flex items-center justify-between w-full p-2">
            <h1 className="text-2xl text-white/80 font-semibold">Members</h1>
            <p className="text-sm text-white/60">{filteredUsers.length} members</p>
          </div>
        {isLoading && (
          <div className="w-full h-full flex items-center justify-center p-4">
            <Loading />
          </div>
        )}

        <ul className="size-full flex flex-wrap gap-4 p-2 items-start justify-center overflow-y-auto scroll-pt-2 scroll-smooth snap-y snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {filteredUsers.map((user) => (
                <div onClick={() => {setSelectedUser(user)}} key={user.id}>
                  <UserCard key={user.id} User={user}/>
                </div>
            ))}
        </ul>
        {filteredUsers.length === 0 && (
          <div className="w-full h-full flex items-center justify-center">
            No users found
          </div>
        )}

    </div>
)};

export default MembersPage;
