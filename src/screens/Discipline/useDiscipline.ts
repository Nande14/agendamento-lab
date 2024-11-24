import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Subject } from "./types";

export const useDiscipline = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<
    number | null
  >(null);
  const router = useRouter();

  const fetchSubjects = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await axios.get(
        "https://agendamentoback-h2i55nsa.b4a.run/discipline/get-all-disciplines",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSubjects(response.data);
    } catch (error) {
      console.error("Erro ao buscar disciplinas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const handleOpenModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  const handleCloseModalCreate = () => {
    setIsModalCreateOpen(false);
    fetchSubjects();
  };

  const handleDisciplineClick = (disciplineId: number) => {
    setSelectedDisciplineId(disciplineId);
  };

  const handleCloseDisciplineDetails = () => {
    setSelectedDisciplineId(null);
    fetchSubjects();
  };

  return {
    handleOpenModalCreate,
    loading,
    subjects,
    handleDisciplineClick,
    isModalCreateOpen,
    handleCloseModalCreate,
    selectedDisciplineId,
    handleCloseDisciplineDetails,
    fetchSubjects,
  };
};
