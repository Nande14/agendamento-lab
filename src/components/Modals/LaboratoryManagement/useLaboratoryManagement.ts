import React, { useEffect, useState } from "react";
import axios from "axios";
import { TLaboratory, IUseLaboratoryManagement } from "./types";
import { useToast } from "@chakra-ui/react";

export const useLaboratoryManagement = ({
  laboratoryId,
  onClose,
}: IUseLaboratoryManagement) => {
  const [laboratory, setLaboratory] = useState<TLaboratory | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    const fetchLaboratory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        setLoading(true);
        const response = await axios.get(
          `https://agendamentoback-h2i55nsa.b4a.run/laboratory/${laboratoryId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLaboratory(response.data);
        setLoading(false);
      } catch (error) {
        console.error(
          "Ocorreu um erro ao buscar detalhes do laboratório:",
          error
        );
        setLoading(false);
      }
    };

    if (laboratoryId) {
      fetchLaboratory();
    }
  }, [laboratoryId]);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token || !laboratory) {
        return;
      }

      setLoading(true);
      await axios.put(
        `https://agendamentoback-h2i55nsa.b4a.run/laboratory/${laboratory.id}`,
        laboratory,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);

      onClose();
      toast({
        title: "Laboratório salva com sucesso!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(
        "Ocorreu um erro ao salvar as alterações da laboratório:",
        error
      );
      setLoading(false);
      toast({
        title: "Erro ao salvar laboratório!",
        description:
          "Ocorreu um erro ao salvar as alterações do laboratório. Por favor, tente novamente mais tarde.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token || !laboratory) {
        return;
      }

      setLoading(true);
      await axios.delete(
        `https://agendamentoback-h2i55nsa.b4a.run/laboratory/${laboratory.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);

      onClose();
      toast({
        title: "Laboratório excluída com sucesso!",
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
    setLaboratory((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    laboratoryId,
    onClose,
    loading,
    laboratory,
    handleDelete,
    handleSave,
    handleChange,
  };
};
