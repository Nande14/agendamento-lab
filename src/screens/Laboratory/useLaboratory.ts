import { useState } from "react";
import { Laboratory } from "./types";
import { useFetch } from "@/hooks/useFetch";
import { appointmentApi } from "@/services";

export const useLaboratory = () => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [selectedLaboratoryId, setSelectedLaboratoryId] = useState<
    number | null
  >(null);

  const {
    data: laboratories,
    mutate,
    isLoading,
  } = useFetch<Laboratory[]>(
    "laboratory/get-all-laboratories",
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

  const handleLaboratoryClick = (laboratoryId: number) => {
    setSelectedLaboratoryId(laboratoryId);
  };

  const handleCloseLaboratoryDetails = () => {
    setSelectedLaboratoryId(null);
    mutate();
  };

  return {
    handleOpenModalCreate,
    isLoading,
    laboratories,
    handleLaboratoryClick,
    isModalCreateOpen,
    handleCloseModalCreate,
    selectedLaboratoryId,
    handleCloseLaboratoryDetails,
  };
};
