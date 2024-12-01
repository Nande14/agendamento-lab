import { TAvailabilityStatus } from "@/components/DatePicker/types";
import axios from "axios";
import { useState } from "react";

export const useCalendarManagement = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePickDate = (date: string) => {
    setSelectedDate(date);
  };

  const updateDayStatus = async (newStatus: TAvailabilityStatus) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const body = {
        date: selectedDate,
        status: newStatus,
      };

      const response = await axios.post(
        "https://agendamentoback-h2i55nsa.b4a.run/calendar/update",
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log({ response });
    } catch (error) {
      console.error("Erro ao buscar status de dispobilidade:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLiberate = async () => {
    await updateDayStatus("available");
  };

  const handleRemove = async () => {
    await updateDayStatus("removed");
  };

  const handleAddHoliday = async () => {
    await updateDayStatus("holiday");
  };

  return { handleLiberate, handleRemove, handleAddHoliday, handlePickDate };
};
