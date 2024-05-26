import { IIncome } from "@/src/types";
import { AxiosResponse } from "axios";
import { api } from "..";

interface RespIncome {
  income?: IIncome[];
  error?: any;
}

export const incomeAdd = async (incomes: Omit<IIncome, "_id">[]): Promise<RespIncome> => {
  try {
    const response: AxiosResponse<{ income: IIncome[] }> = await api.post<{ income: IIncome[] }>(`/income`, { incomes }, { withCredentials: true });

    const incomesWithFormattedDate = response.data.income.map((income) => ({
      ...income,
      date: income.date.split("T")[0],
    }));

    return { income: incomesWithFormattedDate };
  } catch (error) {
    console.error(error);
    return { error };
  }
};
