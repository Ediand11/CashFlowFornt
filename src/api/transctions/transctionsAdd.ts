import { Transaction } from "@/src/types";
import { AxiosResponse } from "axios";
import { api } from "..";

export interface RespTransactionSuccess {
  transaction: Transaction[];
  error?: never;
}

export interface RespTransactionError {
  transaction?: never;
  error: any;
}

export type RespTransaction = RespTransactionSuccess | RespTransactionError;

export const transactionAdd = async (transactions: Omit<Transaction, "_id">[]): Promise<RespTransaction> => {
  try {
    const response: AxiosResponse = await api.post(
      `/user-transaction`,
      {
        transactions: transactions,
      },
      { withCredentials: true }
    );

    const transactionsWithFormattedDate: Transaction[] = response.data.transaction?.map((transaction: Transaction) => {
      return {
        ...transaction,
        date: transaction.date.split("T")[0],
      };
    });

    return { transaction: transactionsWithFormattedDate };
  } catch (error) {
    console.error(error);
    return { error };
  }
};
