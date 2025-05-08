import Users_List from "@/components/Users";
import React from "react";
import Link from "next/link";

const Home = () => {
  console.log("Home component rendered");

  // Get dehydrated state (this is passed to the client)

  return (
    <>
      <Users_List />
      <Link href="/test" className="absolute top-0 left-0 m-4 p-2 bg-blue-500 text-white rounded">
        Go to Test Page
      </Link>
    </>
  );
}

export default Home;
