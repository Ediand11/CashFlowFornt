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

export const transactionGet = async (): Promise<RespTransaction> => {
  try {
    const response: AxiosResponse<RespTransaction> = await api.get(`/user-transaction`, {
      withCredentials: true,
    });

    const transactionsWithFormattedDate = response.data.transaction?.map((transaction: Transaction) => {
      return {
        ...transaction,
        date: transaction.date.split("T")[0],
      };
    });

    return { transaction: transactionsWithFormattedDate } as RespTransactionSuccess;
  } catch (error) {
    console.error(error);
    return { error };
  }
};
