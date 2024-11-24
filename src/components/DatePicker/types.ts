import { MouseEvent } from "react";

export type TDayStyleReturn = {
  backgroundColor: string;
  fontColor: string;
  borderColor: string;
};

export type TAvailabilityStatus = "available" | "checked" | "removed" | "holiday";

export interface IDatePicker {
  handlePickDate: (date: string) => void;
}

export interface IUseDatePicker extends IDatePicker {}

export interface IViewDatePicker {
  prevMonth: () => void;
  nextMonth: () => void;
  currentMonth: number;
  currentYear: number;
  handleSelectDate: (event: MouseEvent<HTMLButtonElement>) => void;
  handleChooseDayStyle: (day: number) => TDayStyleReturn;
}

export interface IDayContainer {
  dayStyle: TDayStyleReturn;
}
