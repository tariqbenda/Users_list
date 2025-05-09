// stores/useUserStore.ts
import { create } from "zustand";
import { User } from "@/types";

interface UserStore {
  selectedUser: User | null;
  isLg: boolean;
  setIsLg: (isLg: boolean) => void;
  setSelectedUser: (user: User | null) => void;
  clearSelectedUser: () => void;
}

const useUserStore = create<UserStore>((set, get) => ({
  selectedUser: null,
    isLg: false,
    setIsLg: (isLg) => set({ isLg }),
  setSelectedUser: (user) => set(() => (
    get().selectedUser?.id === user?.id ? { selectedUser: null } : { selectedUser: user }
  )),
  clearSelectedUser: () => set({ selectedUser: null }),
}));

export default useUserStore;