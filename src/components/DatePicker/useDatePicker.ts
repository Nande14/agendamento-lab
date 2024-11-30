import { MouseEvent, useState } from "react";
import {
  IMonthDaysAvailability,
  IUseDatePicker,
  TAvailabilityStatus,
  TDayStyleReturn,
} from "./types";
import { useFetch } from "@/hooks/useFetch";
import { appointmentApi } from "@/services";
import { dayStyles } from "@/const/date";

export const useDatePicker = ({ handlePickDate }: IUseDatePicker) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { data: monthDaysAvailability } = useFetch<IMonthDaysAvailability[]>(
    `calendar/month-data?year=${currentYear}&month=${currentMonth + 1}`,
    {},
    true,
    appointmentApi
  );

  const formatMonthDaysAvailability = () => {
    const formattedMonthDaysAvailability = monthDaysAvailability?.map(
      (item) => {
        const [, , day] = item.date.split("-");

        if (day.startsWith("0")) {
          const newDay = day.slice(1, 2);

          return {
            day: Number(newDay),
            status: item.status,
          };
        }

        return {
          day: Number(day),
          status: item.status,
        };
      }
    );

    return { formattedMonthDaysAvailability };
  };

  const handleChooseDayStyle = (day: number): TDayStyleReturn => {
    const { formattedMonthDaysAvailability } = formatMonthDaysAvailability();

    const currentDay = formattedMonthDaysAvailability
      ? formattedMonthDaysAvailability?.find((item) => item?.day === day)
      : null;
    const dayAvailability: TAvailabilityStatus =
      currentDay?.status ?? "available";

    const dayStyle = dayStyles[dayAvailability];

    return dayStyle;
  };

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const previousMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleSelectDate = (event: MouseEvent<HTMLButtonElement>) => {
    const selectedDate = new Date(
      currentYear,
      currentMonth,
      Number(event?.currentTarget?.value)
    );

    const formattedDate = selectedDate.toISOString().split("T")[0];

    handlePickDate(formattedDate);
  };

  return {
    previousMonth,
    nextMonth,
    currentMonth,
    currentYear,
    handleSelectDate,
    handleChooseDayStyle,
  };
};
