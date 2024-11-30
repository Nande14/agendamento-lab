import React, { useEffect, useState } from "react";
import axios from "axios";
import { TDiscipline, IUseDisciplineManagement } from "./types";
import { useToast } from "@chakra-ui/react";

export const useDisciplineManagement = ({
  disciplineId,
  onClose,
}: IUseDisciplineManagement) => {
  const [discipline, setDiscipline] = useState<TDiscipline | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    const fetchDiscipline = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        setLoading(true);
        const response = await axios.get(
          `https://agendamentoback-h2i55nsa.b4a.run/discipline/${disciplineId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDiscipline(response.data);
        setLoading(false);
      } catch (error) {
        console.error(
          "Ocorreu um erro ao buscar detalhes da disciplina:",
          error
        );
        setLoading(false);
      }
    };

    if (disciplineId) {
      fetchDiscipline();
    }
  }, [disciplineId]);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token || !discipline) {
        return;
      }

      setLoading(true);
      await axios.put(
        `https://agendamentoback-h2i55nsa.b4a.run/discipline/${discipline.id}`,
        discipline,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);

      onClose();
      toast({
        title: "Disciplina salva com sucesso!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(
        "Ocorreu um erro ao salvar as alterações da disciplina:",
        error
      );
      setLoading(false);
      toast({
        title: "Erro ao salvar disciplina!",
        description:
          "Ocorreu um erro ao salvar as alterações da disciplina. Por favor, tente novamente mais tarde.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token || !discipline) {
        return;
      }

      setLoading(true);
      await axios.delete(
        `https://agendamentoback-h2i55nsa.b4a.run/discipline/${discipline.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);

      onClose();
      toast({
        title: "Disciplina excluída com sucesso!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Ocorreu um erro ao excluir a disciplina:", error);
      setLoading(false);
      toast({
        title: "Erro ao excluir disciplina!",
        description:
          "Ocorreu um erro ao excluir a disciplina. Por favor, tente novamente mais tarde.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDiscipline((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    disciplineId,
    onClose,
    loading,
    discipline,
    handleDelete,
    handleSave,
    handleChange,
  };
};
