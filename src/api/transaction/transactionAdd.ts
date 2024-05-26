import { Transaction } from "@/src/types";
import { AxiosResponse } from "axios";
import { api } from "..";

interface RespTransaction {
  transaction?: Transaction[];
  error?: any;
}

export const transactionAdd = async (transactions: Omit<Transaction, "_id">[]): Promise<RespTransaction> => {
  try {
    const response: AxiosResponse<{ transaction: Transaction[] }> = await api.post<{ transaction: Transaction[] }>(
      `/user-transaction`,
      { transactions },
      { withCredentials: true }
    );

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
