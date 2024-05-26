import { Transaction } from "@/src/types";
import { AxiosResponse } from "axios";
import { api } from "..";

interface RespTransaction {
  transaction?: Transaction[];
  error?: any;
}

export const transactionGet = async (): Promise<RespTransaction> => {
  try {
    const response: AxiosResponse<{ transaction: Transaction[] }> = await api.get(`/user-transaction`, {
      withCredentials: true,
    });

    const transactionsWithFormattedDate = response.data.transaction.map((transaction) => ({
      ...transaction,
      date: transaction.date.split("T")[0],
    }));

    return { transaction: transactionsWithFormattedDate };
  } catch (error) {
    console.error(error);
    return { error };
  }
};
