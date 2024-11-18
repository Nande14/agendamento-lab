import { MouseEvent, useState } from "react";

export const useDatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleSelectDate = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "day") {
      setSelectedDate(
        new Date(
          currentYear,
          currentMonth,
          Number((event.target as HTMLElement).getAttribute("data-day"))
        )
      );
    }
  };

  return {
    prevMonth,
    nextMonth,
    currentMonth,
    currentYear,
    selectedDate,
    handleSelectDate,
  };
};
