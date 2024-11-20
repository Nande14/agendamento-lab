import { useState } from "react";
import { useRouter } from "next/router";

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
        setError("Erro ao fazer login. Verifique suas credenciais.");
      }
    } catch (error) {
      setError("Erro ao fazer login. Por favor, tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    setPassword,
    password,
    setEmail,
    email,
    handleSubmit,
  };
};
