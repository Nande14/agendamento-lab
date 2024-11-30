import { Dispatch, FormEvent, SetStateAction } from "react";

export type TPasswordType = "text" | "password"

export interface IViewLogin {
  isLoading: boolean;
  error: string | null;
  setPassword: Dispatch<SetStateAction<string>>;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChangePasswordInputType: () => void;
  passwordInputType: TPasswordType;
}
