import React from "react";
import Sidebar from "@/components/Sidebar";
import MembersPage from "@/components/MembersPage";

const Home = () => {
  console.log("Home component rendered");

  return (
    <div className="flex items-center justify-center gap-4 size-full">
      <Sidebar/>
      <MembersPage/>
    </div>
  );
}

export default Home;
