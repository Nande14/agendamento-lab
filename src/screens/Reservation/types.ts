type TTeacher = {
  id: number;
  name: string;
};

type TDiscipline = {
  id: number;
  name: string;
};

export interface ISchedule {
  id: string;
  teacher: TTeacher;
  discipline: TDiscipline;
  start_time: string;
  end_time: string;
  laboratory: string;
  description: string;
}

export interface TFilteredAndFormattedSchedule {
  name: string;
  date: string;
  hour: string;
  laboratory: string;
  description: string;
}

export interface IViewReservation {
  handlePickDate: (date: string) => void;
  filteredAndFormattedSchedules: TFilteredAndFormattedSchedule[];
}
