import { MouseEvent } from "react";

export interface IViewDatePicker {
  prevMonth: () => void;
  nextMonth: () => void;
  currentMonth: number;
  currentYear: number;
  selectedDate: Date | any;
  handleSelectDate: (event: MouseEvent<HTMLDivElement>) => void;
}
