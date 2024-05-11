import { AxiosResponse } from "axios";
import { api } from "..";

interface ISignUp {
  username: string;
  emailUser: string;
  passwordUser: string;
}

export interface RespLoginSuccess {
  username: string;
  email: string;
  error?: never;
}

export interface RespLoginError {
  error: any;
  username?: never;
  email?: never;
}

export type RespSign = RespLoginSuccess | RespLoginError;

export const signUpUser = async ({ username, emailUser, passwordUser }: ISignUp): Promise<RespSign> => {
  try {
    const response: AxiosResponse = await api.post(
      "/users",
      {
        username: username,
        email: emailUser,
        password: passwordUser,
      },
      { withCredentials: true }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return { error };
  }
};
