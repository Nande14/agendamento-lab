import axios from "axios";
import { TFilteredAndFormattedSchedule, ISchedule } from "./types";
import { useEffect, useState } from "react";
import { formatDate, formatTime } from "./helps";

export const useReservation = () => {
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [filteredAndFormattedSchedules, setFilteredAndFormattedSchedules] =
    useState<TFilteredAndFormattedSchedule[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  console.log({ filteredAndFormattedSchedules });

  const handlePickDate = (date: string) => {
    setSelectedDate(date);
  };

  const fetchSchedules = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token de autorização não encontrado.");
        return;
      }
      const response = await axios.get<ISchedule[]>(
        "https://agendamentoback-h2i55nsa.b4a.run/schedule/get-all-schedules",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSchedules(response.data);
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterByDate = () => {
    if (!selectedDate) return;

    const filtered = schedules
      .filter((schedule) => formatDate(schedule.start_time) === selectedDate)
      .map((schedule) => ({
        name: schedule?.teacher?.name || "Mockado", // Nome fixo até correção de retorno de professor e class
        date: formatDate(schedule?.start_time),
        hour: formatTime(schedule?.start_time),
        class: schedule?.class || "Mockado", // dado mockado
        description: schedule?.description,
      }));

    setFilteredAndFormattedSchedules(filtered);
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  useEffect(() => {
    filterByDate();
  }, [selectedDate, schedules]);

  return {
    handlePickDate,
    filteredAndFormattedSchedules,
  };
};
