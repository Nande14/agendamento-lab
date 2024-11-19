import { MouseEvent } from "react";

export type TDayStyleReturn = {
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
};

export interface IViewDatePicker {
  prevMonth: () => void;
  nextMonth: () => void;
  currentMonth: number;
  currentYear: number;
  selectedDate: Date | any;
  handleSelectDate: (event: MouseEvent<HTMLButtonElement>) => void;
  handleChooseDayStyle: (day: number) => TDayStyleReturn;
}

export interface IDayContainer {
  dayStyle: TDayStyleReturn;
}
