import { AxiosResponse } from "axios";
import { api } from "..";

interface ILogin {
  emailUser: string;
  passwordUser: string;
}

export interface RespLoginSuccess {
  username: string;
  email: string;
  error?: never;
}

export interface RespLoginError {
  username?: never;
  email?: never;
  error: any;
}

export type RespLogin = RespLoginSuccess | RespLoginError;

export const loginUser = async ({ emailUser, passwordUser }: ILogin): Promise<RespLogin> => {
  try {
    const response: AxiosResponse = await api.post(
      `/users/login`,
      {
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
