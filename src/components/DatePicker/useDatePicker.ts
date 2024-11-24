import { MouseEvent, useCallback, useEffect, useState } from "react";
import { IUseDatePicker, TAvailabilityStatus, TDayStyleReturn } from "./types";
import axios from "axios";

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

export const useDatePicker = ({ handlePickDate }: IUseDatePicker) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState(false);
  const [monthDaysAvailability, setMonthDaysAvailability] = useState<
    [] | Array<{ date: string; status: TAvailabilityStatus }>
  >([]);

  const getMonthDaysAvailability = useCallback(async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await axios.get(
        `https://agendamentoback-h2i55nsa.b4a.run/calendar/month-data?year=${currentYear}&month=${
          currentMonth + 1
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMonthDaysAvailability(response.data);
    } catch (error) {
      console.error("Erro ao buscar status de dispobilidade:", error);
    } finally {
      setIsLoading(false);
    }
  }, [currentYear, currentMonth]);

  useEffect(() => {
    getMonthDaysAvailability();
  }, [currentMonth]);

  const formatMonthDaysAvailability = () => {
    const formattedMonthDaysAvailability = monthDaysAvailability.map((item) => {
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
    });

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

  const prevMonth = () => {
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
    prevMonth,
    nextMonth,
    currentMonth,
    currentYear,
    handleSelectDate,
    handleChooseDayStyle,
  };
};
