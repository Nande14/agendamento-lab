import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ITeacher } from "./types";

export const useProfessorManagement = () => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchTeachers = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        setLoading(true);
        try {
          const response = await axios.get(
            "https://agendamentoback-h2i55nsa.b4a.run/professor/get-all-professors",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setTeachers(response.data);
        } catch (error) {
          console.error("Erro ao buscar professores:", error);
        } finally {
          setLoading(false);
        }
      } else {
        router.push("/login");
      }
    };
    fetchTeachers();
  }, [router]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTeacherClick = (teacherId: number) => {
    setSelectedTeacherId(teacherId);
    handleOpenModal();
  };

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  return {
    handleOpenCreateModal,
    loading,
    teachers,
    handleTeacherClick,
    isModalOpen,
    selectedTeacherId,
    handleCloseModal,
    isCreateModalOpen,
    handleCloseCreateModal,
  };
};
