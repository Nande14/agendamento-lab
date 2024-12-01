type TProfessor = {
  id: number;
  name: string;
};

type TDiscipline = {
  id: number;
  name: string;
};

type TLaboratory = {
  id: number;
  name: string;
  machineQuantity: string;
  softwares: string;
  observation: string;
};

export interface ISchedule {
  id: string;
  professor: TProfessor;
  discipline: TDiscipline;
  laboratory: TLaboratory;
  start_time: string;
  end_time: string;
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
