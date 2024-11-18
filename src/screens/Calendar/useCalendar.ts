import { useState } from "react";

export const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "Disponível" | "Marcado" | "Removido" | "Feriado" | null
  >(null);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const handleStatusChange = (
    newStatus: "Disponível" | "Marcado" | "Removido" | "Feriado"
  ) => {
    setStatus(newStatus);
  };

  const handleLiberate = () => {
    console.log("Dia liberado");
  };

  const handleRemove = () => {
    console.log("Dia removido");
  };

  const handleAddHoliday = () => {
    console.log("Feriado adicionado");
  };

  return { handleLiberate, handleRemove, handleAddHoliday };
};
