import { TFilteredAndFormattedSchedule, ISchedule } from "./types";
import { useEffect, useState } from "react";
import { formatDate, formatTime } from "./helps";
import { appointmentApi } from "@/services";
import { useFetch } from "@/hooks/useFetch";

export const useReservation = () => {
  const [filteredAndFormattedSchedules, setFilteredAndFormattedSchedules] =
    useState<TFilteredAndFormattedSchedule[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handlePickDate = (date: string) => {
    setSelectedDate(date);
  };

  const { data: schedules } = useFetch<ISchedule[]>(
    "schedule/get-all-schedules",
    {},
    true,
    appointmentApi
  );

  const filterByDate = () => {
    if (!selectedDate) return;

    const filtered = schedules
      ?.filter((schedule) => formatDate(schedule.start_time) === selectedDate)
      ?.map((schedule) => ({
        name: schedule?.teacher?.name || "Mockado", // Nome fixo até correção de retorno de professor e class
        date: formatDate(schedule?.start_time),
        hour: `${formatTime(schedule?.start_time)} - ${formatTime(
          schedule?.end_time
        )}`,
        class: schedule?.class || "Mockado", // dado mockado
        description: schedule?.description,
      }));

    if (filtered) setFilteredAndFormattedSchedules(filtered);
  };

  useEffect(() => {
    filterByDate();
  }, [selectedDate, schedules]);

  return {
    handlePickDate,
    filteredAndFormattedSchedules,
  };
};