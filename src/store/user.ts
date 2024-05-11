import { create } from "zustand";
import { IUser } from "../types";

interface IUserState {
  user: IUser;
  setName: (name: IUser) => void;
}

export const useUserStore = create<IUserState>()((set) => ({
  user: {
    username: "",
    email: "",
  },
  setName: (userState) => {
    set(() => ({ user: userState }));
  },
}));
