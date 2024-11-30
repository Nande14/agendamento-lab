import { dayNames } from "@/const/date";

export const getDaysWithNulls = (year: number, month: number) => {
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = getNumberofDaysInMonth(year, month);
  const days = Array(firstDayIndex).fill(null);

  days.push(...range(1, daysInMonth + 1));

  return days;
};

export const getNumberofDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = (year: number, month: number) => {
  const dayIndex = new Date(year, month, 1).getDay();
  const firstHalf = dayNames.slice(dayIndex);
  return [...firstHalf, ...dayNames.slice(0, dayIndex)];
};

export const range = (start: number, end: number) => {
  const length = Math.abs((end - start) / 1);

  const { result } = Array.from({ length }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: start }
  );

  return result;
};
