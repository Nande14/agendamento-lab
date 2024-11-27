import { useState } from "react";
import { Subject } from "./types";
import { useFetch } from "@/hooks/useFetch";
import { appointmentApi } from "@/services";

export const useDiscipline = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<
    number | null
  >(null);

  const {
    data: subjects,
    mutate,
    isLoading,
  } = useFetch<Subject[]>(
    "discipline/get-all-disciplines",
    {},
    true,
    appointmentApi
  );

  const handleOpenModalCreate = () => {
    setIsModalCreateOpen(true);
  };

  const handleCloseModalCreate = () => {
    setIsModalCreateOpen(false);
    mutate();
  };

  const handleDisciplineClick = (disciplineId: number) => {
    setSelectedDisciplineId(disciplineId);
  };

  const handleCloseDisciplineDetails = () => {
    setSelectedDisciplineId(null);
    mutate();
  };

  return {
    handleOpenModalCreate,
    isLoading,
    subjects,
    handleDisciplineClick,
    isModalCreateOpen,
    handleCloseModalCreate,
    selectedDisciplineId,
    handleCloseDisciplineDetails,
  };
};
