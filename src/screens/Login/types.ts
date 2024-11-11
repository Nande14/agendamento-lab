import { Dispatch, FormEvent, SetStateAction } from "react";

export interface IViewLogin {
  loading: boolean;
  error: string | null;
  setPassword: Dispatch<SetStateAction<string>>;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
