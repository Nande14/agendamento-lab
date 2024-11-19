import { MouseEvent, useState } from "react";
import { TDayStyleReturn } from "./types";

const dayStyles = {
  available: {
    backgroundColor: "#FAA635",
    fontColor: "#FFFFFF",
    borderColor: "#FAA635",
  },
  checked: {
    backgroundColor: "#FFFFFF",
    fontColor: "#8C8585",
    borderColor: "#8C8585",
  },
  removed: {
    backgroundColor: "#8C8585",
    fontColor: "#FFFFFF",
    borderColor: "#8C8585",
  },
  holiday: {
    backgroundColor: "#7B2D2F",
    fontColor: "#FFFFFF",
    borderColor: "#7B2D2F",
  },
};

// ALERT REMOVER APÓS CONECTAR COM API

type AvailabilityStatus = "available" | "checked" | "removed" | "holiday";

const statuses: Array<AvailabilityStatus> = [
  "available",
  "checked",
  "removed",
  "holiday",
];

const foo: Array<{ day: number; availability: AvailabilityStatus }> =
  Array.from({ length: 28 }, (_, index) => ({
    day: index + 1,
    availability: statuses[Math.floor(Math.random() * statuses.length)],
  }));

export const useDatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChooseDayStyle = (day: number): TDayStyleReturn => {
    const currentDay = foo ? foo?.find((item) => item?.day === day) : null;
    const dayAvailability: AvailabilityStatus =
      currentDay?.availability ?? "checked";

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

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleSelectDate = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(
      new Date(currentYear, currentMonth, Number(event?.currentTarget?.value))
    );

    console.log(event?.currentTarget?.value);
  };

  return {
    prevMonth,
    nextMonth,
    currentMonth,
    currentYear,
    selectedDate,
    handleSelectDate,
    handleChooseDayStyle,
  };
};
