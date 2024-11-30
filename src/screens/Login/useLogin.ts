import { useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { TPasswordType } from "./types";

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordInputType, setPasswordInputType] =
    useState<TPasswordType>("password");
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://agendamentoback-h2i55nsa.b4a.run/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail: email, userPassword: password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { access_token } = data;
        localStorage.setItem("token", access_token);
        router.push("/");
      } else {
        toast({
          title: "Erro ao fazer login",
          description: "Verifique suas credenciais",
          status: "error",
          duration: 5000,
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);

      toast({
        title: "Disciplina criada com sucesso!",
        description: "",
        status: "error",
        duration: 5000,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePasswordInputType = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
    } else {
      setPasswordInputType("password");
    }
  };

  return {
    isLoading,
    setPassword,
    password,
    setEmail,
    email,
    handleSubmit,
    passwordInputType,
    handleChangePasswordInputType,
  };
};

// Erro ao fazer login. Por favor, tente novamente mais tarde.
