import { IIncome } from "@/src/types";
import { AxiosResponse } from "axios";
import { api } from "..";

interface RespIncome {
  income?: IIncome[];
  error?: any;
}

export const incomeGet = async (): Promise<RespIncome> => {
  try {
    const response: AxiosResponse<{ income: IIncome[] }> = await api.get(`/income`, {
      withCredentials: true,
    });

    const incomesWithFormattedDate = response.data.income.map((income) => ({
      ...income,
      date: new Date(income.date).toISOString().split("T")[0],
    }));

    return { income: incomesWithFormattedDate };
  } catch (error) {
    console.error(error);
    return { error };
  }
};
