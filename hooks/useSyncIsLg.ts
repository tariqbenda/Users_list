"use client"

import { useEffect } from "react";
import useUserStore from "@/stores/users";

// This hook synchronizes the isLg state with the window size and updates the state when the window size changes.

// it used to determine if the screen size is large (lg) or not 
//    for responsive design to know when should show UserCardViewer 
//    in the sidebar and when should show the UserCard

export function useSyncIsLg() {
  const setIsLg = useUserStore((state) => state.setIsLg);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLg(e.matches);
    };

    setIsLg(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [setIsLg]);
}

export default useSyncIsLg;