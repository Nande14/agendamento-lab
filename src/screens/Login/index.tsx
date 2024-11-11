import { useLogin } from "./useLogin";
import { ViewLogin } from "./ViewLogin";

export const LoginScreen = () => {
  return <ViewLogin {...useLogin()} />;
};
