export interface Subject {
  id: number;
  name: string;
}

export interface IViewDicipline {
  handleOpenModalCreate: () => void;
  loading: boolean;
  subjects: Subject[];
  handleDisciplineClick: (disciplineId: number) => void;
  isModalCreateOpen: boolean;
  handleCloseModalCreate: () => void;
  selectedDisciplineId: number | null;
  handleCloseDisciplineDetails: () => void;
  fetchSubjects: () => void;
}
