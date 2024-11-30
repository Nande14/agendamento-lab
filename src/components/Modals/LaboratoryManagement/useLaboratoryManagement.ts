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
          `https://marcacao-sala.onrender.com/subject/${laboratoryId}`,
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
          "Ocorreu um erro ao buscar detalhes da disciplina:",
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
        `https://marcacao-sala.onrender.com/subject/${laboratory.id}`,
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
      if (!token || !laboratory) {
        return;
      }

      setLoading(true);
      await axios.delete(
        `https://marcacao-sala.onrender.com/subject/${laboratory.id}`,
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
