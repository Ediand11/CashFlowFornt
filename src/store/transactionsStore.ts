import { create } from "zustand";
import { Transaction } from "../types";

interface ITransactionsState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  setTransactions: (newTransactions: Transaction[]) => void;
}

export const useTransactionsStore = create<ITransactionsState>()((set) => ({
  transactions: [],
  addTransaction: (newTransaction) => {
    set((state) => ({
      transactions: [...state.transactions, newTransaction],
    }));
  },
  setTransactions: (newTransactions) => {
    set({ transactions: newTransactions });
  },
}));
