import { create } from "zustand";
import { IIncome } from "../types";

interface IIncomesState {
  incomes: IIncome[];
  addIncome: (income: IIncome) => void;
  setIncomes: (newIncomes: IIncome[]) => void;
}

export const useIncomesStore = create<IIncomesState>()((set) => ({
  incomes: [],
  addIncome: (newIncome) => {
    set((state) => ({
      incomes: [...state.incomes, newIncome],
    }));
  },
  setIncomes: (newIncomes) => {
    set({ incomes: newIncomes });
  },
}));
