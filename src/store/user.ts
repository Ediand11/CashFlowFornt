import { create } from "zustand";
import { IUser } from "../types";

interface IUserState {
  user: IUser;
  setName: (name: string) => void;
  setBalance: (balance: string) => void;
}

const useUserStore = create<IUserState>()((set) => ({
  user: {
    id: "",
    name: "",
    balance: "",
  },
  setName: (name) => {
    set((state) => ({ user: { ...state.user, name } }));
  },
  setBalance: (balance) => {
    set((state) => ({ user: { ...state.user, balance } }));
  },
}));
