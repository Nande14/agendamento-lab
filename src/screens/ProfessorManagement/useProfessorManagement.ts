import { useState } from "react";
import { IProfessor } from "./types";
import { useFetch } from "@/hooks/useFetch";
import { appointmentApi } from "@/services";

export const useProfessorManagement = () => {
  const [selectedTeacherId, setSelectedTeacherId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const {
    data: professors,
    mutate,
    isLoading,
  } = useFetch<IProfessor[]>(
    "professor/get-all-professors",
    {},
    true,
    appointmentApi
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    mutate();
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
    mutate();
  };

  return {
    handleOpenCreateModal,
    isLoading,
    professors,
    handleTeacherClick,
    isModalOpen,
    selectedTeacherId,
    handleCloseModal,
    isCreateModalOpen,
    handleCloseCreateModal,
  };
};
