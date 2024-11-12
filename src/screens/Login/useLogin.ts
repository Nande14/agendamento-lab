import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://agendamentoback-h2i55nsa.b4a.run/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password: password }),
        }
      );

      console.log({ response });

      /* if (response.ok) {
        const data = await response.json();
        const token = data.token; // Assume que a resposta contém o token

        localStorage.setItem("token", token);

        router.push("/");
      } else {
        setError("Erro ao fazer login. Verifique suas credenciais.");
      } */
    } catch (error) {
      setError("Erro ao fazer login. Por favor, tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    setPassword,
    password,
    setEmail,
    email,
    handleSubmit,
  };
};
