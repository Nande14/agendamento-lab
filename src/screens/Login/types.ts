import { Dispatch, FormEvent, SetStateAction } from "react";

export type TPasswordType = "text" | "password";

export interface IViewLogin {
  isLoading: boolean;
  setPassword: Dispatch<SetStateAction<string>>;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChangePasswordInputType: () => void;
  passwordInputType: TPasswordType;
  handleVerifyRecaptcha: () => void;
  isButtonDisabled: boolean;
}

export interface IFormButton {
  isDisabled: boolean;
}